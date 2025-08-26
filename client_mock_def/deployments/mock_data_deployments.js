export const mockColumnOptions = [
    { label: 'Deployment Name', value: 'deploymentName' },
    { label: 'Version', value: 'activeVersion' },
    { label: 'Cloud', value: 'cloudProvider' },
    { label: 'Region', value: 'region' },
    { label: 'AI Zone', value: 'aiZoneId' },
    { label: 'Project', value: 'projectId' },
    { label: 'Access Level', value: 'accessControl' },
    { label: 'Endpoint', value: 'endpoint' },
    { label: 'Status', value: 'status' },
    { label: 'Artifacts', value: 'artifacts' },
    { label: 'Actions', value: 'actions' }
];

export const mockCloudOptions = [
    { label: 'AWS', value: 'AWS' },
    { label: 'Azure', value: 'AZURE' },
    { label: 'Google Cloud', value: 'GCP' }
];

export const mockEnvironmentOptions = [
    { label: 'Production', value: 'production' },
    { label: 'Staging', value: 'staging' },
    { label: 'Development', value: 'development' }
];

export const mockStatusOptions = [
    { label: 'Running', value: 'running' },
    { label: 'Stopped', value: 'stopped' },
    { label: 'Processing', value: 'processing' }
];

export const mockArtifactTypeOptions = [
    { label: 'Model', value: 'model' },
    { label: 'API', value: 'api' },
    { label: 'Client', value: 'client' },
    { label: 'Server', value: 'server' },
    { label: 'Indexer', value: 'indexer' },
    { label: 'Retriever', value: 'retriever' },
    { label: 'Other', value: 'other' }
];

export const mockDeploymentData = {
    deploymentName: '',
    activeVersion: '',
    sourceAndArtifacts: '',
    workspace: '',
    endpoint: '',
    baseUrl: '',
    cost: '',
    cloudProvider: undefined,
    region: '',
    kubernetesCluster: '',
    namespace: '',
    status: 'stopped',
    deploymentSource: 'direct',
    helmChartUrl: '',
    githubRepoUrl: '',
    artifacts: []
};

export const mockK8sStats = {
    pods: 0,
    services: 0,
    deployments: 0,
    replicaSets: 0,
    configMaps: 0,
    secrets: 0,
    persistentVolumes: 0,
    persistentVolumeClaims: 0,
    cpu: '0 cores',
    memory: '0 GB',
    storage: '0 GB'
};