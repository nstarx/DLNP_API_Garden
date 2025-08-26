export const mockAgentTypes = [
    { label: 'Research Assistant', value: 'research' },
    { label: 'Customer Support', value: 'support' },
    { label: 'Data Analyst', value: 'analyst' },
    { label: 'Content Creator', value: 'creator' },
    { label: 'Document Processor', value: 'processor' }
];

export const mockSystemPrompts = [
    {
        id: 1,
        agentName: 'Research Assistant System',
        agentType: 'Research Assistant',
        agentIcon: 'pi pi-search-plus',
        promptType: 'System',
        lastModified: '2 days ago',
        version: 'v1.2.3',
        status: 'Active',
        content: 'You are a research assistant specialized in analyzing academic papers and generating comprehensive summaries. Your role is to help users understand complex research topics by breaking them down into digestible insights.'
    },
    {
        id: 2,
        agentName: 'Customer Support Network',
        agentType: 'Customer Support',
        agentIcon: 'pi pi-comments',
        promptType: 'System',
        lastModified: '1 week ago',
        version: 'v2.0.1',
        status: 'Active',
        content: 'You are a helpful customer support agent. Your goal is to assist customers with their inquiries in a friendly, professional manner. Always be empathetic and provide clear, actionable solutions.'
    },
    {
        id: 3,
        agentName: 'Data Processing Pipeline',
        agentType: 'Data Analyst',
        agentIcon: 'pi pi-chart-bar',
        promptType: 'System',
        lastModified: '3 days ago',
        version: 'v0.9.5',
        status: 'Draft',
        content: 'You are a data analyst AI that processes and analyzes large datasets. Focus on identifying patterns, trends, and insights that can drive business decisions.'
    },
    {
        id: 4,
        agentName: 'Creative Content Generator',
        agentType: 'Content Creator',
        agentIcon: 'pi pi-palette',
        promptType: 'System',
        lastModified: '5 days ago',
        version: 'v1.8.0',
        status: 'Active',
        content: 'You are a creative content generation AI. Your task is to help users create engaging, original content for various platforms. Be creative, but maintain accuracy and relevance.'
    },
    {
        id: 5,
        agentName: 'Document Analysis Engine',
        agentType: 'Document Processor',
        agentIcon: 'pi pi-file-text',
        promptType: 'System',
        lastModified: '1 day ago',
        version: 'v3.1.2',
        status: 'Active',
        content: 'You are a document processing AI specialized in extracting, analyzing, and organizing information from various document formats. Ensure accuracy in data extraction and maintain document structure.'
    }
];

export const mockPromptTemplates = [
    {
        id: 1,
        name: 'Research Paper Analysis',
        category: 'Research',
        description: 'Template for analyzing academic research papers',
        template: 'Analyze the following research paper:\n\nTitle: {title}\nAuthors: {authors}\n\nPlease provide:\n1. Key findings\n2. Methodology used\n3. Implications\n4. Limitations'
    },
    {
        id: 2,
        name: 'Customer Issue Resolution',
        category: 'Support',
        description: 'Template for resolving customer support issues',
        template: 'Customer Issue:\n{issue_description}\n\nCustomer History:\n{history}\n\nPlease provide a solution that addresses the issue while maintaining customer satisfaction.'
    },
    {
        id: 3,
        name: 'Data Analysis Report',
        category: 'Analytics',
        description: 'Template for generating data analysis reports',
        template: 'Dataset: {dataset_name}\nPeriod: {time_period}\n\nAnalyze the data and provide:\n1. Key metrics\n2. Trends observed\n3. Anomalies detected\n4. Recommendations'
    }
];

export const mockPromptHistory = [
    {
        id: 1,
        promptId: 1,
        agentName: 'Research Assistant System',
        version: 'v1.2.2',
        modifiedBy: 'Adrian',
        modifiedDate: '2024-01-10',
        changes: 'Updated context handling for research papers',
        content: 'Previous version of the research assistant prompt...'
    },
    {
        id: 2,
        promptId: 1,
        agentName: 'Research Assistant System',
        version: 'v1.2.1',
        modifiedBy: 'Adrian',
        modifiedDate: '2024-01-08',
        changes: 'Added citation formatting guidelines',
        content: 'Earlier version of the research assistant prompt...'
    },
    {
        id: 3,
        promptId: 2,
        agentName: 'Customer Support Network',
        version: 'v2.0.0',
        modifiedBy: 'Adrian',
        modifiedDate: '2024-01-05',
        changes: 'Major update to support workflow',
        content: 'Previous major version of customer support prompt...'
    }
];