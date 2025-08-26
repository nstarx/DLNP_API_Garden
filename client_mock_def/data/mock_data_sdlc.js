export const sdlcDashboardMetrics = {
    overall: {
        totalProjects: 15,
        activeProjects: 8,
        completedProjects: 5,
        onHoldProjects: 2,
        averageCycleTime: '4 days',
        successRate: 87,
        blockedItems: 3,
        pendingApprovals: 7
    },
    phaseMetrics: {
        requirements: { active: 3, avgDuration: '7 days', efficiency: 92 },
        design: { active: 2, avgDuration: '10 days', efficiency: 85 },
        development: { active: 4, avgDuration: '21 days', efficiency: 78 },
        testing: { active: 2, avgDuration: '14 days', efficiency: 90 },
        deployment: { active: 1, avgDuration: '3 days', efficiency: 95 },
        maintenance: { active: 3, avgDuration: 'Ongoing', efficiency: 88 }
    },
    teamPerformance: {
        velocity: 85,
        quality: 92,
        collaboration: 88,
        deliveryRate: 91
    }
};
export const projectTimeline = [
    {
        id: 'milestone1',
        title: 'Project Kickoff',
        date: '2024-01-01',
        status: 'completed',
        description: 'Initial project setup and team formation'
    },
export const activityLog = [
    {
        id: 'act1',
        timestamp: '2024-01-20 14:30:00',
        user: 'Adrian',
        action: 'approved',
        phase: 'Requirements',
        description: 'Approved requirements specification document',
        icon: 'pi-check-circle',
        type: 'success'
    },
export const dependencyMatrix = [
    {
        id: 'dep1',
        source: 'Requirements',
        target: 'Design',
        type: 'blocking',
        status: 'resolved',
        description: 'Design cannot start without approved requirements'
    },
export const resourceAllocation = [
    {
        id: 'res1',
        phase: 'Requirements',
        resources: [
            { name: 'Adrian', role: 'Business Analyst', allocation: 100, availability: 'Full-time' },
            { name: 'Adrian', role: 'Product Owner', allocation: 50, availability: 'Part-time' }
        ],
        totalHours: 120,
        utilization: 85
    },
export const documentRepository = [
    {
        id: 'doc1',
        name: 'Requirements Specification v2.0',
        type: 'Requirements',
        phase: 'requirements',
        version: '2.0',
        author: 'Adrian',
        lastModified: '2024-01-15',
        status: 'Approved',
        size: '2.4 MB',
        icon: 'pi-file-pdf'
    },
export const communicationChannels = [
    {
        id: 'ch1',
        name: 'Project Slack',
        type: 'slack',
        status: 'active',
        members: 15,
        lastActivity: '5 minutes ago',
        unreadMessages: 3
    },
export const issuesAndBlockers = [
    {
        id: 'issue1',
        title: 'API Authentication Design Pending',
        severity: 'high',
        phase: 'design',
        assignee: 'Adrian',
        status: 'open',
        createdDate: '2024-01-18',
        dueDate: '2024-01-22',
        description: 'Need to finalize OAuth 2.0 implementation details',
        impact: 'Blocking backend development start'
    },
export const changeRequests = [
    {
        id: 'cr1',
        title: 'Add Multi-factor Authentication',
        requestor: 'Mike Chen',
        priority: 'high',
        status: 'approved',
        impact: 'medium',
        effort: '40 hours',
        approvedBy: 'Adrian',
        approvalDate: '2024-01-19',
        targetPhase: 'development',
        description: 'Implement MFA for enhanced security'
    },
export const metricsAndKPIs = {
    velocity: {
        current: 32,
        average: 28,
        trend: 'up',
        unit: 'story points/sprint'
    },
    defectRate: {
        current: 2.3,
        target: 3.0,
        trend: 'down',
        unit: 'defects per KLOC'
    },
    codeQuality: {
        coverage: 85,
        complexity: 12,
        duplication: 3.2,
        techDebt: '120 hours'
    },
    scheduleAdherence: {
        onTime: 78,
        delayed: 15,
        ahead: 7,
        unit: '%'
    },
    budgetUtilization: {
        spent: 2,
        allocated: 30,
        remaining: 55,
        burnRate: 'normal'
    }
};
export const trainingAndOnboarding = [
    {
        id: 'train1',
        title: 'System Overview',
        type: 'documentation',
        status: 'completed',
        completedBy: ['Adrian', 'Adrian', 'Mike Chen'],
        duration: '2 hours',
        mandatory: true
    },
export const integrationPoints = [
    {
        id: 'int1',
        system: 'SAP ERP',
        type: 'REST API',
        status: 'configured',
        environment: 'production',
        lastTested: '2024-01-18',
        healthStatus: 'healthy'
    },
export const testingMetrics = {
    testCases: {
        total: 250,
        automated: 180,
        manual: 70,
        executed: 145,
        passed: 132,
        failed: 8,
        blocked: 5
    },
    coverage: {
        unit: 85,
        integration: 72,
        e2e: 45,
        performance: 30,
        security: 60
    },
    defects: {
        critical: 2,
        high: 5,
        medium: 12,
        low: 23,
        resolved: 35,
        open: 7
    },
    environments: [
        { name: 'Dev', status: 'active', version: '1.2.0', lastDeployed: '2024-01-20' },
        { name: 'QA', status: 'active', version: '1.1.5', lastDeployed: '2024-01-18' },
        { name: 'Staging', status: 'preparing', version: '1.1.0', lastDeployed: '2024-01-15' },
        { name: 'Production', status: 'stable', version: '1.0.0', lastDeployed: '2023-12-15' }
    ]
};