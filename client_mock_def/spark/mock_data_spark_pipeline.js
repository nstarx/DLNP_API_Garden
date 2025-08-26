export const sparkPipelineComponents = {
    'job-001': {
        core: [
            {
                name: 'Spark Driver',
                description: 'Main driver program',
                icon: 'pi pi-microchip',
                status: 'running',
                resources: { cpu: '4 cores', memory: '16Gi' }
            },
            {
                name: 'Executor Pool',
                description: '8 executor instances',
                icon: 'pi pi-server',
                status: 'running',
                resources: { cpu: '32 cores', memory: '128Gi' }
            },
            {
                name: 'Job Scheduler',
                description: 'FIFO scheduler',
                icon: 'pi pi-calendar',
                status: 'running'
            },
            {
                name: 'Task Manager',
                description: 'Distributed task execution',
                icon: 'pi pi-sitemap',
                status: 'running'
            }
        ],
        storage: [
            {
                name: 'HDFS',
                description: '100TB capacity',
                icon: 'pi pi-database',
                status: 'running',
                metrics: { used: '45TB', available: '55TB' }
            },
            {
                name: 'S3 Connector',
                description: 'AWS S3 integration',
                icon: 'pi pi-cloud',
                status: 'running'
            },
            {
                name: 'Parquet Reader',
                description: 'Optimized parquet I/O',
                icon: 'pi pi-file',
                status: 'running'
            },
            {
                name: 'Delta Lake',
                description: 'ACID transactions',
                icon: 'pi pi-shield',
                status: 'running'
            }
        ],
        networking: [
            {
                name: 'Shuffle Service',
                description: 'External shuffle service',
                icon: 'pi pi-share-alt',
                status: 'running',
                throughput: '10Gbps'
            },
            {
                name: 'RPC Framework',
                description: 'Netty-based RPC',
                icon: 'pi pi-wifi',
                status: 'running'
            },
            {
                name: 'Block Transfer',
                description: 'P2P block transfer',
                icon: 'pi pi-arrows-h',
                status: 'running'
            },
            {
                name: 'Load Balancer',
                description: 'Task distribution',
                icon: 'pi pi-compass',
                status: 'running'
            }
        ],
        monitoring: [
            {
                name: 'Spark UI',
                description: 'Web UI on port 4040',
                icon: 'pi pi-chart-line',
                status: 'running',
                url: 'http://localhost:4040'
            },
            {
                name: 'Metrics System',
                description: 'JMX & Prometheus',
                icon: 'pi pi-chart-bar',
                status: 'running'
            },
            {
                name: 'Event Logger',
                description: 'Application events',
                icon: 'pi pi-book',
                status: 'running'
            },
            {
                name: 'Ganglia Sink',
                description: 'Cluster monitoring',
                icon: 'pi pi-eye',
                status: 'running'
            }
        ]
    },
    'job-002': {
        core: [
            {
                name: 'Spark Driver',
                description: 'Streaming driver',
                icon: 'pi pi-microchip',
                status: 'running',
                resources: { cpu: '2 cores', memory: '8Gi' }
            },
            {
                name: 'Executor Pool',
                description: '4 executor instances',
                icon: 'pi pi-server',
                status: 'running',
                resources: { cpu: '16 cores', memory: '64Gi' }
            },
            {
                name: 'Stream Processor',
                description: 'Micro-batch processing',
                icon: 'pi pi-sync',
                status: 'running'
            },
            {
                name: 'Checkpoint Manager',
                description: 'State checkpointing',
                icon: 'pi pi-save',
                status: 'running'
            }
        ],
        storage: [
            {
                name: 'Kafka Connect',
                description: 'Kafka integration',
                icon: 'pi pi-link',
                status: 'running',
                topics: 12
            },
            {
                name: 'State Store',
                description: 'RocksDB backend',
                icon: 'pi pi-database',
                status: 'running'
            },
            {
                name: 'Checkpoint Store',
                description: 'HDFS checkpoints',
                icon: 'pi pi-folder',
                status: 'running'
            },
            {
                name: 'Archive Storage',
                description: 'Long-term storage',
                icon: 'pi pi-box',
                status: 'running'
            }
        ],
        networking: [
            {
                name: 'Kafka Consumer',
                description: 'Multi-partition consumer',
                icon: 'pi pi-download',
                status: 'running',
                partitions: 32
            },
            {
                name: 'HTTP Source',
                description: 'REST API endpoint',
                icon: 'pi pi-globe',
                status: 'running'
            },
            {
                name: 'WebSocket Server',
                description: 'Real-time updates',
                icon: 'pi pi-wifi',
                status: 'running'
            },
            {
                name: 'gRPC Service',
                description: 'High-performance RPC',
                icon: 'pi pi-bolt',
                status: 'running'
            }
        ],
        monitoring: [
            {
                name: 'Streaming UI',
                description: 'Streaming statistics',
                icon: 'pi pi-chart-line',
                status: 'running',
                url: 'http://localhost:4040/streaming'
            },
            {
                name: 'Lag Monitor',
                description: 'Consumer lag tracking',
                icon: 'pi pi-clock',
                status: 'running'
            },
            {
                name: 'Alert Manager',
                description: 'Threshold alerts',
                icon: 'pi pi-bell',
                status: 'running'
            },
            {
                name: 'Grafana Dashboard',
                description: 'Visual monitoring',
                icon: 'pi pi-desktop',
                status: 'running'
            }
        ]
    },
    'spark-job-1': {
        core: [
            {
                name: 'Spark Driver',
                description: 'ETL driver program',
                icon: 'pi pi-microchip',
                status: 'running',
                resources: { cpu: '2 cores', memory: '8Gi' }
            },
            {
                name: 'Executor Pool',
                description: '3 executor instances',
                icon: 'pi pi-server',
                status: 'running',
                resources: { cpu: '12 cores', memory: '48Gi' }
            },
            {
                name: 'DAG Scheduler',
                description: 'Job orchestration',
                icon: 'pi pi-sitemap',
                status: 'running'
            },
            {
                name: 'Stage Manager',
                description: 'Stage execution',
                icon: 'pi pi-layers',
                status: 'running'
            }
        ],
        storage: [
            {
                name: 'S3 Bucket',
                description: 'Raw data storage',
                icon: 'pi pi-cloud',
                status: 'running',
                bucket: 'data-lake-raw'
            },
            {
                name: 'Processed Data',
                description: 'S3 output bucket',
                icon: 'pi pi-cloud-upload',
                status: 'running',
                bucket: 'data-lake-processed'
            },
            {
                name: 'Temp Storage',
                description: 'Shuffle data',
                icon: 'pi pi-hdd',
                status: 'running'
            },
            {
                name: 'Metadata Store',
                description: 'Hive metastore',
                icon: 'pi pi-table',
                status: 'running'
            }
        ],
        networking: [
            {
                name: 'Data Transfer',
                description: 'S3 transfer service',
                icon: 'pi pi-arrows-v',
                status: 'running',
                bandwidth: '1Gbps'
            },
            {
                name: 'Executor Comm',
                description: 'Inter-executor RPC',
                icon: 'pi pi-share-alt',
                status: 'running'
            },
            {
                name: 'Service Mesh',
                description: 'Istio sidecar',
                icon: 'pi pi-shield',
                status: 'running'
            }
        ],
        monitoring: [
            {
                name: 'Job Metrics',
                description: 'Spark metrics',
                icon: 'pi pi-chart-line',
                status: 'running'
            },
            {
                name: 'CloudWatch',
                description: 'AWS monitoring',
                icon: 'pi pi-eye',
                status: 'running'
            },
            {
                name: 'Data Quality',
                description: 'Quality checks',
                icon: 'pi pi-check-circle',
                status: 'running'
            }
        ]
    },
    'spark-job-2': {
        core: [
            {
                name: 'Spark Driver',
                description: 'ML training driver',
                icon: 'pi pi-microchip',
                status: 'running',
                resources: { cpu: '4 cores', memory: '16Gi' }
            },
            {
                name: 'GPU Executors',
                description: '2 GPU instances',
                icon: 'pi pi-bolt',
                status: 'running',
                resources: { cpu: '8 cores', memory: '32Gi', gpu: '2 x A100' }
            },
            {
                name: 'ML Pipeline',
                description: 'MLlib pipeline',
                icon: 'pi pi-chart-pie',
                status: 'running'
            },
            {
                name: 'Model Registry',
                description: 'MLflow tracking',
                icon: 'pi pi-bookmark',
                status: 'running'
            }
        ],
        storage: [
            {
                name: 'Training Data',
                description: 'Feature store',
                icon: 'pi pi-database',
                status: 'running',
                size: '500GB'
            },
            {
                name: 'Model Storage',
                description: 'Model artifacts',
                icon: 'pi pi-save',
                status: 'running'
            },
            {
                name: 'Checkpoint Dir',
                description: 'Training checkpoints',
                icon: 'pi pi-history',
                status: 'running'
            },
            {
                name: 'TensorBoard',
                description: 'Training logs',
                icon: 'pi pi-chart-bar',
                status: 'running'
            }
        ],
        networking: [
            {
                name: 'GPU Direct',
                description: 'RDMA networking',
                icon: 'pi pi-zap',
                status: 'running',
                throughput: '100Gbps'
            },
            {
                name: 'Parameter Server',
                description: 'Distributed training',
                icon: 'pi pi-server',
                status: 'running'
            },
            {
                name: 'gRPC Service',
                description: 'Model serving',
                icon: 'pi pi-link',
                status: 'running'
            }
        ],
        monitoring: [
            {
                name: 'GPU Monitor',
                description: 'NVIDIA SMI',
                icon: 'pi pi-desktop',
                status: 'running'
            },
            {
                name: 'Training Metrics',
                description: 'Loss & accuracy',
                icon: 'pi pi-chart-line',
                status: 'running'
            },
            {
                name: 'MLflow UI',
                description: 'Experiment tracking',
                icon: 'pi pi-book',
                status: 'running',
                url: 'http://mlflow.example.com'
            }
        ]
    },
    'spark-job-3': {
        core: [
            {
                name: 'Spark Driver',
                description: 'Log processor',
                icon: 'pi pi-microchip',
                status: 'failed',
                resources: { cpu: '1 core', memory: '4Gi' }
            },
            {
                name: 'Executor Pool',
                description: '1 executor instance',
                icon: 'pi pi-server',
                status: 'failed',
                resources: { cpu: '2 cores', memory: '8Gi' }
            },
            {
                name: 'Log Parser',
                description: 'Regex parsing',
                icon: 'pi pi-filter',
                status: 'failed'
            }
        ],
        storage: [
            {
                name: 'Log Storage',
                description: 'Raw logs',
                icon: 'pi pi-file',
                status: 'failed',
                error: 'Permission denied'
            },
            {
                name: 'Output Store',
                description: 'Parsed logs',
                icon: 'pi pi-folder',
                status: 'failed'
            }
        ],
        networking: [
            {
                name: 'Log Ingestion',
                description: 'Fluentd input',
                icon: 'pi pi-download',
                status: 'failed'
            },
            {
                name: 'Error Handler',
                description: 'DLQ service',
                icon: 'pi pi-exclamation-triangle',
                status: 'active'
            }
        ],
        monitoring: [
            {
                name: 'Error Logs',
                description: 'Failure analysis',
                icon: 'pi pi-times-circle',
                status: 'active',
                errors: 42
            },
            {
                name: 'Alert System',
                description: 'PagerDuty alerts',
                icon: 'pi pi-bell',
                status: 'active'
            }
        ]
    },
    'spark-job-4': {
        core: [
            {
                name: 'Spark Driver',
                description: 'Stream controller',
                icon: 'pi pi-microchip',
                status: 'running',
                resources: { cpu: '4 cores', memory: '16Gi' }
            },
            {
                name: 'Executor Pool',
                description: '10 executor instances',
                icon: 'pi pi-server',
                status: 'running',
                resources: { cpu: '40 cores', memory: '160Gi' }
            },
            {
                name: 'Stream Engine',
                description: 'Structured streaming',
                icon: 'pi pi-sync',
                status: 'running',
                batchInterval: '10s'
            },
            {
                name: 'State Manager',
                description: 'Stateful operations',
                icon: 'pi pi-database',
                status: 'running'
            }
        ],
        storage: [
            {
                name: 'Kafka Topics',
                description: '15 input topics',
                icon: 'pi pi-list',
                status: 'running',
                throughput: '1M msg/s'
            },
            {
                name: 'State Store',
                description: 'RocksDB backend',
                icon: 'pi pi-hdd',
                status: 'running',
                size: '100GB'
            },
            {
                name: 'Archive Store',
                description: 'S3 cold storage',
                icon: 'pi pi-box',
                status: 'running'
            },
            {
                name: 'Cache Layer',
                description: 'Redis cache',
                icon: 'pi pi-flash',
                status: 'running'
            }
        ],
        networking: [
            {
                name: 'Kafka Cluster',
                description: 'Multi-consumer',
                icon: 'pi pi-sitemap',
                status: 'running',
                brokers: 5
            },
            {
                name: 'Load Balancer',
                description: 'ALB ingress',
                icon: 'pi pi-compass',
                status: 'running'
            },
            {
                name: 'CDC Connector',
                description: 'Database CDC',
                icon: 'pi pi-refresh',
                status: 'running'
            },
            {
                name: 'Event Hub',
                description: 'Event routing',
                icon: 'pi pi-send',
                status: 'running'
            }
        ],
        monitoring: [
            {
                name: 'Lag Monitor',
                description: 'Consumer lag',
                icon: 'pi pi-clock',
                status: 'running',
                maxLag: '5s'
            },
            {
                name: 'Throughput',
                description: 'Messages/sec',
                icon: 'pi pi-chart-line',
                status: 'running'
            },
            {
                name: 'Kafka Manager',
                description: 'Cluster health',
                icon: 'pi pi-heart',
                status: 'running'
            },
            {
                name: 'Custom Dashboard',
                description: 'Grafana metrics',
                icon: 'pi pi-desktop',
                status: 'running',
                url: 'http://grafana.example.com'
            }
        ]
    },
    'spark-job-5': {
        core: [
            {
                name: 'Spark Driver',
                description: 'Awaiting resources',
                icon: 'pi pi-microchip',
                status: 'pending',
                resources: { cpu: '4 cores', memory: '16Gi' }
            },
            {
                name: 'Executor Pool',
                description: 'Not allocated',
                icon: 'pi pi-server',
                status: 'pending',
                resources: { cpu: '0 cores', memory: '0Gi' }
            },
            {
                name: 'Resource Manager',
                description: 'YARN queue',
                icon: 'pi pi-hourglass',
                status: 'pending'
            }
        ],
        storage: [
            {
                name: 'Data Warehouse',
                description: 'Snowflake connector',
                icon: 'pi pi-database',
                status: 'pending'
            },
            {
                name: 'Stage Area',
                description: 'ETL staging',
                icon: 'pi pi-inbox',
                status: 'pending'
            },
            {
                name: 'Archive',
                description: 'Historical data',
                icon: 'pi pi-archive',
                status: 'pending'
            }
        ],
        networking: [
            {
                name: 'VPC Endpoint',
                description: 'Private link',
                icon: 'pi pi-lock',
                status: 'pending'
            },
            {
                name: 'Data Gateway',
                description: 'API gateway',
                icon: 'pi pi-globe',
                status: 'pending'
            }
        ],
        monitoring: [
            {
                name: 'Queue Monitor',
                description: 'Job queue status',
                icon: 'pi pi-list',
                status: 'active',
                position: 3
            },
            {
                name: 'Resource Wait',
                description: 'Waiting for nodes',
                icon: 'pi pi-spinner',
                status: 'active'
            }
        ]
    }
};
export const pipelineFlowData = {
    'job-001': {
        nodes: [
            {
                id: 'source-1',
                type: 'sparkNode',
                position: { x: 50, y: 50 },
                data: {
                    label: 'S3 Data Lake',
                    nodeType: 'data-source',
                    status: 'active',
                    metrics: { records: '10M/s', size: '1.2TB' }
                }
            },
            {
                id: 'source-2',
                type: 'sparkNode',
                position: { x: 50, y: 300 },
                data: {
                    label: 'HDFS Source',
                    nodeType: 'data-source',
                    status: 'active',
                    metrics: { records: '5M/s', size: '800GB' }
                }
            },
            {
                id: 'transform-1',
                type: 'sparkNode',
                position: { x: 350, y: 175 },
                data: {
                    label: 'Data Validation',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Schema validation', 'Null check', 'Type casting']
                }
            },
            {
                id: 'transform-2',
                type: 'sparkNode',
                position: { x: 650, y: 50 },
                data: {
                    label: 'Feature Engineering',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Normalization', 'Encoding', 'Feature extraction']
                }
            },
            {
                id: 'transform-3',
                type: 'sparkNode',
                position: { x: 650, y: 300 },
                data: {
                    label: 'Aggregation',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Group by', 'Window functions', 'Rollup']
                }
            },
            {
                id: 'ml-1',
                type: 'sparkNode',
                position: { x: 950, y: 175 },
                data: {
                    label: 'ML Pipeline',
                    nodeType: 'processing',
                    status: 'processing',
                    model: 'XGBoost',
                    accuracy: '94.5%'
                }
            },
            {
                id: 'sink-1',
                type: 'sparkNode',
                position: { x: 1250, y: 50 },
                data: {
                    label: 'Delta Lake',
                    nodeType: 'data-sink',
                    status: 'active',
                    tables: ['features', 'predictions']
                }
            },
            {
                id: 'sink-2',
                type: 'sparkNode',
                position: { x: 1250, y: 300 },
                data: {
                    label: 'Redis Cache',
                    nodeType: 'data-sink',
                    status: 'active',
                    keys: '1.2M'
                }
            },
            {
                id: 'monitor-1',
                type: 'sparkNode',
                position: { x: 950, y: 450 },
                data: {
                    label: 'Performance Monitor',
                    nodeType: 'monitoring',
                    status: 'active',
                    alerts: 0
                }
            }
        ],
        edges: [
            {
                id: 'e1-3',
                source: 'source-1',
                sourceHandle: 'source-1-source',
                target: 'transform-1',
                targetHandle: 'transform-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'e2-3',
                source: 'source-2',
                sourceHandle: 'source-2-source',
                target: 'transform-1',
                targetHandle: 'transform-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'e3-4',
                source: 'transform-1',
                sourceHandle: 'transform-1-source',
                target: 'transform-2',
                targetHandle: 'transform-2-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#ef4444', strokeWidth: 2 }
            },
            {
                id: 'e3-5',
                source: 'transform-1',
                sourceHandle: 'transform-1-source',
                target: 'transform-3',
                targetHandle: 'transform-3-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#ef4444', strokeWidth: 2 }
            },
            {
                id: 'e4-6',
                source: 'transform-2',
                sourceHandle: 'transform-2-source',
                target: 'ml-1',
                targetHandle: 'ml-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'e5-6',
                source: 'transform-3',
                sourceHandle: 'transform-3-source',
                target: 'ml-1',
                targetHandle: 'ml-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'e6-7',
                source: 'ml-1',
                sourceHandle: 'ml-1-source',
                target: 'sink-1',
                targetHandle: 'sink-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            },
            {
                id: 'e6-8',
                source: 'ml-1',
                sourceHandle: 'ml-1-source',
                target: 'sink-2',
                targetHandle: 'sink-2-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            },
            {
                id: 'e6-9',
                source: 'ml-1',
                sourceHandle: 'ml-1-source',
                target: 'monitor-1',
                targetHandle: 'monitor-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#f59e0b', strokeWidth: 2 }
            }
        ]
    },
    'job-002': {
        nodes: [
            {
                id: 'kafka-source',
                type: 'sparkNode',
                position: { x: 50, y: 175 },
                data: {
                    label: 'Kafka Stream',
                    nodeType: 'data-source',
                    status: 'streaming',
                    topics: ['events', 'logs', 'metrics'],
                    throughput: '100K msg/s'
                }
            },
            {
                id: 'window-1',
                type: 'sparkNode',
                position: { x: 350, y: 175 },
                data: {
                    label: 'Tumbling Window',
                    nodeType: 'transformation',
                    status: 'processing',
                    window: '5 minutes',
                    watermark: '1 minute'
                }
            },
            {
                id: 'stateful-1',
                type: 'sparkNode',
                position: { x: 650, y: 50 },
                data: {
                    label: 'Stateful Processing',
                    nodeType: 'processing',
                    status: 'processing',
                    state: 'RocksDB',
                    checkpoints: 'HDFS'
                }
            },
            {
                id: 'anomaly-1',
                type: 'sparkNode',
                position: { x: 650, y: 300 },
                data: {
                    label: 'Anomaly Detection',
                    nodeType: 'processing',
                    status: 'processing',
                    algorithm: 'Isolation Forest',
                    threshold: '0.95'
                }
            },
            {
                id: 'alert-sink',
                type: 'sparkNode',
                position: { x: 950, y: 300 },
                data: {
                    label: 'Alert System',
                    nodeType: 'data-sink',
                    status: 'active',
                    channels: ['email', 'slack', 'pagerduty']
                }
            },
            {
                id: 'elastic-sink',
                type: 'sparkNode',
                position: { x: 950, y: 50 },
                data: {
                    label: 'Elasticsearch',
                    nodeType: 'data-sink',
                    status: 'active',
                    indices: ['metrics-*', 'logs-*']
                }
            }
        ],
        edges: [
            {
                id: 'kafka-window',
                source: 'kafka-source',
                sourceHandle: 'kafka-source-source',
                target: 'window-1',
                targetHandle: 'window-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'window-state',
                source: 'window-1',
                sourceHandle: 'window-1-source',
                target: 'stateful-1',
                targetHandle: 'stateful-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'window-anomaly',
                source: 'window-1',
                sourceHandle: 'window-1-source',
                target: 'anomaly-1',
                targetHandle: 'anomaly-1-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'state-elastic',
                source: 'stateful-1',
                sourceHandle: 'stateful-1-source',
                target: 'elastic-sink',
                targetHandle: 'elastic-sink-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            },
            {
                id: 'anomaly-alert',
                source: 'anomaly-1',
                sourceHandle: 'anomaly-1-source',
                target: 'alert-sink',
                targetHandle: 'alert-sink-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#ef4444', strokeWidth: 2 }
            }
        ]
    },
    'spark-job-1': {
        nodes: [
            {
                id: 'data-lake',
                type: 'sparkNode',
                position: { x: 50, y: 175 },
                data: {
                    label: 'Data Lake S3',
                    nodeType: 'data-source',
                    status: 'active',
                    metrics: { files: '10K', size: '2.5TB' }
                }
            },
            {
                id: 'etl-cleanse',
                type: 'sparkNode',
                position: { x: 400, y: 50 },
                data: {
                    label: 'Data Cleansing',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Remove duplicates', 'Fix nulls', 'Standardize formats']
                }
            },
            {
                id: 'etl-transform',
                type: 'sparkNode',
                position: { x: 400, y: 300 },
                data: {
                    label: 'Business Transform',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Apply business rules', 'Calculate metrics', 'Derive fields']
                }
            },
            {
                id: 'warehouse',
                type: 'sparkNode',
                position: { x: 750, y: 175 },
                data: {
                    label: 'Data Warehouse',
                    nodeType: 'data-sink',
                    status: 'active',
                    tables: ['customers', 'transactions', 'products']
                }
            }
        ],
        edges: [
            {
                id: 'lake-cleanse',
                source: 'data-lake',
                sourceHandle: 'data-lake-source',
                target: 'etl-cleanse',
                targetHandle: 'etl-cleanse-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'lake-transform',
                source: 'data-lake',
                sourceHandle: 'data-lake-source',
                target: 'etl-transform',
                targetHandle: 'etl-transform-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'cleanse-warehouse',
                source: 'etl-cleanse',
                sourceHandle: 'etl-cleanse-source',
                target: 'warehouse',
                targetHandle: 'warehouse-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            },
            {
                id: 'transform-warehouse',
                source: 'etl-transform',
                sourceHandle: 'etl-transform-source',
                target: 'warehouse',
                targetHandle: 'warehouse-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            }
        ]
    },
    'spark-job-2': {
        nodes: [
            {
                id: 'feature-store',
                type: 'sparkNode',
                position: { x: 50, y: 175 },
                data: {
                    label: 'Feature Store',
                    nodeType: 'data-source',
                    status: 'active',
                    features: 1250,
                    size: '500GB'
                }
            },
            {
                id: 'data-prep',
                type: 'sparkNode',
                position: { x: 350, y: 175 },
                data: {
                    label: 'Data Preparation',
                    nodeType: 'transformation',
                    status: 'processing',
                    operations: ['Feature scaling', 'One-hot encoding', 'Train/test split']
                }
            },
            {
                id: 'ml-training',
                type: 'sparkNode',
                position: { x: 650, y: 175 },
                data: {
                    label: 'Model Training',
                    nodeType: 'processing',
                    status: 'processing',
                    model: 'XGBoost',
                    gpus: '2 x A100'
                }
            },
            {
                id: 'model-registry',
                type: 'sparkNode',
                position: { x: 950, y: 175 },
                data: {
                    label: 'MLflow Registry',
                    nodeType: 'data-sink',
                    status: 'active',
                    models: 23,
                    version: 'v2.3'
                }
            }
        ],
        edges: [
            {
                id: 'store-prep',
                source: 'feature-store',
                sourceHandle: 'feature-store-source',
                target: 'data-prep',
                targetHandle: 'data-prep-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'prep-train',
                source: 'data-prep',
                sourceHandle: 'data-prep-source',
                target: 'ml-training',
                targetHandle: 'ml-training-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'train-registry',
                source: 'ml-training',
                sourceHandle: 'ml-training-source',
                target: 'model-registry',
                targetHandle: 'model-registry-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            }
        ]
    },
    'spark-job-3': {
        nodes: [
            {
                id: 'log-source',
                type: 'sparkNode',
                position: { x: 50, y: 175 },
                data: {
                    label: 'Log Files',
                    nodeType: 'data-source',
                    status: 'failed',
                    error: 'Access denied',
                    path: '/var/logs/app'
                }
            },
            {
                id: 'log-parser',
                type: 'sparkNode',
                position: { x: 350, y: 175 },
                data: {
                    label: 'Log Parser',
                    nodeType: 'transformation',
                    status: 'failed',
                    error: 'Parser exception'
                }
            },
            {
                id: 'error-handler',
                type: 'sparkNode',
                position: { x: 350, y: 350 },
                data: {
                    label: 'Error Handler',
                    nodeType: 'monitoring',
                    status: 'active',
                    errors: 42
                }
            }
        ],
        edges: [
            {
                id: 'source-parser',
                source: 'log-source',
                sourceHandle: 'log-source-source',
                target: 'log-parser',
                targetHandle: 'log-parser-target',
                type: 'bezier',
                animated: false,
                style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '5,5' }
            },
            {
                id: 'parser-error',
                source: 'log-parser',
                sourceHandle: 'log-parser-source',
                target: 'error-handler',
                targetHandle: 'error-handler-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#ef4444', strokeWidth: 2 }
            }
        ]
    },
    'spark-job-4': {
        nodes: [
            {
                id: 'kafka-events',
                type: 'sparkNode',
                position: { x: 50, y: 50 },
                data: {
                    label: 'Event Stream',
                    nodeType: 'data-source',
                    status: 'streaming',
                    topics: ['user-events', 'system-events'],
                    throughput: '500K msg/s'
                }
            },
            {
                id: 'kafka-logs',
                type: 'sparkNode',
                position: { x: 50, y: 300 },
                data: {
                    label: 'Log Stream',
                    nodeType: 'data-source',
                    status: 'streaming',
                    topics: ['app-logs', 'error-logs'],
                    throughput: '300K msg/s'
                }
            },
            {
                id: 'stream-join',
                type: 'sparkNode',
                position: { x: 350, y: 175 },
                data: {
                    label: 'Stream Join',
                    nodeType: 'transformation',
                    status: 'processing',
                    window: '5 min',
                    watermark: '1 min'
                }
            },
            {
                id: 'enrichment',
                type: 'sparkNode',
                position: { x: 650, y: 175 },
                data: {
                    label: 'Data Enrichment',
                    nodeType: 'processing',
                    status: 'processing',
                    lookups: ['user-profile', 'geo-data']
                }
            },
            {
                id: 'real-time-dash',
                type: 'sparkNode',
                position: { x: 950, y: 50 },
                data: {
                    label: 'Real-time Dashboard',
                    nodeType: 'data-sink',
                    status: 'active',
                    latency: '<100ms'
                }
            },
            {
                id: 'data-archive',
                type: 'sparkNode',
                position: { x: 950, y: 300 },
                data: {
                    label: 'S3 Archive',
                    nodeType: 'data-sink',
                    status: 'active',
                    format: 'parquet'
                }
            }
        ],
        edges: [
            {
                id: 'events-join',
                source: 'kafka-events',
                sourceHandle: 'kafka-events-source',
                target: 'stream-join',
                targetHandle: 'stream-join-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'logs-join',
                source: 'kafka-logs',
                sourceHandle: 'kafka-logs-source',
                target: 'stream-join',
                targetHandle: 'stream-join-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#3b82f6', strokeWidth: 2 }
            },
            {
                id: 'join-enrich',
                source: 'stream-join',
                sourceHandle: 'stream-join-source',
                target: 'enrichment',
                targetHandle: 'enrichment-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#8b5cf6', strokeWidth: 2 }
            },
            {
                id: 'enrich-dash',
                source: 'enrichment',
                sourceHandle: 'enrichment-source',
                target: 'real-time-dash',
                targetHandle: 'real-time-dash-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            },
            {
                id: 'enrich-archive',
                source: 'enrichment',
                sourceHandle: 'enrichment-source',
                target: 'data-archive',
                targetHandle: 'data-archive-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#10b981', strokeWidth: 2 }
            }
        ]
    },
    'spark-job-5': {
        nodes: [
            {
                id: 'pending-queue',
                type: 'sparkNode',
                position: { x: 250, y: 175 },
                data: {
                    label: 'Job Queue',
                    nodeType: 'monitoring',
                    status: 'pending',
                    position: 3,
                    waitTime: '15 min'
                }
            },
            {
                id: 'resource-wait',
                type: 'sparkNode',
                position: { x: 600, y: 175 },
                data: {
                    label: 'Resource Manager',
                    nodeType: 'monitoring',
                    status: 'pending',
                    waitingFor: 'Available executors'
                }
            }
        ],
        edges: [
            {
                id: 'queue-resources',
                source: 'pending-queue',
                sourceHandle: 'pending-queue-source',
                target: 'resource-wait',
                targetHandle: 'resource-wait-target',
                type: 'bezier',
                animated: true,
                style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' }
            }
        ]
    }
};