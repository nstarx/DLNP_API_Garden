export const mockRoles = [
    {
        id: 1,
        name: 'Administrator',
        code: 'admin',
        description: 'Full access to all system features',
        permissions: [
            'view_dashboard',
            'view_users',
            'create_user',
            'edit_user',
            'delete_user',
            'view_roles',
            'create_role',
            'edit_role',
            'delete_role',
            'assign_menu',
            'view_ai_catalog',
            'manage_ai_catalog',
            'view_deployments',
            'manage_deployments',
            'view_monitoring',
            'view_documents',
            'manage_documents'
        ]
    },
    {
        id: 2,
        name: 'Data Scientist',
        code: 'ds',
        description: 'Access to AI models, pipelines, and deployments',
        permissions: ['view_dashboard', 'view_ai_catalog', 'manage_ai_catalog', 'view_deployments']
    },
    {
        id: 3,
        name: 'Operations',
        code: 'ops',
        description: 'Access to system monitoring and resource management',
        permissions: ['view_dashboard', 'view_deployments', 'manage_deployments', 'view_monitoring']
    },
    {
        id: 4,
        name: 'Business User',
        code: 'biz',
        description: 'Access to documents and business analytics',
        permissions: ['view_dashboard', 'view_documents', 'manage_documents']
    },
    {
        id: 5,
        name: 'Dashboard Admin',
        code: 'dashboard_admin',
        description: 'Manages users and has access to about information',
        permissions: ['view_dashboard', 'view_users', 'create_user', 'edit_user', 'delete_user', 'view_roles']
    }
];

export const availablePermissions = [
    { name: 'view_dashboard', label: 'View Dashboard', category: 'System' },
    { name: 'view_users', label: 'View Users', category: 'User Management' },
    { name: 'create_user', label: 'Create User', category: 'User Management' },
    { name: 'edit_user', label: 'Edit User', category: 'User Management' },
    { name: 'delete_user', label: 'Delete User', category: 'User Management' },
    { name: 'view_roles', label: 'View Roles', category: 'Role Management' },
    { name: 'create_role', label: 'Create Role', category: 'Role Management' },
    { name: 'edit_role', label: 'Edit Role', category: 'Role Management' },
    { name: 'delete_role', label: 'Delete Role', category: 'Role Management' },
    { name: 'assign_menu', label: 'Assign Menu', category: 'System' },
    { name: 'view_ai_catalog', label: 'View AI Catalog', category: 'AI' },
    { name: 'manage_ai_catalog', label: 'Manage AI Catalog', category: 'AI' },
    { name: 'view_deployments', label: 'View Deployments', category: 'Operations' },
    { name: 'manage_deployments', label: 'Manage Deployments', category: 'Operations' },
    { name: 'view_monitoring', label: 'View Monitoring', category: 'Operations' },
    { name: 'view_documents', label: 'View Documents', category: 'Business' },
    { name: 'manage_documents', label: 'Manage Documents', category: 'Business' }
];