export const sparkConfigurations = {
    appName: {
        default: 'python_spark_app',
        options: ['python_spark_app', 'spark_etl_job', 'spark_ml_job', 'spark_streaming_job']
    },
    k8sMasterUrl: {
        default: 'k8s://https://kubernetes.default.svc:443',
        options: ['k8s://https://kubernetes.default.svc:443', 'k8s://https://k8s-master:6443']
    },
    dynamicAllocation: {
        enabled: true,
        minExecutors: { default: 1, min: 1, max: 50 },
        maxExecutors: { default: 10, min: 1, max: 100 }
    },
    executorConfig: {
        memory: {
            default: '2g',
            options: ['1g', '2g', '4g', '8g', '16g', '32g']
        },
        cores: {
            default: 2,
            options: [1, 2, 4, 8, 16]
        },
        deleteOnTermination: false
    },
    driverConfig: {
        memory: {
            default: '1g',
            options: ['1g', '2g', '4g', '8g', '16g']
        },
        host: 'spark-driver',
        port: 37371,
        blockManagerPort: 6060,
        uiPort: 4040
    },
    deployMode: {
        default: 'cluster',
        options: ['cluster', 'client']
    },
    jarPackages: {
        default: 'org.apache.hadoop:hadoop-aws:3.2.0,com.amazonaws:aws-java-sdk-bundle:1.11.563',
        presets: [
            {
                name: 'AWS S3 Support',
                value: 'org.apache.hadoop:hadoop-aws:3.2.0,com.amazonaws:aws-java-sdk-bundle:1.11.563'
            },
            {
                name: 'Elasticsearch',
                value: 'org.elasticsearch:elasticsearch-spark-30_2.12:8.4.3'
            },
            {
                name: 'Kafka',
                value: 'org.apache.spark:spark-sql-kafka-0-10_2.12:3.3.0'
            },
            {
                name: 'Delta Lake',
                value: 'io.delta:delta-core_2.12:2.1.0'
            }
        ]
    },
    kubernetes: {
        namespace: {
            default: 'default',
            options: ['default', 'spark', 'data-processing', 'ml-workloads']
        },
        serviceAccount: 'spark',
        annotations: {
            'sidecar.istio.io/inject': 'false'
        },
        nodeSelectors: {
            driver: { 'asg-type': 'drivers' },
            executor: { 'asg-type': 'scale' }
        },
        containerImage: {
            default: 'spark:3.3.0',
            options: ['spark:3.3.0', 'spark:3.2.0', 'spark:3.1.3', 'spark:3.0.3']
        }
    },
    s3Configuration: {
        endpoint: 's3.amazonaws.com',
        credentialsProvider: 'org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider',
        accessKey: '',
        secretKey: ''
    },
    storage: {
        warehouseDir: '/home/spark/fsx-claim/spark/',
        localDir: '/home/spark/data/spark/local/',
        volumeClaim: {
            name: 'fsx-claim',
            mountPath: '/home/spark/fsx-claim/',
            readOnly: false
        }
    },
    performanceConfig: {
        speculation: false,
        networkTimeout: '800s',
        broadcastTimeout: 36000,
        executorHeartbeatInterval: '180s',
        taskMaxFailures: 40
    },
    loggingLevels: {
        options: ['ERROR', 'WARN', 'INFO', 'DEBUG'],
        default: 'ERROR'
    }
};
export const sparkJobTemplates = [
    {
        name: 'Basic ETL Job',
        description: 'Standard configuration for ETL workloads',
        config: {
            appName: 'etl_job',
            executorMemory: '4g',
            driverMemory: '2g',
            executorCores: 4,
            minExecutors: 2,
            maxExecutors: 20
        }
    },
export const sparkJobsMockData = [
    {
        id: 'spark-job-1',
        name: 'data-processing-job',
        application: 'data-etl',
        version: 1,
        status: 'Running',
        k8sNodes: ['worker-node-1', 'worker-node-2', 'worker-node-3'],
        resources: {
            cpu: '4 cores',
            memory: '16Gi'
        },
        startTime: '2023-09-10T08:30:00Z',
        sparkUI: 'http://spark-ui.example.com/jobs/spark-job-1',
        gitRepo: 'https://github.com/data-team/data-processing-job.git',
        owner: 'data-team',
        projectId: 'alpha',
        accessControl: {
            accessLevel: 'internal',
            authorizedUsers: ['Adrian', 'Sai'],
            authorizedRoles: ['admin', 'ds']
        }
    },
export const columnOptions = [
    { label: 'Name', value: 'name' },
export const applicationOptions = [
    { label: 'data-etl', value: 'data-etl' },
export const statusOptions = [
    { label: 'Running', value: 'Running' },
export const ownerOptions = [
    { label: 'data-team', value: 'data-team' },
export const availableUsers = [
    { name: 'Adrian', email: 'adrian@nstarxinc.com', role: 'admin' },
export const defaultVisibleColumns = ['name', 'application', 'version', 'gitRepo', 'status', 'k8sNodes', 'resources', 'startTime', 'owner', 'projectId', 'accessControl', 'actions'];

export const flowNodeOptions = {
    types: [
        { label: 'Data Source', value: 'data-source' },
        { label: 'Processing', value: 'processing' },
        { label: 'Transformation', value: 'transformation' },
        { label: 'Data Sink', value: 'data-sink' },
        { label: 'Monitoring', value: 'monitoring' }
    ],
    formats: [
        { label: 'Parquet', value: 'parquet' },
        { label: 'JSON', value: 'json' },
        { label: 'CSV', value: 'csv' },
        { label: 'Avro', value: 'avro' },
        { label: 'ORC', value: 'orc' }
    ],
    transformations: [
        { label: 'Filter', value: 'filter' },
        { label: 'Map', value: 'map' },
        { label: 'Reduce', value: 'reduce' },
        { label: 'Join', value: 'join' },
        { label: 'Aggregate', value: 'aggregate' },
        { label: 'Window', value: 'window' }
    ]
};
export const initialFlowNodes = [
    {
        id: 'data-source',
        type: 'sparkNode',
        position: { x: 100, y: 100 },
        data: { label: 'Data Source', nodeType: 'data-source' }
    },
export const initialFlowEdges = [
    {
        id: 'edge-source-processing',
        source: 'data-source',
        target: 'spark-processing',
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#3b82f6', strokeWidth: 2 }
    },
export const defaultSparkJob = {
    id: '',
    name: '',
    application: '',
    version: 1,
    status: 'Pending',
    k8sNodes: [],
    resources: {
        cpu: '',
        memory: ''
    },
    startTime: '',
    gitRepo: '',
    owner: '',
    projectId: '',
    accessControl: {
        accessLevel: 'public',
        authorizedUsers: [],
        authorizedRoles: []
    }
};
export const defaultFlowNodeForm = {
    name: '',
    application: '',
    sparkJobId: '',
    nodeType: 'processing',
    configuration: {
        inputFormat: '',
        outputFormat: '',
        transformationType: '',
        parallelism: 1,
        partitions: 1,
        memory: '2g',
        cores: '2'
    }
};