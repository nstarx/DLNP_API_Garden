export const projectMockData = {
    availableUsers: [
        { name: 'Adrian', email: 'adrian@nstarxinc.com', role: 'admin' },
        { name: 'Sai', email: 'Sai@nstarxinc.com', role: 'ds' },
        { name: 'Suresh', email: 'suresh@nstarxinc.com', role: 'ds' },
        { name: 'Suman', email: 'suman@nstarxinc.com', role: 'biz' },
        { name: 'Sujay', email: 'sujay@nstarxinc.com', role: 'ops' }
    ],
    
    accessLevelOptions: [
        { label: 'Public', value: 'public', description: 'All users can access' },
        { label: 'Internal', value: 'internal', description: 'All authenticated users can access' },
        { label: 'Confidential', value: 'confidential', description: 'Only users with specific permissions can access' },
        { label: 'Restricted', value: 'restricted', description: 'Only specific roles can access' },
        { label: 'Classified', value: 'classified', description: 'Only executive-level users can access' }
    ],
    
    statusOptions: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Archived', value: 'archived' }
    ],
    
    diskTypeOptions: [
        { label: 'SSD', value: 'SSD' },
        { label: 'HDD', value: 'HDD' }
    ],
    
    locationOptions: [
        { label: 'US East (N. Virginia)', value: 'us-east-1' },
        { label: 'US East (Ohio)', value: 'us-east-2' },
        { label: 'US West (N. California)', value: 'us-west-1' },
        { label: 'US West (Oregon)', value: 'us-west-2' },
        { label: 'EU (Ireland)', value: 'eu-west-1' },
        { label: 'EU (Frankfurt)', value: 'eu-central-1' },
        { label: 'Asia Pacific (Tokyo)', value: 'ap-northeast-1' },
        { label: 'Asia Pacific (Singapore)', value: 'ap-southeast-1' }
    ],
    
    environmentOptions: [
        { label: 'Development', value: 'dev' },
        { label: 'Staging', value: 'stg' },
        { label: 'Production', value: 'prod' }
    ],
    
    defaultProject: {
        id: null,
        label: '',
        value: '',
        description: '',
        owner: '',
        environment: 'dev',
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active',
        accessLevel: 'public',
        users: [],
        quota: {
            cpu: 4,
            memory: 16,
            storage: 100
        },
        disk: {
            size: 100,
            used: 0,
            type: 'SSD'
        },
        location: 'us-east-1',
        tags: {},
        budget: {
            allocated: 0,
            spent: 0,
            committed: 0,
            startDate: new Date(),
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            approver: null,
            spendingFrozen: false
        }
    },
    
    budgetRequest: {
        amount: 0,
        reason: '',
        approver: null
    },
    
    projectBudgetTemplate: (index) => ({
        allocated: (index + 1) * 250000,
        spent: Math.floor((index + 1) * 250000 * 0.65),
        committed: Math.floor((index + 1) * 250000 * 0.1),
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-12-31'),
        spendingFrozen: false
    })
};