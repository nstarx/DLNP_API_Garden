export const availableRoles = [
    { 
        name: 'ds', 
        label: 'Data Science', 
        description: 'Access to AI models, pipelines, and deployments' 
    },
    { 
        name: 'ops', 
        label: 'Operations', 
        description: 'Access to system monitoring and resource management' 
    },
    { 
        name: 'biz', 
        label: 'Business', 
        description: 'Access to documents and business analytics' 
    },
    {
        name: 'admin',
        label: 'Administrator',
        description: 'Full access to all system features including user management'
    },
    {
        name: 'dashboard_admin',
        label: 'Dashboard Admin',
        description: 'Access to dashboard configuration and basic user management'
    }
];

export const rolesList = [
    { id: 1, name: 'Administrator', code: 'admin' },
    { id: 2, name: 'Data Scientist', code: 'ds' },
    { id: 3, name: 'Operations', code: 'ops' },
    { id: 4, name: 'Business User', code: 'biz' },
    { id: 5, name: 'Dashboard Admin', code: 'dashboard_admin' }
];