export const systemMetrics = [
    { id: 1, name: 'CPU Usage', value: '45%', status: 'Normal', trend: 'stable', lastUpdated: '2023-07-15T10:30:00' },
    { id: 2, name: 'Memory Usage', value: '62%', status: 'Normal', trend: 'increasing', lastUpdated: '2024-07-15T10:30:00' },
    { id: 3, name: 'Storage Usage', value: '78%', status: 'Warning', trend: 'increasing', lastUpdated: '2024-07-16T10:35:00' },
    { id: 4, name: 'Network Throughput', value: '1.2 GB/s', status: 'Normal', trend: 'stable', lastUpdated: '2025-01-11T11:37:00' },
    { id: 5, name: 'API Response Time', value: '120ms', status: 'Normal', trend: 'decreasing', lastUpdated: '2024-11-19T15:36:00' }
];

export const securityAlerts = [
    { id: 1, type: 'Authentication Failure', severity: 'High', source: 'User Login', timestamp: '2024-07-09T08:47:00', status: 'Open' },
    { id: 2, type: 'Unusual Access Pattern', severity: 'Medium', source: 'API Gateway', timestamp: '2024-07-14T12:40:00', status: 'Investigating' },
    { id: 3, type: 'Permission Change', severity: 'Low', source: 'User Management', timestamp: '2025-01-13T10:20:00', status: 'Resolved' },
    { id: 4, type: 'Data Access Attempt', severity: 'High', source: 'Database', timestamp: '2024-12-12T12:15:00', status: 'Resolved' },
    { id: 5, type: 'Configuration Change', severity: 'Medium', source: 'System Settings', timestamp: '2025-11-10T13:50:00', status: 'Resolved' }
];

export const deploymentStatus = [
    { id: 1, name: 'Production API Gateway', status: 'Healthy', uptime: '99.99%', lastDeployed: '2024-10-20T16:46:00', version: 'v2.3.1' },
    { id: 2, name: 'Staging Environment', status: 'Healthy', uptime: '99.95%', lastDeployed: '2024-11-24T17:55:00', version: 'v2.4.0-rc1' },
    { id: 3, name: 'Development Environment', status: 'Degraded', uptime: '98.50%', lastDeployed: '2024-09-25T11:45:00', version: 'v2.4.0-dev' },
    { id: 4, name: 'Authentication Service', status: 'Healthy', uptime: '99.97%', lastDeployed: '2024-12-08T10:15:00', version: 'v1.8.2' },
    { id: 5, name: 'Data Processing Pipeline', status: 'Healthy', uptime: '99.90%', lastDeployed: '2025-02-12T14:20:00', version: 'v3.1.0' }
];

export const userActivityData = [
    { id: 1, user: 'John Doe', action: 'Login', resource: 'Dashboard', timestamp: '2025-01-11T11:43:00', status: 'Success' },
    { id: 2, user: 'Sai Khanna', action: 'Data Access', resource: 'Customer Database', timestamp: '2025-04-15T19:25:00', status: 'Success' },
    { id: 3, user: 'Suresh Kondapuram', action: 'Configuration Change', resource: 'Security Settings', timestamp: '2025-09-27T08:45:00', status: 'Success' },
    { id: 4, user: 'Adrian Paleacu', action: 'API Call', resource: 'External Service', timestamp: '2025-01-19T13:20:00', status: 'Failed' },
    { id: 5, user: 'Raju Pasunuri', action: 'Deployment', resource: 'Production Environment', timestamp: '2024-05-10T19:50:00', status: 'Success' }
];

export const documents = [
    { id: 1, name: 'Q2 Financial Report', type: 'PDF', department: 'Finance', uploadedAt: '2024-11-21T20:20:00', uploadedBy: 'Adrian', size: '2.4 MB', status: 'Indexed' },
    { id: 2, name: 'Marketing Strategy 2023', type: 'DOCX', department: 'Marketing', uploadedAt: '2024-05-11T12:45:00', uploadedBy: 'Emily Johnson', size: '1.8 MB', status: 'Indexed' },
    { id: 3, name: 'HR Policy Update', type: 'PDF', department: 'Human Resources', uploadedAt: '2024-01-25T09:55:00', uploadedBy: 'Michael Brown', size: '3.2 MB', status: 'Indexed' },
    { id: 4, name: 'Product Roadmap', type: 'PPTX', department: 'Product', uploadedAt: '2025-02-18T17:32:00', uploadedBy: 'Sarah Davis', size: '5.7 MB', status: 'Processing' },
    { id: 5, name: 'Customer Feedback Analysis', type: 'XLSX', department: 'Customer Success', uploadedAt: '2025-03-28T08:35:00', uploadedBy: 'David Wilson', size: '1.2 MB', status: 'Indexed' }
];

export const insights = [
    { id: 1, name: 'Revenue Trend Analysis', type: 'Chart', createdAt: '2025-04-14T13:25:00', createdBy: 'Adrian', department: 'Finance', status: 'Updated' },
    { id: 2, name: 'Customer Satisfaction Metrics', type: 'Dashboard', createdAt: '2025-03-29T10:15:00', createdBy: 'Emily Johnson', department: 'Customer Success', status: 'Updated' },
    { id: 3, name: 'Employee Turnover Report', type: 'Report', createdAt: '2025-02-12T15:40:00', createdBy: 'Michael Brown', department: 'Human Resources', status: 'Scheduled' },
    { id: 4, name: 'Market Share Analysis', type: 'Chart', createdAt: '2024-05-11T09:30:00', createdBy: 'Sarah Davis', department: 'Marketing', status: 'Updated' },
    { id: 5, name: 'Product Usage Statistics', type: 'Dashboard', createdAt: '2024-02-17T14:20:00', createdBy: 'David Wilson', department: 'Product', status: 'Scheduled' }
];

export const queryHistory = [
    { id: 1, query: 'What were our Q2 financial results?', timestamp: '2024-04-15T11:30:00', user: 'Raju Pasunuri', documents: 3, status: 'Completed' },
    { id: 2, query: 'Show me the latest marketing campaign performance', timestamp: '2024-03-14T14:45:00', user: 'Suresh Kondapuram', documents: 5, status: 'Completed' },
    { id: 3, query: 'What are the current HR policies for remote work?', timestamp: '2025-01-18T09:15:00', user: 'Adrian Paleacu', documents: 2, status: 'Completed' },
    { id: 4, query: 'When is the next product release scheduled?', timestamp: '2025-02-22T16:20:00', user: 'Sai Khanna', documents: 4, status: 'Completed' },
    { id: 5, query: 'What is our customer satisfaction score trend?', timestamp: '2023-04-11T11:10:00', user: 'Sai Khanna', documents: 6, status: 'Completed' }
];
