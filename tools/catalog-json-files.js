const fs = require('fs');
const path = require('path');

// Configuration for groups and their descriptions
const GROUP_MAPPINGS = {
  'admin': {
    name: 'Administration',
    description: 'Administrative dashboard, user management, and access control features'
  },
  'agentic': {
    name: 'Agentic AI',
    description: 'AI agent templates, CI/CD pipelines, and agent orchestration'
  },
  'connections': {
    name: 'Data Connections',
    description: 'Database connections, cloud integrations, and data source configurations'
  },
  'converge': {
    name: 'Converge Apps',
    description: 'Convergent applications including video/audio processing tools'
  },
  'ai-catalog': {
    name: 'AI Catalog',
    description: 'AI models, datasets, experiments, and ML pipeline definitions'
  },
  'assets': {
    name: 'Application Assets',
    description: 'Mock data for charts, metrics, and application resources'
  },
  'cicd': {
    name: 'CI/CD',
    description: 'Continuous integration and deployment configurations'
  },
  'data': {
    name: 'Core Data',
    description: 'Core application data including chat, mail, tasks, and SDLC'
  },
  'deployments': {
    name: 'Deployments',
    description: 'Deployment configurations and cloud deployment options'
  },
  'fl': {
    name: 'Federated Learning',
    description: 'Federated learning operations and configurations'
  }
};

// Keywords to help infer purpose
const PURPOSE_KEYWORDS = {
  'dashboard': 'Dashboard metrics and visualization data',
  'metrics': 'Performance and analytics metrics',
  'user': 'User account and profile information',
  'role': 'Role-based access control and permissions',
  'permission': 'Access permissions and security controls',
  'menu': 'Navigation menu items and structure',
  'notification': 'System notifications and alerts',
  'log': 'Activity logs and audit trails',
  'chart': 'Chart and graph visualization data',
  'model': 'Machine learning model definitions',
  'dataset': 'Training and validation datasets',
  'pipeline': 'Data processing and ML pipelines',
  'template': 'Reusable configuration templates',
  'mock': 'Mock data for testing and development',
  'test': 'Test scenarios and validation data',
  'config': 'System and application configuration',
  'deployment': 'Deployment and infrastructure settings',
  'connection': 'Database and service connections',
  'catalog': 'Resource catalogs and inventories',
  'experiment': 'ML experiments and A/B tests',
  'workflow': 'Business process workflows',
  'agent': 'AI agent configurations and templates',
  'prompt': 'AI prompt templates and system prompts',
  'scenario': 'Test scenarios and use cases',
  'evaluation': 'Performance evaluation and testing results',
  'validation': 'Data validation and quality checks'
};

// Files to ignore (e.g., internal tool outputs)
const IGNORE_PATTERNS = [
  'convert-js-to-json-safe',
  'catalog-output.json',
  'package-lock.json',
  '.git',
  'node_modules'
];

function shouldIgnore(filePath) {
  const fileName = path.basename(filePath);
  return IGNORE_PATTERNS.some(pattern => fileName.includes(pattern));
}

function inferPurpose(fileName, filePath) {
  const lowerFileName = fileName.toLowerCase();
  const pathParts = filePath.split(path.sep);
  
  // Check for keywords in filename
  for (const [keyword, description] of Object.entries(PURPOSE_KEYWORDS)) {
    if (lowerFileName.includes(keyword)) {
      return description;
    }
  }
  
  // Infer from path structure
  if (pathParts.some(p => p.includes('admin'))) {
    if (lowerFileName.includes('dashboard')) return 'Admin dashboard configuration and metrics';
    if (lowerFileName.includes('user')) return 'User management and administration';
    if (lowerFileName.includes('role')) return 'Role and permission management';
  }
  
  if (pathParts.some(p => p.includes('agentic'))) {
    if (lowerFileName.includes('template')) return 'AI agent templates and configurations';
    if (lowerFileName.includes('pipeline')) return 'CI/CD pipeline definitions for AI agents';
    if (lowerFileName.includes('test')) return 'Agent testing and validation scenarios';
  }
  
  if (pathParts.some(p => p.includes('connection'))) {
    if (lowerFileName.includes('cluster')) return 'Cluster and distributed system connections';
    if (lowerFileName.includes('datasource')) return 'Data source connection configurations';
    if (lowerFileName.includes('cloud')) return 'Cloud provider connection settings';
  }
  
  return 'Application data and configuration';
}

function getGroup(filePath) {
  const pathParts = filePath.split(path.sep);
  
  // Check each path part for known groups
  for (const part of pathParts) {
    const lowerPart = part.toLowerCase();
    for (const groupKey of Object.keys(GROUP_MAPPINGS)) {
      if (lowerPart.includes(groupKey)) {
        return GROUP_MAPPINGS[groupKey];
      }
    }
  }
  
  // Check for specific patterns
  if (pathParts.some(p => p.includes('fl-'))) {
    return GROUP_MAPPINGS['fl'];
  }
  
  if (pathParts.some(p => p.includes('cicd'))) {
    return GROUP_MAPPINGS['cicd'];
  }
  
  return {
    name: 'General',
    description: 'General application data'
  };
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function analyzeJsonStructure(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    const structure = {
      type: Array.isArray(data) ? 'array' : typeof data,
      count: Array.isArray(data) ? data.length : null,
      keys: typeof data === 'object' && !Array.isArray(data) ? Object.keys(data).slice(0, 5) : null,
      hasNestedData: false
    };
    
    // Check for nested structures
    if (typeof data === 'object') {
      const values = Array.isArray(data) ? data : Object.values(data);
      structure.hasNestedData = values.some(v => 
        typeof v === 'object' && v !== null
      );
    }
    
    return structure;
  } catch (error) {
    return { error: 'Unable to parse JSON' };
  }
}

function getAllJsonFiles(dir, baseDir = dir, fileList = []) {
  if (shouldIgnore(dir)) {
    return fileList;
  }
  
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      if (shouldIgnore(filePath)) {
        return;
      }
      
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        getAllJsonFiles(filePath, baseDir, fileList);
      } else if (path.extname(file) === '.json') {
        const relativePath = path.relative(baseDir, filePath);
        const group = getGroup(relativePath);
        const structure = analyzeJsonStructure(filePath);
        
        fileList.push({
          fileName: path.basename(file),
          location: relativePath,
          absolutePath: filePath,
          group: group.name,
          groupDescription: group.description,
          purpose: inferPurpose(file, relativePath),
          structure: structure,
          fileSize: getFileSize(filePath),
          ignored: false,
          createdAt: stat.birthtime,
          modifiedAt: stat.mtime
        });
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fileList;
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

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length > 0 && (args[0] === '-h' || args[0] === '--help')) {
    console.log('Usage: node catalog-json-files.js [output-file]');
    console.log('Creates a catalog of all JSON files in the current directory');
    console.log('Default output: json-catalog.json');
    process.exit(0);
  }
  
  const outputFile = args[0] || 'json-catalog.json';
  const currentDir = process.cwd();
  
  console.log(`Cataloging JSON files from: ${currentDir}\n`);
  
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
    fs.writeFileSync(outputFile, JSON.stringify(catalog, null, 2));
    
    console.log('─'.repeat(50));
    console.log('Catalog generated successfully!\n');
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
  } catch (error) {
    console.error(`Error writing catalog file: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  getAllJsonFiles,
  getGroup,
  inferPurpose,
  analyzeJsonStructure
};