export const mockRoles = [
    { name: 'ds', label: 'Data Science', description: 'Access to AI models, pipelines, and deployments' },
    { name: 'ops', label: 'Operations', description: 'Access to system monitoring and resource management' },
    { name: 'biz', label: 'Business', description: 'Access to documents and business analytics' },
    {
        name: 'admin',
        label: 'Administrator',
        description: 'Full access to all system features including user management'
    },
    {
        name: 'dashboard_admin',
        label: 'Dashboard Admin',
        description: 'Manages users and has access to about information'
    }
];

export const mockUsers = [
    {
        id: 1,
        name: 'Adrian',
        email: 'adrian@nstarxinc.com',
        country: {
            name: 'Romania',
            code: 'ro'
        },
        company: 'DLNP Tech',
        date: '2023-01-15',
        status: 'qualified',
        verified: true,
        activity: 85,
        representative: {
            name: 'admin',
            image: 'amyelsner.png'
        },
        balance: 75000,
        roles: ['admin', 'ds', 'ops', 'biz']
    },
    {
        id: 2,
        name: 'Sai',
        email: 'Sai@nstarxinc.com',
        country: {
            name: 'India',
            code: 'in'
        },
        company: 'DLNP Tech',
        date: '2023-02-20',
        status: 'qualified',
        verified: true,
        activity: 78,
        representative: {
            name: 'admin',
            image: 'asiyajavayant.png'
        },
        balance: 68000,
        roles: ['ds', 'ops']
    },
    {
        id: 3,
        name: 'Suresh',
        email: 'suresh@nstarxinc.com',
        country: {
            name: 'India',
            code: 'in'
        },
        company: 'DLNP Tech',
        date: '2023-03-10',
        status: 'qualified',
        verified: true,
        activity: 72,
        representative: {
            name: 'admin',
            image: 'xuxuefeng.png'
        },
        balance: 65000,
        roles: ['ds']
    },
    {
        id: 4,
        name: 'Suman',
        email: 'suman@nstarxinc.com',
        country: {
            name: 'United States',
            code: 'us'
        },
        company: 'DLNP Tech',
        date: '2023-04-05',
        status: 'qualified',
        verified: true,
        activity: 68,
        representative: {
            name: 'admin',
            image: 'ionibowcher.png'
        },
        balance: 62000,
        roles: ['biz']
    },
    {
        id: 5,
        name: 'Sujay',
        email: 'sujay@nstarxinc.com',
        country: {
            name: 'United States',
            code: 'us'
        },
        company: 'DLNP Tech',
        date: '2023-05-12',
        status: 'qualified',
        verified: true,
        activity: 75,
        representative: {
            name: 'admin',
            image: 'stephenshaw.png'
        },
        balance: 70000,
        roles: ['ops', 'biz']
    }
];

export const mockTabInfo = [
    {
        name: 'User Management',
        icon: 'pi pi-users',
        description: 'Add, edit, and manage user accounts and their role assignments'
    },
    {
        name: 'Role Management',
        icon: 'pi pi-shield',
        description: 'Create and configure roles with specific permissions'
    },
    {
        name: 'Menu Assignment',
        icon: 'pi pi-sitemap',
        description: 'Assign menu access permissions to different user roles'
    },
    {
        name: 'Project Management',
        icon: 'pi pi-briefcase',
        description: 'Manage projects and team assignments'
    }
];