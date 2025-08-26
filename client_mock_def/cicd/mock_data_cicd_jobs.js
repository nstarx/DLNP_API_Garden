export const mockDevJobs = [
    {
        id: 'dev-1',
        name: 'Build AI Model',
        pipeline: 'ai-build-pipeline',
        status: 'completed',
        startTime: '2023-06-15T10:30:00Z',
        endTime: '2023-06-15T11:00:00Z',
        duration: '30m',
        aiZone: 'zone-1',
        createdBy: 'system',
        environment: 'dev'
    },
    {
        id: 'dev-2',
        name: 'Run Unit Tests',
        pipeline: 'test-pipeline',
        status: 'running',
        startTime: '2023-06-16T09:00:00Z',
        endTime: null,
        duration: 'Running',
        aiZone: 'zone-2',
        createdBy: 'developer',
        environment: 'dev'
    },
    {
        id: 'dev-3',
        name: 'Code Quality Check',
        pipeline: 'quality-pipeline',
        status: 'failed',
        startTime: '2023-06-16T08:00:00Z',
        endTime: '2023-06-16T08:30:00Z',
        duration: '30m',
        aiZone: 'zone-1',
        createdBy: 'system',
        environment: 'dev'
    },
    {
        id: 'dev-4',
        name: 'Deploy to Dev Environment',
        pipeline: 'dev-deploy-pipeline',
        status: 'pending',
        startTime: null,
        endTime: null,
        duration: 'Pending',
        aiZone: 'zone-3',
        createdBy: 'developer',
        environment: 'dev'
    },
    {
        id: 'dev-5',
        name: 'Security Scan',
        pipeline: 'security-pipeline',
        status: 'completed',
        startTime: '2023-06-15T14:00:00Z',
        endTime: '2023-06-15T14:05:00Z',
        duration: '5m',
        aiZone: 'zone-1',
        createdBy: 'developer',
        environment: 'dev'
    }
];

export const mockStagingJobs = [
    {
        id: 'stg-1',
        name: 'Deploy AI Model to Staging',
        pipeline: 'ai-model-deploy-pipeline',
        status: 'completed',
        startTime: '2023-06-14T13:30:00Z',
        endTime: '2023-06-14T14:15:00Z',
        duration: '45m',
        aiZone: 'zone-2',
        createdBy: 'system',
        environment: 'staging'
    },
    {
        id: 'stg-2',
        name: 'Integration Tests',
        pipeline: 'integration-test-pipeline',
        status: 'running',
        startTime: '2023-06-16T11:00:00Z',
        endTime: null,
        duration: 'Running',
        aiZone: 'zone-1',
        createdBy: 'qa-team',
        environment: 'staging'
    },
    {
        id: 'stg-3',
        name: 'Performance Testing',
        pipeline: 'perf-test-pipeline',
        status: 'pending',
        startTime: null,
        endTime: null,
        duration: 'Pending',
        aiZone: 'zone-3',
        createdBy: 'system',
        environment: 'staging'
    }
];

export const mockProductionJobs = [
    {
        id: 'prod-1',
        name: 'Production Deployment',
        pipeline: 'prod-deploy-pipeline',
        status: 'completed',
        startTime: '2023-06-10T09:00:00Z',
        endTime: '2023-06-10T10:30:00Z',
        duration: '1h 30m',
        aiZone: 'zone-1',
        createdBy: 'release-manager',
        environment: 'production'
    },
    {
        id: 'prod-2',
        name: 'Canary Release',
        pipeline: 'canary-release-pipeline',
        status: 'completed',
        startTime: '2023-06-11T14:00:00Z',
        endTime: '2023-06-11T16:00:00Z',
        duration: '2h',
        aiZone: 'zone-2',
        createdBy: 'system',
        environment: 'production'
    },
    {
        id: 'prod-3',
        name: 'Rollback Preparation',
        pipeline: 'rollback-prep-pipeline',
        status: 'pending',
        startTime: null,
        endTime: null,
        duration: 'Pending',
        aiZone: 'zone-1',
        createdBy: 'ops-team',
        environment: 'production'
    }
];

export const mockCICDJobs = [...mockDevJobs, ...mockStagingJobs, ...mockProductionJobs];

export const mockPipelines = [
    {
        id: 'ai-build-pipeline',
        name: 'AI Model Build Pipeline',
        description: 'Builds and packages AI models',
        stages: ['Source', 'Build', 'Test', 'Package'],
        triggers: ['Push', 'Manual', 'Schedule'],
        lastRun: '2023-06-16T09:00:00Z',
        avgDuration: '25m'
    },
    {
        id: 'test-pipeline',
        name: 'Test Pipeline',
        description: 'Runs unit and integration tests',
        stages: ['Setup', 'Unit Tests', 'Integration Tests', 'Report'],
        triggers: ['Push', 'Pull Request'],
        lastRun: '2023-06-16T08:30:00Z',
        avgDuration: '15m'
    },
    {
        id: 'deploy-pipeline',
        name: 'Deployment Pipeline',
        description: 'Handles deployment to various environments',
        stages: ['Validate', 'Deploy', 'Verify', 'Notify'],
        triggers: ['Manual', 'Schedule'],
        lastRun: '2023-06-15T14:00:00Z',
        avgDuration: '45m'
    }
];

export const mockJobStatistics = {
    total: 11,
    completed: 5,
    running: 2,
    failed: 1,
    pending: 3,
    successRate: 83.3,
    avgDuration: '32m',
    lastWeekRuns: 45,
    environments: {
        dev: { total: 5, active: 2 },
        staging: { total: 3, active: 1 },
        production: { total: 3, active: 0 }
    }
};