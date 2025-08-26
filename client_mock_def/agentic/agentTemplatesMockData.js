// Mock data for Agent Templates

export const agentTemplates = [
    {
        id: 1,
        name: 'Research Assistant',
        icon: 'pi pi-search-plus',
        category: 'Knowledge Processing',
        tags: [
            { label: 'Knowledge Processing', severity: 'info' },
            { label: 'Information Retrieval', severity: 'success' }
        ],
        description: 'An agent that can search, analyze, and synthesize information from multiple sources. Perfect for research tasks, literature reviews, and knowledge discovery.',
        popularity: 5,
        lastUpdated: '2 days ago',
        usageCount: 1245
    },
    {
        id: 2,
        name: 'Data Analyst',
        icon: 'pi pi-chart-bar',
        category: 'Data Analysis',
        tags: [
            { label: 'Data Processing', severity: 'info' },
            { label: 'Visualization', severity: 'warning' }
        ],
        description: 'An agent specialized in data analysis, pattern recognition, and visualization. Can process large datasets and generate insights automatically.',
        popularity: 4,
        lastUpdated: '1 week ago',
        usageCount: 876
    },
    {
        id: 3,
        name: 'Customer Support',
        icon: 'pi pi-comments',
        category: 'Communication',
        tags: [
            { label: 'Conversation', severity: 'info' },
            { label: 'Knowledge Base', severity: 'danger' }
        ],
        description: 'A multi-agent system that handles customer inquiries, routes complex issues to specialists, and learns from interactions to improve over time.',
        popularity: 4,
        lastUpdated: '3 days ago',
        usageCount: 1032
    },
    {
        id: 4,
        name: 'Document Processor',
        icon: 'pi pi-file',
        category: 'Knowledge Processing',
        tags: [
            { label: 'Document Analysis', severity: 'info' },
            { label: 'Text Extraction', severity: 'success' }
        ],
        description: 'Extracts, categorizes, and summarizes information from various document formats. Ideal for contract analysis, document review, and information extraction.',
        popularity: 3,
        lastUpdated: '1 month ago',
        usageCount: 543
    },
    {
        id: 5,
        name: 'Workflow Automator',
        icon: 'pi pi-cog',
        category: 'Automation',
        tags: [
            { label: 'Automation', severity: 'warning' },
            { label: 'Workflow', severity: 'info' }
        ],
        description: 'Automates complex business processes by coordinating multiple tasks and systems. Can be configured to handle approvals, notifications, and data transfers.',
        popularity: 5,
        lastUpdated: '5 days ago',
        usageCount: 987
    },
    {
        id: 6,
        name: 'Integration Hub',
        icon: 'pi pi-link',
        category: 'Integration',
        tags: [
            { label: 'API', severity: 'info' },
            { label: 'Integration', severity: 'success' }
        ],
        description: 'Connects different systems and services through a unified interface. Handles data transformation, authentication, and error handling.',
        popularity: 4,
        lastUpdated: '2 weeks ago',
        usageCount: 765
    }
];

export const categories = [
    { name: 'Knowledge Processing', icon: 'pi pi-book' },
    { name: 'Data Analysis', icon: 'pi pi-chart-bar' },
    { name: 'Communication', icon: 'pi pi-comments' },
    { name: 'Automation', icon: 'pi pi-cog' },
    { name: 'Integration', icon: 'pi pi-link' }
];

export const sortOptions = [
    { name: 'Popularity', value: 'popularity', direction: 'desc' },
    { name: 'Name (A-Z)', value: 'name', direction: 'asc' },
    { name: 'Name (Z-A)', value: 'name', direction: 'desc' },
    { name: 'Newest', value: 'lastUpdated', direction: 'desc' },
    { name: 'Most Used', value: 'usageCount', direction: 'desc' }
];
