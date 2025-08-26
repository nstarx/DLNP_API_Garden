export const availablePermissions = [
    { name: 'view_dashboard', label: 'View Dashboard', category: 'Dashboard' },
    { name: 'view_users', label: 'View Users', category: 'User Management' },
    { name: 'create_user', label: 'Create User', category: 'User Management' },
    { name: 'edit_user', label: 'Edit User', category: 'User Management' },
    { name: 'delete_user', label: 'Delete User', category: 'User Management' },
    { name: 'view_roles', label: 'View Roles', category: 'Role Management' },
    { name: 'create_role', label: 'Create Role', category: 'Role Management' },
    { name: 'edit_role', label: 'Edit Role', category: 'Role Management' },
    { name: 'delete_role', label: 'Delete Role', category: 'Role Management' },
    { name: 'assign_menu', label: 'Assign Menu Items', category: 'Menu Management' },
    { name: 'view_ai_catalog', label: 'View AI Catalog', category: 'AI Operations' },
    { name: 'create_model', label: 'Create Model', category: 'AI Operations' },
    { name: 'deploy_model', label: 'Deploy Model', category: 'AI Operations' },
    { name: 'view_data', label: 'View Data', category: 'Data Management' },
    { name: 'upload_data', label: 'Upload Data', category: 'Data Management' },
    { name: 'modify_data', label: 'Modify Data', category: 'Data Management' },
    { name: 'delete_data', label: 'Delete Data', category: 'Data Management' },
    { name: 'view_logs', label: 'View System Logs', category: 'System' },
    { name: 'view_monitoring', label: 'View Monitoring', category: 'System' },
    { name: 'manage_resources', label: 'Manage Resources', category: 'System' },
    { name: 'view_billing', label: 'View Billing', category: 'Finance' },
    { name: 'manage_budget', label: 'Manage Budget', category: 'Finance' },
    { name: 'approve_expenses', label: 'Approve Expenses', category: 'Finance' },
    { name: 'view_reports', label: 'View Reports', category: 'Reports' },
    { name: 'generate_reports', label: 'Generate Reports', category: 'Reports' },
    { name: 'export_data', label: 'Export Data', category: 'Data Management' }
];

export const defaultRoleTemplates = [
    {
        name: 'Administrator',
        code: 'admin',
        description: 'Full system access',
        permissions: availablePermissions.map(p => p.name)
    },
    {
        name: 'Data Scientist',
        code: 'ds',
        description: 'Access to AI/ML operations',
        permissions: [
            'view_dashboard', 'view_ai_catalog', 'create_model', 'deploy_model',
            'view_data', 'upload_data', 'modify_data', 'view_monitoring', 'view_reports'
        ]
    },
    {
        name: 'Operations',
        code: 'ops',
        description: 'System operations and monitoring',
        permissions: [
            'view_dashboard', 'view_logs', 'view_monitoring', 'manage_resources',
            'view_reports', 'view_data'
        ]
    },
    {
        name: 'Business User',
        code: 'biz',
        description: 'Business analytics and reporting',
        permissions: [
            'view_dashboard', 'view_reports', 'generate_reports', 'export_data',
            'view_billing'
        ]
    },
    {
        name: 'Dashboard Admin',
        code: 'dashboard_admin',
        description: 'Dashboard configuration access',
        permissions: [
            'view_dashboard', 'view_users', 'view_roles', 'assign_menu',
            'view_reports', 'view_monitoring'
        ]
    }
];