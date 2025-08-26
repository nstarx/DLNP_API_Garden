const fs = require('fs');
const path = require('path');
const vm = require('vm');

function convertJsToJsonSafe(obj) {
  if (obj === null) return null;
  if (obj === undefined) return null;
  
  if (typeof obj === 'function') {
    return `[Function: ${obj.name || 'anonymous'}]`;
  }
  
  if (typeof obj === 'symbol') {
    return `[Symbol: ${obj.toString()}]`;
  }
  
  if (typeof obj === 'bigint') {
    return obj.toString() + 'n';
  }
  
  if (obj instanceof Date) {
    return obj.toISOString();
  }
  
  if (obj instanceof RegExp) {
    return `[RegExp: ${obj.toString()}]`;
  }
  
  if (obj instanceof Error) {
    return {
      name: obj.name,
      message: obj.message,
      stack: obj.stack
    };
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => convertJsToJsonSafe(item));
  }
  
  if (typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = convertJsToJsonSafe(obj[key]);
      }
    }
    return result;
  }
  
  return obj;
}

function extractExportsDirectly(fileContent) {
  // Parse exports directly from the source without executing
  const exports = {};
  
  // Match export const/let/var patterns and extract the data
  const exportPattern = /export\s+(const|let|var)\s+(\w+)\s*=\s*(\[[\s\S]*?\]|{[\s\S]*?}|[^;]+);?/g;
  let match;
  
  while ((match = exportPattern.exec(fileContent)) !== null) {
    const [, , name, value] = match;
    try {
      // Try to parse the value as JSON first
      exports[name] = JSON.parse(value);
    } catch {
      try {
        // If JSON parse fails, try to evaluate as JavaScript literal
        // This is safe for object/array literals only
        const evalFunc = new Function('return ' + value);
        exports[name] = evalFunc();
      } catch {
        // If all else fails, store as string
        exports[name] = value.trim();
      }
    }
  }
  
  return exports;
}

function processJsFile(filePath) {
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses ES6 module syntax
    const hasES6Export = /export\s+(const|let|var|function|class|default|{)/m.test(fileContent);
    
    // First try direct extraction for malformed files
    if (hasES6Export) {
      // Check if the file might have syntax issues (multiple exports on same/consecutive lines)
      const lines = fileContent.split('\n');
      let hasSyntaxIssue = false;
      for (let i = 0; i < lines.length - 1; i++) {
        if (lines[i].includes('export') && lines[i+1].includes('export') && 
            !lines[i].trim().endsWith(';') && !lines[i].trim().endsWith('}') && !lines[i].trim().endsWith(']')) {
          hasSyntaxIssue = true;
          break;
        }
      }
      
      if (hasSyntaxIssue) {
        // Try to extract exports directly without executing
        const exports = extractExportsDirectly(fileContent);
        if (Object.keys(exports).length > 0) {
          return convertJsToJsonSafe(exports);
        }
      }
    }
    
    if (hasES6Export) {
      // Transform ES6 exports to CommonJS
      const exports = {};
      
      // Handle named exports: export const/let/var
      fileContent = fileContent.replace(/export\s+(const|let|var)\s+(\w+)\s*=\s*/g, (match, type, name) => {
        return `${type} ${name} = exports.${name} = `;
      });
      
      // Handle named function exports: export function
      fileContent = fileContent.replace(/export\s+function\s+(\w+)/g, (match, name) => {
        return `exports.${name} = function ${name}`;
      });
      
      // Handle named class exports: export class
      fileContent = fileContent.replace(/export\s+class\s+(\w+)/g, (match, name) => {
        return `exports.${name} = class ${name}`;
      });
      
      // Handle export { ... }
      fileContent = fileContent.replace(/export\s*{([^}]+)}/g, (match, exportList) => {
        const items = exportList.split(',').map(item => item.trim());
        const exportStatements = items.map(item => {
          const [local, exported = local] = item.split(/\s+as\s+/).map(s => s.trim());
          return `exports.${exported} = ${local};`;
        }).join('\n');
        return exportStatements;
      });
      
      // Handle default export
      fileContent = fileContent.replace(/export\s+default\s+/g, 'exports.default = ');
      
      // Remove any remaining import statements for now
      fileContent = fileContent.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
      fileContent = fileContent.replace(/import\s+['"].*?['"];?/g, '');
    }
    
    const sandbox = {
      module: { exports: {} },
      exports: {},
      require: require,
      __dirname: path.dirname(filePath),
      __filename: filePath,
      console: console,
      process: process,
      Buffer: Buffer,
      setTimeout: setTimeout,
      setInterval: setInterval,
      clearTimeout: clearTimeout,
      clearInterval: clearInterval,
      global: global
    };
    
    sandbox.exports = sandbox.module.exports;
    
    const script = new vm.Script(fileContent);
    const context = vm.createContext(sandbox);
    script.runInContext(context);
    
    const exportedData = sandbox.module.exports || sandbox.exports;
    
    const jsonSafeData = convertJsToJsonSafe(exportedData);
    
    return jsonSafeData;
  } catch (error) {
    // If execution fails, try direct extraction
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const exports = extractExportsDirectly(fileContent);
      if (Object.keys(exports).length > 0) {
        return convertJsToJsonSafe(exports);
      }
    } catch {
      // Ignore secondary error
    }
    
    console.error(`Error processing file ${filePath}:`, error.message);
    return null;
  }
}

function getUniqueFilename(basePath, exportName) {
  let filename = basePath;
  if (exportName) {
    const dir = path.dirname(basePath);
    const basename = path.basename(basePath, '.json');
    filename = path.join(dir, `${basename}_${exportName}.json`);
  }
  
  if (!fs.existsSync(filename)) {
    return filename;
  }
  
  let counter = 1;
  let uniqueFilename;
  do {
    const dir = path.dirname(filename);
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    uniqueFilename = path.join(dir, `${base}_${counter}${ext}`);
    counter++;
  } while (fs.existsSync(uniqueFilename));
  
  return uniqueFilename;
}

function getAllJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllJsFiles(filePath, fileList);
      }
    } else if (path.extname(file) === '.js') {
      // Skip the converter script itself
      if (!file.includes('convert-js-to-json-safe.js')) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length > 0 && (args[0] === '-h' || args[0] === '--help')) {
    console.log('Usage: node convert-js-to-json-safe.js');
    console.log('Recursively converts all .js files to .json in the current directory');
    console.log('Skips node_modules and hidden directories');
    process.exit(0);
  }
  
  const currentDir = process.cwd();
  console.log(`Starting recursive conversion from: ${currentDir}\n`);
  
  const jsFiles = getAllJsFiles(currentDir);
  
  if (jsFiles.length === 0) {
    console.log('No .js files found');
    process.exit(0);
  }
  
  console.log(`Found ${jsFiles.length} .js files to convert\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  jsFiles.forEach((jsFile, index) => {
    const relativePath = path.relative(currentDir, jsFile);
    const baseJsonFile = jsFile.replace(/\.js$/, '.json');
    
    console.log(`[${index + 1}/${jsFiles.length}] Converting: ${relativePath}`);
    
    const jsonData = processJsFile(jsFile);
    
    if (jsonData !== null) {
      try {
        // Check if the exported data is an object with multiple properties
        if (typeof jsonData === 'object' && !Array.isArray(jsonData) && jsonData !== null) {
          const keys = Object.keys(jsonData);
          
          if (keys.length > 1) {
            // Multiple exports - create separate files
            console.log(`  Found ${keys.length} exports`);
            let fileCount = 0;
            
            keys.forEach(key => {
              try {
                const singleExport = { [key]: jsonData[key] };
                const jsonString = JSON.stringify(singleExport, null, 2);
                const uniqueFile = getUniqueFilename(baseJsonFile, key);
                fs.writeFileSync(uniqueFile, jsonString);
                console.log(`  ✓ Created: ${path.relative(currentDir, uniqueFile)}`);
                fileCount++;
              } catch (error) {
                console.log(`  ✗ Failed to write ${key}: ${error.message}`);
              }
            });
            
            if (fileCount > 0) {
              successCount++;
            } else {
              failCount++;
            }
          } else {
            // Single export or single property
            const jsonString = JSON.stringify(jsonData, null, 2);
            const uniqueFile = getUniqueFilename(baseJsonFile);
            fs.writeFileSync(uniqueFile, jsonString);
            console.log(`  ✓ Created: ${path.relative(currentDir, uniqueFile)}`);
            successCount++;
          }
        } else {
          // Non-object export (array, primitive, etc.)
          const jsonString = JSON.stringify(jsonData, null, 2);
          const uniqueFile = getUniqueFilename(baseJsonFile);
          fs.writeFileSync(uniqueFile, jsonString);
          console.log(`  ✓ Created: ${path.relative(currentDir, uniqueFile)}`);
          successCount++;
        }
      } catch (error) {
        console.log(`  ✗ Failed to write: ${error.message}`);
        failCount++;
      }
    } else {
      console.log(`  ✗ Failed to convert`);
      failCount++;
    }
    console.log();
  });
  
  console.log('─'.repeat(50));
  console.log(`Conversion complete!`);
  console.log(`  Success: ${successCount}/${jsFiles.length}`);
  if (failCount > 0) {
    console.log(`  Failed: ${failCount}/${jsFiles.length}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  convertJsToJsonSafe,
  processJsFile
};