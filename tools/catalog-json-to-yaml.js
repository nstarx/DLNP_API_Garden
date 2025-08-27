const fs = require('fs');
const path = require('path');

// Reuse the existing catalog functions
const { getAllJsonFiles, getGroup, inferPurpose, analyzeJsonStructure } = require('./catalog-json-files');

// YAML formatting helpers
function escapeYamlString(str) {
  if (!str) return '""';
  
  // Check if string needs quotes
  if (typeof str !== 'string') {
    str = String(str);
  }
  
  // If string contains special characters, wrap in quotes
  if (/[:\{\}\[\],&*#?|\-<>=!%@\\]/.test(str) || 
      /^\s/.test(str) || 
      /\s$/.test(str) ||
      str.includes('\n') ||
      str.includes('"') ||
      str.includes("'")) {
    // Escape quotes and wrap in double quotes
    return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }
  
  return str;
}

function indentYaml(str, spaces) {
  const indent = ' '.repeat(spaces);
  return str.split('\n').map(line => indent + line).join('\n');
}

function toYamlValue(value, indent = 0) {
  if (value === null || value === undefined) {
    return 'null';
  }
  
  if (typeof value === 'boolean') {
    return value.toString();
  }
  
  if (typeof value === 'number') {
    return value.toString();
  }
  
  if (typeof value === 'string') {
    return escapeYamlString(value);
  }
  
  if (value instanceof Date) {
    return escapeYamlString(value.toISOString());
  }
  
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    
    return value.map(item => {
      const itemYaml = toYamlValue(item, indent + 2);
      return '\n' + ' '.repeat(indent) + '- ' + 
        (typeof item === 'object' && item !== null && !Array.isArray(item) 
          ? itemYaml.split('\n').slice(1).join('\n' + ' '.repeat(indent + 2))
          : itemYaml);
    }).join('');
  }
  
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    
    return entries.map(([key, val]) => {
      const yamlValue = toYamlValue(val, indent + 2);
      const needsNewline = typeof val === 'object' && val !== null && 
                           (Array.isArray(val) ? val.length > 0 : Object.keys(val).length > 0);
      
      return '\n' + ' '.repeat(indent) + escapeYamlString(key) + ': ' + 
        (needsNewline ? yamlValue : yamlValue);
    }).join('');
  }
  
  return escapeYamlString(String(value));
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function generateStatistics(catalog) {
  const stats = {
    totalFiles: catalog.length,
    totalSize: catalog.reduce((sum, file) => sum + file.fileSize, 0),
    byGroup: {},
    byType: {},
    errors: catalog.filter(f => f.structure.error).length
  };
  
  catalog.forEach(file => {
    // Group statistics
    if (!stats.byGroup[file.group]) {
      stats.byGroup[file.group] = {
        count: 0,
        size: 0
      };
    }
    stats.byGroup[file.group].count++;
    stats.byGroup[file.group].size += file.fileSize;
    
    // Type statistics
    const type = file.structure.type || 'unknown';
    if (!stats.byType[type]) {
      stats.byType[type] = 0;
    }
    stats.byType[type]++;
  });
  
  return stats;
}

function generateYamlCatalog(catalog) {
  const yaml = [];
  
  // Header
  yaml.push('# JSON Files Catalog');
  yaml.push('# Generated: ' + catalog.generatedAt);
  yaml.push('# Base Directory: ' + catalog.baseDirectory);
  yaml.push('');
  yaml.push('---');
  yaml.push('');
  
  // Metadata
  yaml.push('metadata:');
  yaml.push('  generatedAt: ' + escapeYamlString(catalog.generatedAt));
  yaml.push('  baseDirectory: ' + escapeYamlString(catalog.baseDirectory));
  yaml.push('  version: "1.0.0"');
  yaml.push('');
  
  // Statistics
  yaml.push('statistics:');
  yaml.push('  summary:');
  yaml.push('    totalFiles: ' + catalog.statistics.totalFiles);
  yaml.push('    totalSize: ' + escapeYamlString(formatFileSize(catalog.statistics.totalSize)));
  yaml.push('    totalSizeBytes: ' + catalog.statistics.totalSize);
  yaml.push('    filesWithErrors: ' + catalog.statistics.errors);
  yaml.push('');
  yaml.push('  byGroup:');
  
  Object.entries(catalog.statistics.byGroup).forEach(([group, data]) => {
    yaml.push('    ' + escapeYamlString(group) + ':');
    yaml.push('      count: ' + data.count);
    yaml.push('      size: ' + escapeYamlString(formatFileSize(data.size)));
    yaml.push('      sizeBytes: ' + data.size);
  });
  
  yaml.push('');
  yaml.push('  byType:');
  Object.entries(catalog.statistics.byType).forEach(([type, count]) => {
    yaml.push('    ' + escapeYamlString(type) + ': ' + count);
  });
  
  yaml.push('');
  yaml.push('# File Catalog');
  yaml.push('files:');
  
  // Group files by their group for better organization
  const filesByGroup = {};
  catalog.files.forEach(file => {
    if (!filesByGroup[file.group]) {
      filesByGroup[file.group] = [];
    }
    filesByGroup[file.group].push(file);
  });
  
  // Output files grouped
  Object.entries(filesByGroup).forEach(([group, files]) => {
    yaml.push('');
    yaml.push('  # ' + group + ' (' + files.length + ' files)');
    yaml.push('  ' + escapeYamlString(group) + ':');
    
    files.forEach(file => {
      yaml.push('    - fileName: ' + escapeYamlString(file.fileName));
      yaml.push('      location: ' + escapeYamlString(file.location));
      yaml.push('      purpose: ' + escapeYamlString(file.purpose));
      yaml.push('      groupDescription: ' + escapeYamlString(file.groupDescription));
      yaml.push('      ignored: ' + file.ignored);
      yaml.push('      fileSize: ' + file.fileSize);
      yaml.push('      fileSizeFormatted: ' + escapeYamlString(formatFileSize(file.fileSize)));
      
      yaml.push('      structure:');
      if (file.structure.error) {
        yaml.push('        error: ' + escapeYamlString(file.structure.error));
      } else {
        yaml.push('        type: ' + escapeYamlString(file.structure.type));
        if (file.structure.count !== null) {
          yaml.push('        count: ' + file.structure.count);
        }
        if (file.structure.keys) {
          yaml.push('        topKeys:');
          file.structure.keys.forEach(key => {
            yaml.push('          - ' + escapeYamlString(key));
          });
        }
        yaml.push('        hasNestedData: ' + file.structure.hasNestedData);
      }
      
      yaml.push('      timestamps:');
      yaml.push('        created: ' + escapeYamlString(file.createdAt));
      yaml.push('        modified: ' + escapeYamlString(file.modifiedAt));
      yaml.push('');
    });
  });
  
  return yaml.join('\n');
}

function generateCompactYaml(catalog) {
  const yaml = [];
  
  yaml.push('# JSON Files Catalog (Compact Version)');
  yaml.push('# Generated: ' + catalog.generatedAt);
  yaml.push('---');
  yaml.push('');
  
  yaml.push('summary:');
  yaml.push('  total: ' + catalog.statistics.totalFiles + ' files');
  yaml.push('  size: ' + escapeYamlString(formatFileSize(catalog.statistics.totalSize)));
  yaml.push('');
  
  yaml.push('catalog:');
  
  const filesByGroup = {};
  catalog.files.forEach(file => {
    if (!filesByGroup[file.group]) {
      filesByGroup[file.group] = [];
    }
    filesByGroup[file.group].push(file);
  });
  
  Object.entries(filesByGroup).forEach(([group, files]) => {
    yaml.push('  ' + escapeYamlString(group) + ':');
    files.forEach(file => {
      yaml.push('    - name: ' + escapeYamlString(file.fileName));
      yaml.push('      path: ' + escapeYamlString(file.location));
      yaml.push('      purpose: ' + escapeYamlString(file.purpose));
      yaml.push('      type: ' + escapeYamlString(file.structure.type || 'unknown'));
      if (file.structure.count) {
        yaml.push('      items: ' + file.structure.count);
      }
    });
  });
  
  return yaml.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length > 0 && (args[0] === '-h' || args[0] === '--help')) {
    console.log('Usage: node catalog-json-to-yaml.js [--compact] [output-file]');
    console.log('Creates a YAML catalog of all JSON files in the current directory');
    console.log('');
    console.log('Options:');
    console.log('  --compact    Generate a compact version of the catalog');
    console.log('');
    console.log('Default output: json-catalog.yaml (or json-catalog-compact.yaml with --compact)');
    process.exit(0);
  }
  
  const compact = args.includes('--compact');
  const outputFileArg = args.find(arg => !arg.startsWith('--'));
  const outputFile = outputFileArg || (compact ? 'json-catalog-compact.yaml' : 'json-catalog.yaml');
  const currentDir = process.cwd();
  
  console.log(`Cataloging JSON files from: ${currentDir}`);
  console.log(`Format: ${compact ? 'Compact YAML' : 'Full YAML'}\n`);
  
  const jsonFiles = getAllJsonFiles(currentDir);
  
  if (jsonFiles.length === 0) {
    console.log('No JSON files found');
    process.exit(0);
  }
  
  // Sort by group and then by filename
  jsonFiles.sort((a, b) => {
    if (a.group !== b.group) {
      return a.group.localeCompare(b.group);
    }
    return a.fileName.localeCompare(b.fileName);
  });
  
  const statistics = generateStatistics(jsonFiles);
  
  const catalog = {
    generatedAt: new Date().toISOString(),
    baseDirectory: currentDir,
    statistics: statistics,
    files: jsonFiles
  };
  
  try {
    const yamlContent = compact ? generateCompactYaml(catalog) : generateYamlCatalog(catalog);
    fs.writeFileSync(outputFile, yamlContent);
    
    console.log('─'.repeat(50));
    console.log('YAML catalog generated successfully!\n');
    console.log('Statistics:');
    console.log(`  Total files: ${statistics.totalFiles}`);
    console.log(`  Total size: ${formatFileSize(statistics.totalSize)}`);
    console.log(`  Files with errors: ${statistics.errors}\n`);
    
    console.log('Files by group:');
    Object.entries(statistics.byGroup).forEach(([group, data]) => {
      console.log(`  ${group}: ${data.count} files (${formatFileSize(data.size)})`);
    });
    
    console.log('\nFiles by type:');
    Object.entries(statistics.byType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} files`);
    });
    
    console.log(`\nCatalog saved to: ${outputFile}`);
    
    if (!compact) {
      console.log('\nTip: Use --compact flag for a more concise output');
    }
  } catch (error) {
    console.error(`Error writing catalog file: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}