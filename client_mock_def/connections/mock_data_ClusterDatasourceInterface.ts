export interface DatasourceNode {
    id: string;
    type: string;
    name: string;
    description: string;
    connectionDetails: {
        type: string;
        host?: string;
        port?: number;
        username?: string;
        password?: string;
        database?: string;
        bucket?: string;
        region?: string;
        endpoint?: string;
        accessKey?: string;
        secretKey?: string;
        connectionString?: string;
        [key: string]: any;
    };
    status: 'active' | 'inactive' | 'error';
    tags: string[];
    metadata: {
        [key: string]: any;
    };
    isMaster?: boolean;
    role?: 'presto' | 'datasource';
    parentId?: string;
}

export interface ClusterDatasource {
    id: string;
    name: string;
    description: string;
    nodes: DatasourceNode[];
    edges: ClusterDatasourceEdge[];
    owner: string;
    created: string;
    updated: string;
    tags: string[];
    status: 'active' | 'inactive' | 'draft';
}

export interface ClusterDatasourceEdge {
    id: string;
    source: string;
    target: string;
    label?: string;
    type: 'data-flow' | 'dependency' | 'replication' | 'sync';
    metadata?: {
        description?: string;
        schedule?: string;
        direction?: 'one-way' | 'bidirectional';
        [key: string]: any;
    };
}
