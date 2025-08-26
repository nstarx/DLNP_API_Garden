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
    {
        id: 2,
        name: 'Complex Problem Solving',
        category: 'Analysis',
        type: 'analysis',
        complexity: 'High',
        estimatedDuration: 45,
        description: "Evaluates the agent's capability to solve complex problems requiring multi-step reasoning."
    },
    {
        id: 3,
        name: 'API Integration Test',
        category: 'Integration',
        type: 'integration',
        complexity: 'Medium',
        estimatedDuration: 30,
        description: "Tests the agent's ability to interact with external APIs and process the returned data correctly."
    },
    {
        id: 4,
        name: 'Code Review Accuracy',
        category: 'Code Review',
        type: 'code-review',
        complexity: 'High',
        estimatedDuration: 40,
        description: 'Evaluates how accurately the agent can identify bugs and suggest improvements in code samples.'
    },
    {
        id: 5,
        name: 'Content Moderation',
        category: 'Moderation',
        type: 'moderation',
        complexity: 'Medium',
        estimatedDuration: 25,
        description: "Tests the agent's ability to identify and handle inappropriate content according to guidelines."
    },
    {
        id: 6,
        name: 'Multi-turn Conversation',
        category: 'Conversation',
        type: 'conversation',
        complexity: 'Medium',
        estimatedDuration: 35,
        description: "Tests the agent's ability to maintain context across multiple conversation turns."
    }
];

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
    {
        id: 2,
        name: 'Technical Assistant',
        type: {
            name: 'API Agent',
            icon: 'pi pi-cog',
            provider: 'openai',
            description: 'technical troubleshooting and guidance',
            endpoint: '/openai-use-case-1'
        }
    },
    {
        id: 3,
        name: 'Research Assistant',
        type: {
            name: 'API Agent',
            icon: 'pi pi-chart-bar',
            provider: 'google',
            description: 'data analysis and research',
            endpoint: '/research-assistant-google-adk',
            appname: 'academic_research'
        }
    },
    {
        id: 4,
        name: 'Code Assistant',
        type: {
            name: 'RAG Agent',
            icon: 'pi pi-code',
            provider: 'anthropic',
            description: 'code generation and debugging',
            endpoint: '/anthropic-code-assistant-rag',
            appname: 'development_assistant'
        }
    },
    {
        id: 5,
        name: 'Legal Advisor',
        type: {
            name: 'LLM Agent',
            icon: 'pi pi-briefcase',
            provider: 'ollama',
            description: 'legal document analysis',
            endpoint: '/ollama-legal-advisor'
        }
    }
];

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
    {
        id: 2,
        name: 'API Integration Suite',
        type: 'integration',
        scenarios: 8,
        lastRun: '2024-01-14',
        status: 'partial',
        passRate: 75
    },
    {
        id: 3,
        name: 'Performance Test Suite',
        type: 'performance',
        scenarios: 10,
        lastRun: '2024-01-13',
        status: 'passed',
        passRate: 88
    }
];

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
    {
        id: 2,
        testName: 'API Integration #1242',
        agent: 'Technical Assistant',
        duration: '3m 12s',
        status: 'failed',
        timestamp: '25 mins ago'
    },
    {
        id: 3,
        testName: 'Code Review #1241',
        agent: 'Code Assistant',
        duration: '4m 8s',
        status: 'passed',
        timestamp: '1 hour ago'
    },
    {
        id: 4,
        testName: 'Content Moderation #1240',
        agent: 'Research Assistant',
        duration: '1m 45s',
        status: 'warning',
        timestamp: '2 hours ago'
    }
];

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
    {
        id: 2,
        name: 'Context Window Size',
        description: 'Comparing 4k vs 8k context windows',
        status: 'completed',
        variantA: { name: '4k Context', score: 75 },
        variantB: { name: '8k Context', score: 83 },
        sampleSize: 300
    }
];

export const mockTestReports = [
    {
        id: 1,
        name: 'Weekly Test Report - Week 2',
        type: 'PDF',
        generatedDate: '2024-01-14',
        testsIncluded: 234,
        size: '2.1 MB'
    },
    {
        id: 2,
        name: 'Monthly Summary - December',
        type: 'Excel',
        generatedDate: '2024-01-01',
        testsIncluded: 1002,
        size: '3.8 MB'
    }
];

export const mockScenarioCategories = [
    { name: 'Conversation' },
    { name: 'Analysis' },
    { name: 'Integration' },
    { name: 'Code Review' },
    { name: 'Moderation' }
];

export const mockComplexityLevels = ['Low', 'Medium', 'High'];

export const mockTestEnvironments = ['development', 'staging', 'production'];