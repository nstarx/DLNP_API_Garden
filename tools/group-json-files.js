#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CATALOG_FILE = 'json-catalog.json';
const OUTPUT_BASE_DIR = 'grouped-json';
const SOURCE_BASE_DIR = 'client_mock_def';

/**
 * Creates a safe directory name from a group name
 */
function sanitizeDirectoryName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Copy a file from source to destination
 */
function copyFile(src, dest) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
}

/**
 * Main function to group JSON files by their group attribute
 */
function groupJsonFiles() {
    console.log('Starting JSON file grouping...\n');
    
    // Read the catalog file
    if (!fs.existsSync(CATALOG_FILE)) {
        console.error(`Error: Catalog file '${CATALOG_FILE}' not found.`);
        console.log('Please run the catalog-json-files.js tool first.');
        process.exit(1);
    }
    
    const catalogData = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
    
    // Create output directory
    if (!fs.existsSync(OUTPUT_BASE_DIR)) {
        fs.mkdirSync(OUTPUT_BASE_DIR, { recursive: true });
    }
    
    // Track statistics
    const stats = {
        totalFiles: 0,
        groupedFiles: {},
        errors: []
    };
    
    // Group files
    const filesByGroup = {};
    
    catalogData.files.forEach(file => {
        if (file.group && !file.ignored) {
            if (!filesByGroup[file.group]) {
                filesByGroup[file.group] = [];
            }
            filesByGroup[file.group].push(file);
        }
    });
    
    // Process each group
    Object.keys(filesByGroup).forEach(groupName => {
        const groupDirName = sanitizeDirectoryName(groupName);
        const groupDir = path.join(OUTPUT_BASE_DIR, groupDirName);
        
        console.log(`Processing group: ${groupName} (${filesByGroup[groupName].length} files)`);
        console.log(`  → Directory: ${groupDir}`);
        
        // Create group directory
        if (!fs.existsSync(groupDir)) {
            fs.mkdirSync(groupDir, { recursive: true });
        }
        
        // Create group info file
        const groupInfo = {
            groupName: groupName,
            description: filesByGroup[groupName][0].groupDescription || '',
            fileCount: filesByGroup[groupName].length,
            totalSize: filesByGroup[groupName].reduce((sum, f) => sum + f.fileSize, 0),
            files: []
        };
        
        // Copy files to group directory
        filesByGroup[groupName].forEach(file => {
            try {
                const sourcePath = file.absolutePath;
                const destFileName = path.basename(file.fileName);
                const destPath = path.join(groupDir, destFileName);
                
                // Check if source file exists
                if (!fs.existsSync(sourcePath)) {
                    console.error(`  ✗ Source file not found: ${sourcePath}`);
                    stats.errors.push(`File not found: ${sourcePath}`);
                    return;
                }
                
                // Copy the file
                copyFile(sourcePath, destPath);
                
                // Add to group info
                groupInfo.files.push({
                    fileName: destFileName,
                    originalPath: file.location,
                    purpose: file.purpose,
                    structure: file.structure,
                    size: file.fileSize
                });
                
                // Update statistics
                stats.totalFiles++;
                if (!stats.groupedFiles[groupName]) {
                    stats.groupedFiles[groupName] = 0;
                }
                stats.groupedFiles[groupName]++;
                
            } catch (error) {
                console.error(`  ✗ Error copying ${file.fileName}: ${error.message}`);
                stats.errors.push(`${file.fileName}: ${error.message}`);
            }
        });
        
        // Save group info file
        const infoFilePath = path.join(groupDir, '_group-info.json');
        fs.writeFileSync(infoFilePath, JSON.stringify(groupInfo, null, 2));
        console.log(`  ✓ Created group info file: ${infoFilePath}`);
        console.log();
    });
    
    // Create summary report
    const summary = {
        generatedAt: new Date().toISOString(),
        sourceDirectory: SOURCE_BASE_DIR,
        outputDirectory: OUTPUT_BASE_DIR,
        statistics: {
            totalFiles: stats.totalFiles,
            totalGroups: Object.keys(filesByGroup).length,
            filesByGroup: stats.groupedFiles,
            errors: stats.errors.length
        },
        groups: Object.keys(filesByGroup).map(groupName => ({
            name: groupName,
            directory: sanitizeDirectoryName(groupName),
            fileCount: filesByGroup[groupName].length,
            description: filesByGroup[groupName][0].groupDescription || ''
        })),
        errors: stats.errors
    };
    
    // Save summary report
    const summaryPath = path.join(OUTPUT_BASE_DIR, '_summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    // Print final summary
    console.log('═'.repeat(60));
    console.log('GROUPING COMPLETE');
    console.log('═'.repeat(60));
    console.log(`Total files processed: ${stats.totalFiles}`);
    console.log(`Total groups created: ${Object.keys(filesByGroup).length}`);
    console.log(`Output directory: ${OUTPUT_BASE_DIR}`);
    console.log(`Summary report: ${summaryPath}`);
    
    if (stats.errors.length > 0) {
        console.log(`\nErrors encountered: ${stats.errors.length}`);
        stats.errors.slice(0, 5).forEach(error => {
            console.log(`  - ${error}`);
        });
        if (stats.errors.length > 5) {
            console.log(`  ... and ${stats.errors.length - 5} more`);
        }
    }
    
    console.log('\nGroup breakdown:');
    Object.keys(filesByGroup).forEach(groupName => {
        const groupDirName = sanitizeDirectoryName(groupName);
        console.log(`  - ${groupName}: ${stats.groupedFiles[groupName]} files → ${OUTPUT_BASE_DIR}/${groupDirName}/`);
    });
}

// Run the grouping if this script is executed directly
if (require.main === module) {
    try {
        groupJsonFiles();
    } catch (error) {
        console.error('Fatal error:', error.message);
        process.exit(1);
    }
}

module.exports = { groupJsonFiles, sanitizeDirectoryName };