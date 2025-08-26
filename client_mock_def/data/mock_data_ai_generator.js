export const mockAppTypes = [
    { value: 'dashboard', label: 'Dashboard' },
export const mockMcpTools = [
    { id: 'database', name: 'Database Connector' },
export const mockGenerationSteps = [
    { id: 1, label: 'Analyzing prompt' },
export const mockGeneratedApps = [
    {
        id: 'gen-001',
        name: 'Dashboard',
        description: 'Real-time monitoring dashboard with intelligent alerts and predictive analytics',
        type: 'Dashboard',
        status: 'Ready to Deploy',
        features: ['Real-time data visualization'],
        techStack: ['Vue.js', 'Node.js', 'Chart.js'],
        mcpToolsUsed: ['Database Connector', 'API Gateway', 'Notifications', 'AI/ML Services'],
        estimatedDeployTime: '5-10 minutes',
        resources: {
            cpu: '2 cores',
            memory: '4GB',
            storage: '20GB'
        }
    },
export const mockAgenticAICapabilities = [
    {
        id: 'code-gen',
        name: 'Code Generation',
        description: 'Automatically generates optimized code based on requirements',
        status: 'active'
    },