export const stakeholders = [
    {
        id: 'sh1',
        name: 'Adrian',
        role: 'Product Owner',
        email: 'john.smith@company.com',
        department: 'Product Management',
        approvalAuthority: ['requirements', 'design', 'deployment'],
        avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff',
        status: 'available',
        responseTime: '2-4 hours'
    },
export const approvalTemplates = [
    {
        id: 'req_approval',
        name: 'Requirements Approval',
        subject: 'Requirements Review Request - [PROJECT_NAME]',
        body: `Dear [STAKEHOLDER_NAME],

We have completed the requirements gathering phase for [PROJECT_NAME] and need your approval to proceed to the design phase.

Phase Details:
- Current Phase: Requirements
- Completion: [COMPLETION_PERCENTAGE]%
- Documents: Requirements Specification Document attached
- Review Deadline: [DEADLINE]

Key Requirements:
[REQUIREMENTS_SUMMARY]

Please review the attached documentation and provide your approval or feedback.

Best regards,
[SENDER_NAME]`
    },
export const approvalHistory = [
    {
        id: 'ah1',
        phaseId: 'requirements',
        stakeholder: 'Adrian',
        action: 'approved',
        date: '2024-01-15 10:30',
        comments: 'Requirements look comprehensive. Approved to proceed.',
        duration: '2 hours'
    },
export const automationRules = [
    {
        id: 'rule1',
        name: 'Auto-request on phase completion',
        description: 'Automatically request approval when a phase reaches 100% completion',
        enabled: true,
        trigger: 'phase_complete',
        conditions: {
            completionPercentage: 100,
            allStagesComplete: true
        },
        actions: ['send_approval_request', 'notify_slack']
    },