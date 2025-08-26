export const mockTestScenarios = [
    {
        id: 1,
        name: 'Basic Conversation Flow',
        category: 'Conversation',
        type: 'conversation',
        complexity: 'Low',
        estimatedDuration: 15,
        description: "Tests the agent's ability to maintain a coherent conversation with basic queries."
    },
export const mockAvailableAgents = [
    {
        id: 1,
        name: 'Customer Support Agent',
        type: {
            name: 'API Agent',
            icon: 'pi pi-users',
            provider: 'google',
            description: 'customer support and service',
            endpoint: '/customer-support-google-adk',
            appname: 'customer_service'
        }
    },
export const mockTestSuites = [
    {
        id: 1,
        name: 'Daily Regression Suite',
        type: 'regression',
        scenarios: 15,
        lastRun: '2024-01-15',
        status: 'passed',
        passRate: 93
    },
export const mockPerformanceMetrics = {
    avgResponseTime: 245,
    successRate: 87,
    totalTests: 1243,
    totalCost: 28.75
};
export const mockRecentTestResults = [
    {
        id: 1,
        testName: 'Conversation Flow #1243',
        agent: 'Customer Support Agent',
        duration: '2m 35s',
        status: 'passed',
        timestamp: '10 mins ago'
    },
export const mockABTestExperiments = [
    {
        id: 1,
        name: 'Response Time Optimization',
        description: 'Testing different caching strategies',
        status: 'running',
        variantA: { name: 'Standard Cache', score: 82 },
        variantB: { name: 'Enhanced Cache', score: 87 },
        sampleSize: 500
    },
export const mockTestReports = [
    {
        id: 1,
        name: 'Weekly Test Report - Week 2',
        type: 'PDF',
        generatedDate: '2024-01-14',
        testsIncluded: 234,
        size: '2.1 MB'
    },
export const mockScenarioCategories = [
    { name: 'Conversation' },
export const mockComplexityLevels = ['Low', 'Medium', 'High'];

export const mockTestEnvironments = ['development', 'staging', 'production'];