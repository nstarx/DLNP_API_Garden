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
export const agentsForTesting = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
export const agentsForEvaluation = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
export const versionsForEvaluation = ['v1.2.3', 'v1.2.4-beta', 'v1.3.0-dev'];

export const validationDatasets = [
    { id: 1, name: 'Production Queries' },
export const evaluationMetrics = [
    { id: 1, name: 'Accuracy' },
export const agentsForDeployment = [
    { id: 1, name: 'Research Assistant', icon: 'pi pi-search-plus' },
export const deploymentStrategies = [
    { id: 1, name: 'Blue/Green Deployment' },
export const notificationOptions = [
    { id: 1, name: 'Email Notifications' },
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
export const recentTestResults = [
    {
        testName: 'Basic Functionality',
        status: 'Passed',
        score: 98,
        duration: 1250,
        timestamp: '2023-07-15 14:30'
    },
export const scenarioCategories = [{ name: 'Customer Support' }, { name: 'Document Processing' }, { name: 'Data Analysis' }, { name: 'Research' }, { name: 'Content Generation' }];
export const testEnvironments = ['Development', 'Staging', 'Production', 'Sandbox'];
