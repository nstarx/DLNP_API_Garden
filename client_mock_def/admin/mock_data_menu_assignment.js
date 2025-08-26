export const menuTypes = [
    { name: 'ds', label: 'Data Science Menu' },
    { name: 'ops', label: 'Operations Menu' },
    { name: 'biz', label: 'Business Menu' },
    { name: 'dashboard_admin', label: 'Dashboard Admin Menu' }
];

export const dsMenuItems = [
    {
        id: 1,
        label: 'AI Catalog',
        icon: 'pi pi-database',
        path: '/ai-catalog',
        roles: ['admin', 'ds']
    },
    {
        id: 2,
        label: 'AI Workbench',
        icon: 'pi pi-desktop',
        path: '/ai-workbench',
        roles: ['admin', 'ds']
    },
    {
        id: 3,
        label: 'Federated Learning',
        icon: 'pi pi-globe',
        path: '/fl',
        roles: ['admin', 'ds']
    },
    {
        id: 4,
        label: 'Agentic AI',
        icon: 'pi pi-cog',
        path: '/agentic-ai',
        roles: ['admin', 'ds']
    },
    {
        id: 5,
        label: 'LLM Models',
        icon: 'pi pi-sparkles',
        path: '/llmModels',
        roles: ['admin', 'ds']
    },
    {
        id: 6,
        label: 'RAG Chat',
        icon: 'pi pi-comments',
        path: '/rag-chat',
        roles: ['admin', 'ds', 'biz']
    },
    {
        id: 7,
        label: 'WorkFlows',
        icon: 'pi pi-share-alt',
        path: '/workflows',
        roles: ['admin', 'ds']
    },
    {
        id: 8,
        label: 'Datasets',
        icon: 'pi pi-database',
        path: '/datasets',
        roles: ['admin', 'ds']
    },
    {
        id: 9,
        label: 'SQL Lab',
        icon: 'pi pi-search',
        path: '/sql-lab',
        roles: ['admin', 'ds']
    }
];

export const opsMenuItems = [
    {
        id: 1,
        label: 'AI Zones',
        icon: 'pi pi-microchip-ai',
        path: '/ai-zone-dashboard',
        roles: ['admin', 'ops']
    },
    {
        id: 2,
        label: 'Monitoring',
        icon: 'pi pi-chart-bar',
        path: '/monitoring',
        roles: ['admin', 'ops']
    },
    {
        id: 3,
        label: 'Deployments',
        icon: 'pi pi-objects-column',
        path: '/deployments',
        roles: ['admin', 'ds', 'ops']
    },
    {
        id: 4,
        label: 'Security',
        icon: 'pi pi-shield',
        path: '/security2',
        roles: ['admin', 'ops']
    },
    {
        id: 5,
        label: 'Connections',
        icon: 'pi pi-sitemap',
        path: '/connections',
        roles: ['admin', 'ops']
    },
    {
        id: 6,
        label: 'Cost Center',
        icon: 'pi pi-dollar',
        path: '/dashboard-sales',
        roles: ['admin', 'ops']
    },
    {
        id: 7,
        label: 'CI/CD',
        icon: 'pi pi-circle',
        path: '/cicd-ui',
        roles: ['admin', 'ops']
    },
    {
        id: 8,
        label: 'About',
        icon: 'pi pi-info-circle',
        path: '/about',
        roles: ['admin', 'ops', 'ds', 'biz', 'dashboard_admin']
    },
    {
        id: 9,
        label: 'Admin Dashboard',
        icon: 'pi pi-cog',
        path: '/admin',
        roles: ['admin', 'dashboard_admin']
    }
];

export const bizMenuItems = [
    {
        id: 1,
        label: 'AI Catalog',
        icon: 'pi pi-database',
        path: '/ai-catalog',
        roles: ['admin', 'biz']
    },
    {
        id: 2,
        label: 'Document Browser',
        icon: 'pi pi-folder',
        path: '/document-browser',
        roles: ['admin', 'biz']
    },
    {
        id: 3,
        label: 'All Files',
        icon: 'pi pi-file',
        path: '/all-files',
        roles: ['admin', 'biz']
    },
    {
        id: 4,
        label: 'Uploads',
        icon: 'pi pi-upload',
        path: '/uploads',
        roles: ['admin', 'biz']
    },
    {
        id: 5,
        label: 'Departments',
        icon: 'pi pi-building',
        path: '/departments',
        roles: ['admin', 'biz']
    },
    {
        id: 6,
        label: 'Query History',
        icon: 'pi pi-history',
        path: '/query-history',
        roles: ['admin', 'biz']
    },
    {
        id: 7,
        label: 'Insights',
        icon: 'pi pi-chart-line',
        path: '/insights',
        roles: ['admin', 'biz']
    },
    {
        id: 8,
        label: 'RAG Chat',
        icon: 'pi pi-comments',
        path: '/rag-chat',
        roles: ['admin', 'biz', 'ds']
    }
];

export const dashboardAdminMenuItems = [
    {
        id: 1,
        label: 'Admin Dashboard',
        icon: 'pi pi-cog',
        path: '/admin',
        roles: ['admin', 'dashboard_admin']
    },
    {
        id: 2,
        label: 'About',
        icon: 'pi pi-info-circle',
        path: '/about',
        roles: ['admin', 'ops', 'ds', 'biz', 'dashboard_admin']
    }
];