export const sdlcPhases = [
    {
        id: 'requirements',
        name: 'Requirements',
        description: 'Define business requirements and technical specifications',
        status: 'active',
        progress: 100,
        stages: [
            { id: 'gathering', name: 'Requirements Gathering', status: 'completed', assignee: 'Business Analyst' },
            { id: 'analysis', name: 'Requirements Analysis', status: 'completed', assignee: 'Tech Lead' },
            { id: 'documentation', name: 'Documentation', status: 'completed', assignee: 'Technical Writer' }
        ],
        approvalGate: {
            status: 'approved',
            approvers: ['Product Owner', 'Technical Lead'],
            approvedBy: 'Adrian',
            approvedDate: '2024-01-15',
            comments: 'Requirements meet business objectives'
        }
    },
export const qualityMetrics = [
    {
        id: 'code_quality',
        name: 'Code Quality',
        score: 85,
        threshold: 80,
        status: 'passed',
        details: {
            coverage: 87,
            complexity: 'Low',
            duplication: 2.3,
            issues: 12
        }
    },
export const approvalWorkflow = [
    {
        id: 'review',
        name: 'Technical Review',
        status: 'completed',
        reviewer: 'Adrian',
        date: '2024-01-18',
        comments: 'Code meets technical standards',
        checkItems: [
            { name: 'Code Standards', status: 'passed' },
            { name: 'Documentation', status: 'passed' },
            { name: 'Test Coverage', status: 'passed' }
        ]
    },
export const riskAssessment = [
    {
        id: 'risk1',
        category: 'Technical',
        description: 'Legacy system integration complexity',
        impact: 'High',
        probability: 'Medium',
        mitigation: 'Implement adapter pattern and thorough testing',
        status: 'Mitigated'
    },
export const complianceChecklist = [
    { id: 'gdpr', name: 'GDPR Compliance', status: 'compliant', lastAudit: '2024-01-10' },