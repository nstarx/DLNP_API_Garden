export const adminDashboardMetrics = {
    users: {
        total: 156,
        active: 142,
        inactive: 14,
        newThisMonth: 8,
        growth: '+5.2%',
        distribution: {
            admin: 3,
            dataScientist: 45,
            operations: 38,
            business: 52,
            dashboardAdmin: 18
        }
    },
    roles: {
        total: 5,
        custom: 2,
        system: 3,
        mostUsed: 'Data Scientist',
        leastUsed: 'Dashboard Admin'
    },
    permissions: {
        total: 17,
        categories: 6,
        mostAssigned: 'view_dashboard',
        leastAssigned: 'delete_role',
        recentChanges: 3
    },
    activity: {
        loginsToday: 89,
        activeNow: 23,
        peakTime: '10:00 AM',
        avgSessionDuration: '45 minutes',
        topActions: [
            { action: 'View Dashboard', count: 1250 },
            { action: 'Access AI Catalog', count: 890 },
            { action: 'Run Deployment', count: 456 },
            { action: 'View Documents', count: 623 }
        ]
    },
    system: {
        uptime: '99.98%',
        lastBackup: '2024-01-20 03:00:00',
        nextMaintenance: '2024-02-01 02:00:00',
        version: '2.4.1',
        environment: 'Production'
    }
};

export const userActivityLog = [
    {
        id: 'log1',
        timestamp: '2024-01-20 14:45:23',
        user: 'Adrian',
        action: 'Login',
        details: 'Successful login from IP 192.168.1.100',
        status: 'success'
    },
    {
        id: 'log2',
        timestamp: '2024-01-20 14:30:15',
        user: 'Sai',
        action: 'Create Model',
        details: 'Created new AI model: Customer Churn Predictor',
        status: 'success'
    },
    {
        id: 'log3',
        timestamp: '2024-01-20 14:15:45',
        user: 'Suresh',
        action: 'Deploy',
        details: 'Deployed model to production environment',
        status: 'success'
    },
    {
        id: 'log4',
        timestamp: '2024-01-20 14:00:00',
        user: 'Suman',
        action: 'Access Denied',
        details: 'Attempted to access restricted area: Admin Settings',
        status: 'warning'
    },
    {
        id: 'log5',
        timestamp: '2024-01-20 13:45:30',
        user: 'Sujay',
        action: 'Export Data',
        details: 'Exported 5000 records from customer database',
        status: 'info'
    }
];

export const systemAlerts = [
    {
        id: 'alert1',
        severity: 'high',
        title: 'Security Update Required',
        message: 'Critical security patches available for 3 components',
        timestamp: '2024-01-20 12:00:00',
        status: 'active'
    },
    {
        id: 'alert2',
        severity: 'medium',
        title: 'Storage Usage Warning',
        message: 'Database storage at 85% capacity',
        timestamp: '2024-01-20 10:30:00',
        status: 'active'
    },
    {
        id: 'alert3',
        severity: 'low',
        title: 'Scheduled Maintenance',
        message: 'System maintenance scheduled for Feb 1, 2024',
        timestamp: '2024-01-19 09:00:00',
        status: 'acknowledged'
    }
];

export const accessControlMatrix = {
    modules: [
        {
            name: 'AI Catalog',
            admin: 'full',
            dataScientist: 'full',
            operations: 'read',
            business: 'read',
            dashboardAdmin: 'none'
        },
        {
            name: 'Deployments',
            admin: 'full',
            dataScientist: 'read',
            operations: 'full',
            business: 'none',
            dashboardAdmin: 'none'
        },
        {
            name: 'User Management',
            admin: 'full',
            dataScientist: 'none',
            operations: 'none',
            business: 'none',
            dashboardAdmin: 'full'
        },
        {
            name: 'Documents',
            admin: 'full',
            dataScientist: 'read',
            operations: 'read',
            business: 'full',
            dashboardAdmin: 'read'
        },
        {
            name: 'Monitoring',
            admin: 'full',
            dataScientist: 'read',
            operations: 'full',
            business: 'none',
            dashboardAdmin: 'read'
        }
    ]
};

export const adminQuickActions = [
    {
        id: 'qa1',
        title: 'Add New User',
        icon: 'pi pi-user-plus',
        path: '/admin/users/new',
        color: 'blue'
    },
    {
        id: 'qa2',
        title: 'Create Role',
        icon: 'pi pi-shield',
        path: '/admin/roles/new',
        color: 'green'
    },
    {
        id: 'qa3',
        title: 'View Audit Log',
        icon: 'pi pi-history',
        path: '/admin/audit',
        color: 'orange'
    },
    {
        id: 'qa4',
        title: 'System Settings',
        icon: 'pi pi-cog',
        path: '/admin/settings',
        color: 'purple'
    },
    {
        id: 'qa5',
        title: 'Backup Data',
        icon: 'pi pi-download',
        path: '/admin/backup',
        color: 'red'
    },
    {
        id: 'qa6',
        title: 'View Reports',
        icon: 'pi pi-chart-bar',
        path: '/admin/reports',
        color: 'teal'
    }
];

export const licenseInfo = {
    type: 'Enterprise',
    status: 'Active',
    expiryDate: '2024-12-31',
    seats: {
        total: 200,
        used: 156,
        available: 44
    },
    features: [
        { name: 'AI Catalog', status: 'enabled' },
        { name: 'Federated Learning', status: 'enabled' },
        { name: 'RAG Platform', status: 'enabled' },
        { name: 'Advanced Analytics', status: 'enabled' },
        { name: 'Custom Integrations', status: 'enabled' },
        { name: 'Priority Support', status: 'enabled' }
    ]
};

export const adminNotifications = [
    {
        id: 'notif1',
        type: 'info',
        title: 'New Feature Available',
        message: 'RAG Platform v2.0 is now available with enhanced capabilities',
        timestamp: '2024-01-20 14:00:00',
        read: false
    },
    {
        id: 'notif2',
        type: 'warning',
        title: 'License Renewal',
        message: 'Your enterprise license will expire in 345 days',
        timestamp: '2024-01-19 10:00:00',
        read: true
    },
    {
        id: 'notif3',
        type: 'success',
        title: 'Backup Completed',
        message: 'System backup completed successfully',
        timestamp: '2024-01-19 03:00:00',
        read: true
    }
];