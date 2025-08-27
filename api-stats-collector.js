#!/usr/bin/env node

/**
 * API Statistics Collector
 * Scans markdown files for API endpoints and generates statistics
 */

const fs = require('fs').promises;
const path = require('path');

class APIStatsCollector {
    constructor() {
        this.endpoints = [];
        this.stats = {
            totalEndpoints: 0,
            byMethod: {},
            byGroup: {},
            byVersion: {},
            byPath: {},
            byFile: {},
            uniquePaths: new Set(),
            commonPatterns: {},
            queryParameters: {},
            authTypes: new Set()
        };
    }

    /**
     * Extract HTTP method and path from a line
     */
    extractEndpoint(line) {
        // Match patterns like: GET /api/v1/users, POST /api/v1/users/{userId}
        const methodPattern = /^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(\/[\w\-\/\{\}:]+)/;
        const match = line.match(methodPattern);
        
        if (match) {
            return {
                method: match[1],
                path: match[2],
                fullPath: match[2]
            };
        }
        return null;
    }

    /**
     * Parse API version from path
     */
    extractVersion(path) {
        const versionMatch = path.match(/\/(v\d+(?:\.\d+)?)\//);
        return versionMatch ? versionMatch[1] : 'no-version';
    }

    /**
     * Extract API group/domain from path
     */
    extractGroup(path) {
        // Remove version and get the first segment after /api/
        const cleanPath = path.replace(/\/api\/v\d+(?:\.\d+)?\//, '');
        const segments = cleanPath.split('/').filter(s => s && !s.includes('{'));
        return segments[0] || 'root';
    }

    /**
     * Extract path parameters
     */
    extractParameters(path) {
        const params = [];
        const paramPattern = /\{([^}]+)\}/g;
        let match;
        while ((match = paramPattern.exec(path)) !== null) {
            params.push(match[1]);
        }
        return params;
    }

    /**
     * Scan a markdown file for API endpoints
     */
    async scanMarkdownFile(filePath) {
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            const lines = content.split('\n');
            const fileName = path.basename(filePath, '.md');
            let currentSection = '';
            let inCodeBlock = false;
            let codeBlockType = '';
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                
                // Track sections
                if (line.startsWith('#')) {
                    currentSection = line.replace(/^#+\s*/, '');
                }
                
                // Handle code blocks
                if (line.startsWith('```')) {
                    if (!inCodeBlock) {
                        inCodeBlock = true;
                        codeBlockType = line.substring(3).toLowerCase();
                    } else {
                        inCodeBlock = false;
                        codeBlockType = '';
                    }
                    continue;
                }
                
                // Look for endpoints in code blocks or inline
                if (inCodeBlock && (codeBlockType === 'http' || codeBlockType === '')) {
                    const endpoint = this.extractEndpoint(line);
                    if (endpoint) {
                        const version = this.extractVersion(endpoint.path);
                        const group = this.extractGroup(endpoint.path);
                        const parameters = this.extractParameters(endpoint.path);
                        
                        const endpointData = {
                            ...endpoint,
                            file: fileName,
                            section: currentSection,
                            version,
                            group,
                            parameters,
                            lineNumber: i + 1
                        };
                        
                        this.endpoints.push(endpointData);
                        
                        // Look for query parameters in the next few lines
                        if (i + 1 < lines.length && lines[i + 1].includes('Query Parameters:')) {
                            const queryParams = [];
                            for (let j = i + 2; j < Math.min(i + 20, lines.length); j++) {
                                const paramLine = lines[j].trim();
                                if (paramLine.startsWith('-')) {
                                    const paramMatch = paramLine.match(/^\s*-\s*(\w+):/);
                                    if (paramMatch) {
                                        queryParams.push(paramMatch[1]);
                                    }
                                } else if (!paramLine.startsWith(' ') && paramLine !== '') {
                                    break;
                                }
                            }
                            endpointData.queryParameters = queryParams;
                        }
                    }
                }
                
                // Look for authentication methods
                if (line.includes('Authorization:') || line.includes('X-API-Key:')) {
                    if (line.includes('Bearer')) this.stats.authTypes.add('Bearer Token');
                    if (line.includes('X-API-Key')) this.stats.authTypes.add('API Key');
                    if (line.includes('Basic')) this.stats.authTypes.add('Basic Auth');
                    if (line.includes('X-Client-Certificate')) this.stats.authTypes.add('Client Certificate');
                }
            }
            
            console.log(`✓ Scanned ${fileName}: Found ${this.endpoints.filter(e => e.file === fileName).length} endpoints`);
            
        } catch (error) {
            console.error(`Error scanning ${filePath}:`, error.message);
        }
    }

    /**
     * Calculate statistics from collected endpoints
     */
    calculateStats() {
        this.stats.totalEndpoints = this.endpoints.length;
        
        // Group by method
        this.endpoints.forEach(endpoint => {
            // By method
            this.stats.byMethod[endpoint.method] = (this.stats.byMethod[endpoint.method] || 0) + 1;
            
            // By group
            this.stats.byGroup[endpoint.group] = (this.stats.byGroup[endpoint.group] || 0) + 1;
            
            // By version
            this.stats.byVersion[endpoint.version] = (this.stats.byVersion[endpoint.version] || 0) + 1;
            
            // By file
            if (!this.stats.byFile[endpoint.file]) {
                this.stats.byFile[endpoint.file] = {
                    total: 0,
                    byMethod: {},
                    byGroup: {}
                };
            }
            this.stats.byFile[endpoint.file].total++;
            this.stats.byFile[endpoint.file].byMethod[endpoint.method] = 
                (this.stats.byFile[endpoint.file].byMethod[endpoint.method] || 0) + 1;
            this.stats.byFile[endpoint.file].byGroup[endpoint.group] = 
                (this.stats.byFile[endpoint.file].byGroup[endpoint.group] || 0) + 1;
            
            // Unique paths (without parameters)
            const cleanPath = endpoint.path.replace(/\{[^}]+\}/g, '{id}');
            this.stats.uniquePaths.add(cleanPath);
            
            // Common patterns
            const pattern = endpoint.path
                .replace(/\{[^}]+\}/g, '{param}')
                .replace(/\/v\d+(?:\.\d+)?\//, '/v{n}/')
                .replace(/\d+/g, 'N');
            this.stats.commonPatterns[pattern] = (this.stats.commonPatterns[pattern] || 0) + 1;
            
            // Query parameters frequency
            if (endpoint.queryParameters) {
                endpoint.queryParameters.forEach(param => {
                    this.stats.queryParameters[param] = (this.stats.queryParameters[param] || 0) + 1;
                });
            }
        });
        
        // Convert Set to array for display
        this.stats.uniquePaths = Array.from(this.stats.uniquePaths).length;
        this.stats.authTypes = Array.from(this.stats.authTypes);
        
        // Sort common patterns by frequency
        this.stats.commonPatterns = Object.entries(this.stats.commonPatterns)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20)
            .reduce((acc, [pattern, count]) => {
                acc[pattern] = count;
                return acc;
            }, {});
    }

    /**
     * Generate detailed report in Markdown format
     */
    generateReport() {
        const report = [];
        
        report.push('# API Endpoints Statistics Report');
        report.push('');
        report.push(`> Generated: ${new Date().toISOString()}`);
        report.push('');
        
        // Overall Statistics
        report.push('## 📊 Overall Statistics');
        report.push('');
        report.push('| Metric | Value |');
        report.push('|--------|-------|');
        report.push(`| **Total Endpoints** | ${this.stats.totalEndpoints} |`);
        report.push(`| **Unique Path Patterns** | ${this.stats.uniquePaths} |`);
        report.push(`| **Total Files Scanned** | ${Object.keys(this.stats.byFile).length} |`);
        report.push(`| **Authentication Types** | ${this.stats.authTypes.join(', ') || 'None detected'} |`);
        report.push('');
        
        // By HTTP Method
        report.push('## 🔄 Endpoints by HTTP Method');
        report.push('');
        report.push('| Method | Count | Percentage | Visualization |');
        report.push('|--------|-------|------------|---------------|');
        Object.entries(this.stats.byMethod)
            .sort((a, b) => b[1] - a[1])
            .forEach(([method, count]) => {
                const percentage = ((count / this.stats.totalEndpoints) * 100).toFixed(1);
                const barLength = Math.min(20, Math.floor((count / this.stats.totalEndpoints) * 20));
                const bar = '█'.repeat(barLength) + '░'.repeat(20 - barLength);
                report.push(`| **${method}** | ${count} | ${percentage}% | \`${bar}\` |`);
            });
        report.push('');
        
        // By API Group
        report.push('## 📦 Endpoints by API Group/Domain');
        report.push('');
        report.push('| Group | Count | Percentage |');
        report.push('|-------|-------|------------|');
        Object.entries(this.stats.byGroup)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15)
            .forEach(([group, count]) => {
                const percentage = ((count / this.stats.totalEndpoints) * 100).toFixed(1);
                report.push(`| **${group}** | ${count} | ${percentage}% |`);
            });
        report.push('');
        
        // By Version
        report.push('## 🏷️ Endpoints by API Version');
        report.push('');
        report.push('| Version | Count | Percentage |');
        report.push('|---------|-------|------------|');
        Object.entries(this.stats.byVersion)
            .sort((a, b) => {
                if (a[0] === 'no-version') return 1;
                if (b[0] === 'no-version') return -1;
                return b[1] - a[1];
            })
            .forEach(([version, count]) => {
                const percentage = ((count / this.stats.totalEndpoints) * 100).toFixed(1);
                const versionDisplay = version === 'no-version' ? '*(no version)*' : `**${version}**`;
                report.push(`| ${versionDisplay} | ${count} | ${percentage}% |`);
            });
        report.push('');
        
        // By File
        report.push('## 📁 Endpoints by File');
        report.push('');
        Object.entries(this.stats.byFile)
            .sort((a, b) => b[1].total - a[1].total)
            .forEach(([file, data]) => {
                report.push(`### 📄 ${file}`);
                report.push('');
                report.push(`- **Total Endpoints:** ${data.total}`);
                report.push(`- **Methods:** ${Object.entries(data.byMethod)
                    .map(([m, c]) => `${m} (${c})`)
                    .join(', ')}`);
                report.push(`- **Top Groups:** ${Object.entries(data.byGroup)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
                    .map(([g, c]) => `${g} (${c})`)
                    .join(', ')}`);
                report.push('');
            });
        
        // Common Query Parameters
        report.push('## 🔍 Most Common Query Parameters');
        report.push('');
        if (Object.keys(this.stats.queryParameters).length > 0) {
            report.push('| Parameter | Occurrences |');
            report.push('|-----------|-------------|');
            Object.entries(this.stats.queryParameters)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 15)
                .forEach(([param, count]) => {
                    report.push(`| \`${param}\` | ${count} |`);
                });
            report.push('');
        } else {
            report.push('*No query parameters found*');
            report.push('');
        }
        
        // Common Path Patterns
        report.push('## 🔗 Most Common Path Patterns');
        report.push('');
        report.push('| Count | Pattern |');
        report.push('|-------|---------|');
        Object.entries(this.stats.commonPatterns)
            .slice(0, 10)
            .forEach(([pattern, count]) => {
                report.push(`| ${count} | \`${pattern}\` |`);
            });
        report.push('');
        
        // Summary
        report.push('## 📈 Summary');
        report.push('');
        const avgEndpointsPerFile = (this.stats.totalEndpoints / Object.keys(this.stats.byFile).length).toFixed(1);
        const mostCommonMethod = Object.entries(this.stats.byMethod)
            .sort((a, b) => b[1] - a[1])[0];
        const mostCommonGroup = Object.entries(this.stats.byGroup)
            .sort((a, b) => b[1] - a[1])[0];
        
        report.push('| Metric | Value |');
        report.push('|--------|-------|');
        report.push(`| **Average endpoints per file** | ${avgEndpointsPerFile} |`);
        report.push(`| **Most common HTTP method** | ${mostCommonMethod[0]} (${mostCommonMethod[1]} endpoints) |`);
        report.push(`| **Largest API group** | ${mostCommonGroup[0]} (${mostCommonGroup[1]} endpoints) |`);
        report.push(`| **Total unique query parameters** | ${Object.keys(this.stats.queryParameters).length} |`);
        
        report.push('');
        report.push('---');
        report.push('');
        report.push('# 🎯 Grand Total Summary');
        report.push('');
        
        // Calculate grand totals
        const totalGetRequests = this.stats.byMethod['GET'] || 0;
        const totalPostRequests = this.stats.byMethod['POST'] || 0;
        const totalPutRequests = this.stats.byMethod['PUT'] || 0;
        const totalDeleteRequests = this.stats.byMethod['DELETE'] || 0;
        const totalPatchRequests = this.stats.byMethod['PATCH'] || 0;
        const totalGroups = Object.keys(this.stats.byGroup).length;
        const totalVersions = Object.keys(this.stats.byVersion).length;
        const totalParameters = Object.values(this.stats.queryParameters).reduce((a, b) => a + b, 0);
        
        // Calculate percentages
        const readOperations = totalGetRequests;
        const writeOperations = totalPostRequests + totalPutRequests + totalPatchRequests;
        const deleteOperations = totalDeleteRequests;
        const readPercent = ((readOperations / this.stats.totalEndpoints) * 100).toFixed(1);
        const writePercent = ((writeOperations / this.stats.totalEndpoints) * 100).toFixed(1);
        const deletePercent = ((deleteOperations / this.stats.totalEndpoints) * 100).toFixed(1);
        
        report.push('## 📊 Endpoint Totals');
        report.push('');
        report.push('| Metric | Count |');
        report.push('|--------|-------|');
        report.push(`| **Total Endpoints** | ${this.stats.totalEndpoints} |`);
        report.push(`| **Total Files** | ${Object.keys(this.stats.byFile).length} |`);
        report.push(`| **Unique Path Patterns** | ${this.stats.uniquePaths} |`);
        report.push(`| **Total API Groups** | ${totalGroups} |`);
        report.push(`| **Total API Versions** | ${totalVersions} |`);
        report.push('');
        
        report.push('## 🔧 Operation Breakdown');
        report.push('');
        report.push('| Operation Type | Count | Percentage |');
        report.push('|----------------|-------|------------|');
        report.push(`| **READ** Operations (GET) | ${readOperations} | ${readPercent}% |`);
        report.push(`| **WRITE** Operations (POST/PUT/PATCH) | ${writeOperations} | ${writePercent}% |`);
        report.push(`| **DELETE** Operations | ${deleteOperations} | ${deletePercent}% |`);
        report.push('');
        
        report.push('## 📊 Method Distribution');
        report.push('');
        report.push('```');
        report.push(`GET:    ${totalGetRequests.toString().padStart(4)} ${'█'.repeat(Math.min(50, Math.floor(totalGetRequests / 2)))}`);
        report.push(`POST:   ${totalPostRequests.toString().padStart(4)} ${'█'.repeat(Math.min(50, Math.floor(totalPostRequests / 2)))}`);
        report.push(`PUT:    ${totalPutRequests.toString().padStart(4)} ${'█'.repeat(Math.min(50, Math.floor(totalPutRequests / 2)))}`);
        report.push(`DELETE: ${totalDeleteRequests.toString().padStart(4)} ${'█'.repeat(Math.min(50, Math.floor(totalDeleteRequests / 2)))}`);
        if (totalPatchRequests > 0) {
            report.push(`PATCH:  ${totalPatchRequests.toString().padStart(4)} ${'█'.repeat(Math.min(50, Math.floor(totalPatchRequests / 2)))}`);
        }
        report.push('```');
        report.push('');
        
        report.push('## 📐 Complexity Metrics');
        report.push('');
        report.push('| Metric | Value |');
        report.push('|--------|-------|');
        report.push(`| **Average Endpoints per File** | ${avgEndpointsPerFile} |`);
        report.push(`| **Average Endpoints per Group** | ${(this.stats.totalEndpoints / totalGroups).toFixed(1)} |`);
        report.push(`| **Total Query Parameter Uses** | ${totalParameters} |`);
        report.push(`| **Unique Query Parameters** | ${Object.keys(this.stats.queryParameters).length} |`);
        report.push(`| **Authentication Methods** | ${this.stats.authTypes.length} |`);
        
        // API Coverage Score (simple heuristic)
        const hasVersioning = totalVersions > 1 ? 20 : 10;
        const hasAuth = this.stats.authTypes.length > 0 ? 20 : 0;
        const hasQueryParams = Object.keys(this.stats.queryParameters).length > 5 ? 20 : 10;
        const hasCRUD = (totalGetRequests > 0 ? 10 : 0) + (totalPostRequests > 0 ? 10 : 0) + 
                       (totalPutRequests > 0 ? 10 : 0) + (totalDeleteRequests > 0 ? 10 : 0);
        const apiScore = hasVersioning + hasAuth + hasQueryParams + hasCRUD;
        report.push('');
        
        report.push('## 🏆 API Maturity Score');
        report.push('');
        report.push(`### Overall Score: **${apiScore}/100**`);
        report.push('');
        report.push('| Category | Score | Status |');
        report.push('|----------|-------|--------|');
        report.push(`| **Versioning** | ${hasVersioning}/20 | ${hasVersioning >= 20 ? '✅ Excellent' : '⚠️ Basic'} |`);
        report.push(`| **Authentication** | ${hasAuth}/20 | ${hasAuth >= 20 ? '✅ Implemented' : '❌ Missing'} |`);
        report.push(`| **Query Parameters** | ${hasQueryParams}/20 | ${hasQueryParams >= 20 ? '✅ Rich' : '⚠️ Limited'} |`);
        report.push(`| **CRUD Coverage** | ${hasCRUD}/40 | ${hasCRUD >= 40 ? '✅ Complete' : hasCRUD >= 20 ? '⚠️ Partial' : '❌ Minimal'} |`);
        
        report.push('');
        report.push('---');
        report.push('');
        report.push('> 📝 **Note:** This report provides a comprehensive analysis of your API structure.');
        report.push('> Use these metrics to identify areas for improvement and ensure API consistency.');
        
        return report.join('\n');
    }

    /**
     * Export detailed endpoint list to JSON
     */
    async exportEndpoints(outputPath) {
        const exportData = {
            summary: {
                totalEndpoints: this.stats.totalEndpoints,
                uniquePaths: this.stats.uniquePaths,
                filesScanned: Object.keys(this.stats.byFile).length,
                generatedAt: new Date().toISOString()
            },
            statistics: this.stats,
            endpoints: this.endpoints.map(e => ({
                method: e.method,
                path: e.path,
                version: e.version,
                group: e.group,
                file: e.file,
                section: e.section,
                parameters: e.parameters,
                queryParameters: e.queryParameters || []
            }))
        };
        
        await fs.writeFile(outputPath, JSON.stringify(exportData, null, 2));
        console.log(`\n✓ Exported detailed endpoint data to ${outputPath}`);
    }

    /**
     * Main execution
     */
    async run(directory = '.') {
        console.log('\n🔍 API Statistics Collector');
        console.log('=' .repeat(50));
        console.log(`Scanning directory: ${directory}\n`);
        
        try {
            // Find all markdown files
            const files = await fs.readdir(directory);
            const mdFiles = files
                .filter(f => f.endsWith('-rest-api-design.md'))
                .map(f => path.join(directory, f));
            
            if (mdFiles.length === 0) {
                console.log('No API design markdown files found (*-rest-api-design.md)');
                return;
            }
            
            console.log(`Found ${mdFiles.length} API design files to scan:\n`);
            
            // Scan each file
            for (const file of mdFiles) {
                await this.scanMarkdownFile(file);
            }
            
            // Calculate statistics
            this.calculateStats();
            
            // Generate and display report
            const report = this.generateReport();
            console.log('\n' + report);
            
            // Save report to file
            const reportPath = path.join(directory, 'api-statistics-report.md');
            await fs.writeFile(reportPath, report);
            console.log(`\n✓ Report saved to ${reportPath}`);
            
            // Export JSON data
            const jsonPath = path.join(directory, 'api-endpoints-data.json');
            await this.exportEndpoints(jsonPath);
            
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

// Execute if run directly
if (require.main === module) {
    const collector = new APIStatsCollector();
    const directory = process.argv[2] || '.';
    collector.run(directory);
}

module.exports = APIStatsCollector;