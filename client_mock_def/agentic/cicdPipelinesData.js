// Mock data for CI/CD Pipelines

export const pipelineRuns = [
    {
        id: 1,
        agentName: 'Research Assistant',
        icon: 'pi pi-search-plus',
        version: 'v1.2.3',
        status: 'Completed',
        lastRun: '2 hours ago',
        duration: '3m 45s'
    },
    {
        id: 2,
        agentName: 'Data Analyst',
        icon: 'pi pi-chart-bar',
        version: 'v1.0.5',
        status: 'Failed',
        lastRun: '1 day ago',
        duration: '2m 12s'
    },
    {
        id: 3,
        agentName: 'Customer Support',
        icon: 'pi pi-comments',
        version: 'v2.1.0',
        status: 'In Progress',
        lastRun: 'Just now',
        duration: '1m 30s'
    },
    {
        id: 4,
        agentName: 'Document Processor',
        icon: 'pi pi-file',
        version: 'v0.9.2',
        status: 'Queued',
        lastRun: 'Pending',
        duration: 'N/A'
    }
];

export const agentsForTesting = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
    { id: 2, name: 'Data Analyst', icon: 'pi pi-chart-bar' },
    { id: 3, name: 'Customer Support', icon: 'pi pi-comments' },
    { id: 4, name: 'Document Processor', icon: 'pi pi-file' }
];

export const agentsForEvaluation = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
    { id: 2, name: 'Data Analyst', icon: 'pi pi-chart-bar' },
    { id: 3, name: 'Customer Support', icon: 'pi pi-comments' },
    { id: 4, name: 'Document Processor', icon: 'pi pi-file' }
];

export const versionsForEvaluation = ['v1.2.3', 'v1.2.4-beta', 'v1.3.0-dev'];

export const validationDatasets = [
    { id: 1, name: 'Production Queries' },
    { id: 2, name: 'Edge Cases' },
    { id: 3, name: 'Benchmark Suite' }
];

export const evaluationMetrics = [
    { id: 1, name: 'Accuracy' },
    { id: 2, name: 'Latency' },
    { id: 3, name: 'Consistency' },
    { id: 4, name: 'Safety' }
];

export const agentsForDeployment = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
    { id: 2, name: 'Data Analyst', icon: 'pi pi-chart-bar' },
    { id: 3, name: 'Customer Support', icon: 'pi pi-comments' },
    { id: 4, name: 'Document Processor', icon: 'pi pi-file' }
];

export const deploymentStrategies = [
    { id: 1, name: 'Blue/Green Deployment' },
    { id: 2, name: 'Canary Release' },
    { id: 3, name: 'Rolling Update' },
    { id: 4, name: 'A/B Testing' }
];

export const notificationOptions = [
    { id: 1, name: 'Email Notifications' },
    { id: 2, name: 'Slack Alerts' },
    { id: 3, name: 'MS Teams Notifications' },
    { id: 4, name: 'SMS Alerts' }
];

export const testResults = {
    promptRegression: { progress: 80, label: '12/15 Passing', severity: 'success' },
    responseQuality: { progress: 80, label: '8/10 Passing', severity: 'warning' },
    edgeCases: { progress: 90, label: '18/20 Passing', severity: 'success' }
};

export const deploymentStatus = {
    development: { version: 'v1.3.0-dev', status: 'deployed 2 hours ago' },
    staging: { version: 'v1.2.4-beta', status: 'deploying...' },
    production: { version: 'v1.2.3', status: 'awaiting approval' }
};

export const pipelineConfig = {
    gitRepo: 'https://github.com/organization/agent-repo.git',
    branch: 'main',
    buildCommand: 'npm run build',
    testCommand: 'npm run test',
    deploymentStrategy: null,
    notifications: []
};

export const testScenarios = [
    {
        id: 1,
        name: 'Customer Service Escalation',
        category: 'Customer Support',
        type: 'conversation',
        complexity: 'Medium',
        estimatedDuration: 15,
        description: 'Test agent ability to handle escalated customer complaints and provide appropriate solutions.'
    },
    {
        id: 2,
        name: 'Multi-language Document Analysis',
        category: 'Document Processing',
        type: 'analysis',
        complexity: 'High',
        estimatedDuration: 30,
        description: 'Test agent ability to analyze documents in multiple languages and extract key information.'
    }
];

export const recentTestResults = [
    {
        testName: 'Basic Functionality',
        status: 'Passed',
        score: 98,
        duration: 1250,
        timestamp: '2023-07-15 14:30'
    },
    {
        testName: 'Edge Cases',
        status: 'Failed',
        score: 65,
        duration: 2100,
        timestamp: '2023-07-15 14:35'
    },
    {
        testName: 'Performance Test',
        status: 'Warning',
        score: 82,
        duration: 3500,
        timestamp: '2023-07-15 14:40'
    }
];

export const scenarioCategories = [{ name: 'Customer Support' }, { name: 'Document Processing' }, { name: 'Data Analysis' }, { name: 'Research' }, { name: 'Content Generation' }];

export const testEnvironments = ['Development', 'Staging', 'Production', 'Sandbox'];
