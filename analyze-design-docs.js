#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class DesignDocsAnalyzer {
    constructor() {
        this.stats = {
            totalFiles: 0,
            totalEndpoints: 0,
            services: {},
            methodDistribution: {
                GET: 0,
                POST: 0,
                PUT: 0,
                DELETE: 0,
                PATCH: 0
            },
            endpointPatterns: {},
            resourceTypes: new Set()
        };
    }

    analyzeDesignFolder(folderPath = 'design') {
        console.log('🔍 Analyzing design documentation...\n');
        
        const files = fs.readdirSync(folderPath)
            .filter(file => file.endsWith('.md'))
            .map(file => path.join(folderPath, file));
        
        this.stats.totalFiles = files.length;
        
        files.forEach(file => {
            this.analyzeFile(file);
        });
        
        this.generateReport();
    }

    analyzeFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fileName = path.basename(filePath);
        
        // Skip non-API design files
        if (!fileName.includes('rest-api-design')) {
            return;
        }
        
        const serviceName = this.extractServiceName(fileName);
        
        if (!this.stats.services[serviceName]) {
            this.stats.services[serviceName] = {
                fileName: fileName,
                endpoints: [],
                methodCount: {
                    GET: 0,
                    POST: 0,
                    PUT: 0,
                    DELETE: 0,
                    PATCH: 0
                },
                resources: new Set()
            };
        }
        
        this.extractEndpoints(content, serviceName);
    }

    extractServiceName(fileName) {
        // Extract service name from filename like "ai-catalog-rest-api-design.md"
        return fileName
            .replace('-rest-api-design.md', '')
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    extractEndpoints(content, serviceName) {
        // Multiple patterns to match different API endpoint formats
        const patterns = [
            // Matches: GET /api/v1/resource
            /^(GET|POST|PUT|DELETE|PATCH)\s+([\/\w\-\{\}:]+)/gim,
            // Matches: - GET /api/v1/resource
            /^\s*[-•]\s*(GET|POST|PUT|DELETE|PATCH)\s+([\/\w\-\{\}:]+)/gim,
            // Matches: `GET /api/v1/resource`
            /`(GET|POST|PUT|DELETE|PATCH)\s+([\/\w\-\{\}:]+)`/gi,
            // Matches: **GET** /api/v1/resource
            /\*\*(GET|POST|PUT|DELETE|PATCH)\*\*\s+([\/\w\-\{\}:]+)/gi,
            // Matches in table format: | GET | /api/v1/resource |
            /\|\s*(GET|POST|PUT|DELETE|PATCH)\s*\|\s*([\/\w\-\{\}:]+)\s*\|/gi
        ];
        
        const lines = content.split('\n');
        const service = this.stats.services[serviceName];
        
        patterns.forEach(pattern => {
            const matches = content.matchAll(pattern);
            for (const match of matches) {
                const method = match[1].toUpperCase();
                const endpoint = match[2].trim();
                
                // Skip if endpoint doesn't look valid
                if (!endpoint.startsWith('/') || endpoint.length < 2) {
                    continue;
                }
                
                // Check if this endpoint already exists to avoid duplicates
                const exists = service.endpoints.some(e => 
                    e.method === method && e.path === endpoint
                );
                
                if (!exists) {
                    service.endpoints.push({
                        method: method,
                        path: endpoint
                    });
                    
                    service.methodCount[method]++;
                    this.stats.methodDistribution[method]++;
                    this.stats.totalEndpoints++;
                    
                    // Extract resource from path
                    this.extractResource(endpoint, service);
                    
                    // Track endpoint patterns
                    this.trackEndpointPattern(endpoint);
                }
            }
        });
    }

    extractResource(endpoint, service) {
        // Extract main resource from endpoint path
        const parts = endpoint.split('/').filter(p => p && !p.startsWith('{') && p !== 'api' && p !== 'v1' && p !== 'v2');
        if (parts.length > 0) {
            const resource = parts[0];
            service.resources.add(resource);
            this.stats.resourceTypes.add(resource);
        }
    }

    trackEndpointPattern(endpoint) {
        // Normalize endpoint to pattern
        const pattern = endpoint
            .replace(/\{[^}]+\}/g, '{id}')  // Replace all parameters with {id}
            .replace(/\/v\d+/g, '/v{n}');    // Replace version numbers
        
        if (!this.stats.endpointPatterns[pattern]) {
            this.stats.endpointPatterns[pattern] = 0;
        }
        this.stats.endpointPatterns[pattern]++;
    }

    generateReport() {
        console.log('━'.repeat(80));
        console.log('📊 DESIGN DOCUMENTATION ANALYSIS REPORT');
        console.log('━'.repeat(80));
        console.log();
        
        // Overall Statistics
        console.log('📈 OVERALL STATISTICS');
        console.log('─'.repeat(40));
        console.log(`Total Markdown Files: ${this.stats.totalFiles}`);
        console.log(`Total API Services: ${Object.keys(this.stats.services).length}`);
        console.log(`Total Endpoints: ${this.stats.totalEndpoints}`);
        console.log();
        
        // Method Distribution
        console.log('🔄 HTTP METHOD DISTRIBUTION');
        console.log('─'.repeat(40));
        const maxMethodCount = Math.max(...Object.values(this.stats.methodDistribution));
        Object.entries(this.stats.methodDistribution).forEach(([method, count]) => {
            const percentage = this.stats.totalEndpoints > 0 
                ? ((count / this.stats.totalEndpoints) * 100).toFixed(1) 
                : 0;
            const barLength = Math.round((count / maxMethodCount) * 30);
            const bar = '█'.repeat(barLength) + '░'.repeat(30 - barLength);
            console.log(`${method.padEnd(7)} ${bar} ${count} (${percentage}%)`);
        });
        console.log();
        
        // Service Breakdown
        console.log('🎯 SERVICE BREAKDOWN');
        console.log('─'.repeat(80));
        
        // Sort services by endpoint count
        const sortedServices = Object.entries(this.stats.services)
            .sort((a, b) => b[1].endpoints.length - a[1].endpoints.length);
        
        sortedServices.forEach(([serviceName, serviceData]) => {
            if (serviceData.endpoints.length === 0) return;
            
            console.log(`\n📦 ${serviceName}`);
            console.log(`   File: ${serviceData.fileName}`);
            console.log(`   Total Endpoints: ${serviceData.endpoints.length}`);
            console.log(`   Resources: ${Array.from(serviceData.resources).join(', ') || 'N/A'}`);
            console.log(`   Methods: GET(${serviceData.methodCount.GET}) POST(${serviceData.methodCount.POST}) PUT(${serviceData.methodCount.PUT}) DELETE(${serviceData.methodCount.DELETE}) PATCH(${serviceData.methodCount.PATCH})`);
            
            // Show sample endpoints (first 5)
            if (serviceData.endpoints.length > 0) {
                console.log('   Sample Endpoints:');
                serviceData.endpoints.slice(0, 5).forEach(endpoint => {
                    console.log(`     • ${endpoint.method} ${endpoint.path}`);
                });
                if (serviceData.endpoints.length > 5) {
                    console.log(`     ... and ${serviceData.endpoints.length - 5} more`);
                }
            }
        });
        console.log();
        
        // Common Endpoint Patterns
        console.log('🔍 COMMON ENDPOINT PATTERNS');
        console.log('─'.repeat(40));
        const topPatterns = Object.entries(this.stats.endpointPatterns)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
        
        topPatterns.forEach(([pattern, count]) => {
            console.log(`${count}x  ${pattern}`);
        });
        console.log();
        
        // Resource Types
        console.log('📚 RESOURCE TYPES');
        console.log('─'.repeat(40));
        const resources = Array.from(this.stats.resourceTypes).sort();
        console.log(resources.join(', '));
        console.log();
        
        // Summary
        console.log('━'.repeat(80));
        console.log('✅ SUMMARY');
        console.log('─'.repeat(40));
        console.log(`Average endpoints per service: ${(this.stats.totalEndpoints / Object.keys(this.stats.services).length).toFixed(1)}`);
        console.log(`Most common method: ${this.getMostCommonMethod()}`);
        console.log(`Total unique resources: ${this.stats.resourceTypes.size}`);
        console.log('━'.repeat(80));
        
        // Export to JSON
        this.exportToJson();
    }

    getMostCommonMethod() {
        return Object.entries(this.stats.methodDistribution)
            .sort((a, b) => b[1] - a[1])[0][0];
    }

    exportToJson() {
        const exportData = {
            timestamp: new Date().toISOString(),
            summary: {
                totalFiles: this.stats.totalFiles,
                totalServices: Object.keys(this.stats.services).length,
                totalEndpoints: this.stats.totalEndpoints,
                totalResources: this.stats.resourceTypes.size
            },
            methodDistribution: this.stats.methodDistribution,
            services: Object.entries(this.stats.services).map(([name, data]) => ({
                name,
                fileName: data.fileName,
                endpointCount: data.endpoints.length,
                methods: data.methodCount,
                resources: Array.from(data.resources),
                endpoints: data.endpoints
            })),
            resourceTypes: Array.from(this.stats.resourceTypes),
            topPatterns: Object.entries(this.stats.endpointPatterns)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 20)
                .map(([pattern, count]) => ({ pattern, count }))
        };
        
        const outputPath = 'design-analysis-report.json';
        fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
        console.log(`\n💾 Detailed report exported to: ${outputPath}`);
    }
}

// Run the analyzer
const analyzer = new DesignDocsAnalyzer();
analyzer.analyzeDesignFolder();