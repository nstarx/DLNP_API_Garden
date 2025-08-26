// Functions for CI/CD Pipelines
import { computed } from 'vue';
import { deploymentStatus, pipelineRuns } from './cicdPipelinesData';

// Status and environment functions
export const getPipelineStatusSeverity = (status) => {
    switch (status) {
        case 'Completed':
            return 'success';
        case 'Failed':
            return 'danger';
        case 'In Progress':
            return 'info';
        case 'Queued':
            return 'warning';
        default:
            return 'secondary';
    }
};

export const getEnvironmentIconClass = (env) => {
    const status = deploymentStatus[env].status;
    if (status.includes('deployed')) {
        return 'bg-green-100';
    } else if (status.includes('deploying')) {
        return 'bg-blue-100';
    } else if (status.includes('awaiting')) {
        return 'bg-orange-100';
    } else {
        return 'bg-gray-100';
    }
};

export const getEnvironmentIcon = (env) => {
    const status = deploymentStatus[env].status;
    if (status.includes('deployed')) {
        return 'pi pi-check-circle text-green-600';
    } else if (status.includes('deploying')) {
        return 'pi pi-spinner pi-spin text-blue-600';
    } else if (status.includes('awaiting')) {
        return 'pi pi-clock text-orange-600';
    } else {
        return 'pi pi-info-circle text-gray-600';
    }
};

export const getTestResultSeverity = (status) => {
    switch (status) {
        case 'Passed':
            return 'success';
        case 'Failed':
            return 'danger';
        case 'Warning':
            return 'warning';
        default:
            return 'info';
    }
};

// Computed properties for deployment status
export const useDeploymentStatus = (selectedAgentForDeployment) => {
    const canDeployToDevelopment = computed(() => {
        return selectedAgentForDeployment.value !== null;
    });

    const canDeployToStaging = computed(() => {
        return selectedAgentForDeployment.value !== null && deploymentStatus.development.status.includes('deployed');
    });

    const canDeployToProduction = computed(() => {
        return selectedAgentForDeployment.value !== null && !deploymentStatus.production.status.includes('awaiting approval') && deploymentStatus.staging.status.includes('deployed');
    });

    return {
        canDeployToDevelopment,
        canDeployToStaging,
        canDeployToProduction
    };
};

// Action functions
export const viewPipelineDetails = (pipeline, toast) => {
    toast.add({
        severity: 'info',
        summary: 'Pipeline Details',
        detail: `Viewing details for ${pipeline.agentName} pipeline`,
        life: 3000
    });
};

export const runPipeline = (pipeline, toast) => {
    toast.add({
        severity: 'info',
        summary: 'Pipeline Started',
        detail: `Started pipeline for ${pipeline.agentName}`,
        life: 3000
    });

    const index = pipelineRuns.findIndex((p) => p.id === pipeline.id);
    if (index !== -1) {
        pipelineRuns[index].status = 'In Progress';
        pipelineRuns[index].lastRun = 'Just now';
    }
};

export const createNewPipeline = (toast) => {
    toast.add({
        severity: 'info',
        summary: 'New Pipeline',
        detail: 'Creating a new pipeline configuration',
        life: 3000
    });
};

export const runAllTests = (selectedAgentForTesting, isRunningTests, testResults, toast) => {
    if (!selectedAgentForTesting.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select an agent first', life: 3000 });
        return;
    }

    isRunningTests.value = true;
    toast.add({
        severity: 'info',
        summary: 'Tests Started',
        detail: `Running tests for ${selectedAgentForTesting.value.name}`,
        life: 3000
    });

    setTimeout(() => {
        testResults.value = {
            promptRegression: {
                progress: Math.floor(Math.random() * 30) + 70,
                label: `${Math.floor(Math.random() * 5) + 10}/15 Passing`,
                severity: Math.random() > 0.3 ? 'success' : 'warning'
            },
            responseQuality: {
                progress: Math.floor(Math.random() * 40) + 60,
                label: `${Math.floor(Math.random() * 3) + 7}/10 Passing`,
                severity: Math.random() > 0.5 ? 'success' : 'warning'
            },
            edgeCases: {
                progress: Math.floor(Math.random() * 20) + 80,
                label: `${Math.floor(Math.random() * 4) + 16}/20 Passing`,
                severity: Math.random() > 0.2 ? 'success' : 'warning'
            }
        };

        isRunningTests.value = false;
        toast.add({
            severity: 'success',
            summary: 'Tests Completed',
            detail: 'All tests have been executed',
            life: 3000
        });
    }, 2000);
};

export const startEvaluation = (selectedAgentForEvaluation, selectedVersionForEvaluation, selectedDataset, selectedMetrics, isRunningEvaluation, toast) => {
    if (!selectedAgentForEvaluation.value || !selectedVersionForEvaluation.value || !selectedDataset.value || selectedMetrics.value.length === 0) {
        toast.add({
            severity: 'warn',
            summary: 'Warning',
            detail: 'Please fill in all evaluation parameters',
            life: 3000
        });
        return;
    }

    isRunningEvaluation.value = true;
    toast.add({
        severity: 'info',
        summary: 'Evaluation Started',
        detail: `Evaluating ${selectedAgentForEvaluation.value.name} ${selectedVersionForEvaluation.value}`,
        life: 3000
    });

    setTimeout(() => {
        isRunningEvaluation.value = false;
        toast.add({
            severity: 'success',
            summary: 'Evaluation Completed',
            detail: 'Evaluation results are ready for review',
            life: 3000
        });
    }, 3000);
};

export const deployToDevelopment = (selectedAgentForDeployment, deploymentStatus, toast) => {
    if (!selectedAgentForDeployment.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select an agent to deploy', life: 3000 });
        return;
    }

    toast.add({
        severity: 'info',
        summary: 'Deployment Started',
        detail: `Deploying ${selectedAgentForDeployment.value.name} to Development`,
        life: 3000
    });

    setTimeout(() => {
        deploymentStatus.value.development.status = 'deployed just now';
        toast.add({
            severity: 'success',
            summary: 'Deployment Completed',
            detail: 'Successfully deployed to Development environment',
            life: 3000
        });
    }, 2000);
};

export const deployToStaging = (selectedAgentForDeployment, deploymentStatus, toast) => {
    if (!selectedAgentForDeployment.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select an agent to deploy', life: 3000 });
        return;
    }

    toast.add({
        severity: 'info',
        summary: 'Deployment Started',
        detail: `Deploying ${selectedAgentForDeployment.value.name} to Staging`,
        life: 3000
    });

    setTimeout(() => {
        deploymentStatus.value.staging.status = 'deployed just now';
        toast.add({
            severity: 'success',
            summary: 'Deployment Completed',
            detail: 'Successfully deployed to Staging environment',
            life: 3000
        });
    }, 3000);
};

export const deployToProduction = (selectedAgentForDeployment, deploymentStatus, toast) => {
    if (!selectedAgentForDeployment.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please select an agent to deploy', life: 3000 });
        return;
    }

    toast.add({
        severity: 'info',
        summary: 'Deployment Started',
        detail: `Deploying ${selectedAgentForDeployment.value.name} to Production`,
        life: 3000
    });

    setTimeout(() => {
        deploymentStatus.value.production.status = 'awaiting approval';
        toast.add({
            severity: 'info',
            summary: 'Approval Required',
            detail: 'Production deployment requires approval',
            life: 3000
        });
    }, 2000);
};

export const approveProductionDeployment = (deploymentStatus, toast) => {
    toast.add({
        severity: 'info',
        summary: 'Approval Granted',
        detail: 'Production deployment approved',
        life: 3000
    });

    setTimeout(() => {
        deploymentStatus.value.production.status = 'deployed just now';
        toast.add({
            severity: 'success',
            summary: 'Deployment Completed',
            detail: 'Successfully deployed to Production environment',
            life: 3000
        });
    }, 4000);
};

export const viewDeploymentHistory = (toast) => {
    toast.add({ severity: 'info', summary: 'Deployment History', detail: 'Viewing deployment history', life: 3000 });
};

export const savePipelineConfig = (toast) => {
    toast.add({
        severity: 'success',
        summary: 'Configuration Saved',
        detail: 'Pipeline configuration has been saved',
        life: 3000
    });
};

export const saveNewScenario = (newScenario, scenarioDialog, toast) => {
    if (!newScenario.value.name || !newScenario.value.description) {
        toast.add({
            severity: 'warn',
            summary: 'Validation Error',
            detail: 'Please provide a name and description',
            life: 3000
        });
        return;
    }

    toast.add({
        severity: 'success',
        summary: 'Scenario Created',
        detail: `New test scenario "${newScenario.value.name}" has been created`,
        life: 3000
    });

    // Reset form
    newScenario.value = {
        name: '',
        category: '',
        type: 'conversation',
        complexity: 'Medium',
        estimatedDuration: 15,
        description: ''
    };

    scenarioDialog.value = false;
};
