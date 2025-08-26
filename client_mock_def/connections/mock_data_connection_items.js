export const s3Items = [
    {
        name: 'HP Printer logs Data',
        connectionID: '2732763284',
        description: 'AWS S3 location for HP Printer logs folder, from all geos and is partitioned by event date. These are brought in with privacy-preserving, and are AES-256 encrypted symmetrically. Also archived to glacier every 30d.',
        owner: 'Suresh Kondapuram',
        tag: {
            category: 'Telemetry',
            priority: 'Low',
            version: '1.0'
        },
        environment: 'Dev',
        severity: 'warn',
        bucket: 'printers-data',
        key: 'logs',
        folder: 'geos',
        created: 'Thu, May 15, 2025',
        updated: 'Fri, May 16, 2025',
        service: 'new service',
        aiZoneName: 'HP Observability AIZone- Dev',
    },
    {
        name: 'HP A/B Testing events Data',
        connectionID: '2732763289',
        description: 'AWS S3 location for HP A/B Testing Analytics folder, from all geos and is partitioned by event date. These are brought in with privacy-preserving, and are AES-256 encrypted symmetrically. Also archived to glacier every 30d.',
        owner: 'Alice Shrivastav',
        tag: {
            experiment: 'Alpha',
            department: 'AI/ML',
            version: '1.1'
        },
        environment: 'Prod',
        severity: 'success',
        bucket: 'experiments-data',
        key: 'A/B testing',
        folder: 'events',
        service: 'new service',
        created: 'Tue, Jun 02, 2025',
        updated: 'Wed, Jun 03, 2025',
        aiZoneName: 'HP AI/ML AIZone- Prod',
    }
];

export const hiveItems = [
    {
        name: 'HP Hive Metastore System',
        db: 'postgres',
        host: 'rds-122344.aws.us-east-1.rds.com',
        port: '5432',
        user: 'beeline',
        path: 's3://config_path/prod/hive/.metastore/',
        connectionID: '2732763284',
        description: 'Hive Metastore for cataloging and governing various HP underlying datasources inside various AWSes',
        owner: 'Sai Khanna',
        tag: {
            deployment: 'Helm Charts- Hive Metastore Deployment',
            version: '1.0'
        },
        environment: 'Prod',
        severity: 'success',
        created: 'Mon, Apr 21, 2025',
        updated: 'Fri, May 16, 2025',
        aiZoneName: 'HP Observability AIZone- Dev',
    }
];

export const datahubItems = [
    {
        name: 'HP Data Hub Instance',
        db: 'postgres',
        host: 'rds-122344.aws.us-east-1.rds.com',
        port: '5432',
        user: 'datahub',
        path: 's3://config_path/prod/datahub/',
        connectionID: '2732763284',
        description: 'Data Hub Catalog for cataloging and governing various HP underlying datasources inside various AWSes',
        owner: 'Adrian Paleacu',
        tag: {
            deployment: 'Helm Charts- DataHub Deployment',
            version: '1.0'
        },
        environment: 'Dev',
        severity: 'warn',
        created: 'Mon, Apr 21, 2025',
        updated: 'Fri, May 16, 2025',
        aiZoneName: 'HP Observability AIZone- Dev',
    }
];

export const glueCatalogItems = [
    {
        serde: "json",
        schedule: "@daily 12noon",
        name: 'HP S3 data Glue Catalog',
        location: "s3://printers-data/",
        table_type: "external",
        connectionID: '2732763284',
        description: 'Glue Catalog for various HP underlying datasources inside AWS S3',
        owner: 'Adrian Paleacu',
        tag: {
            deployment: 'IaC- CFN HP Glue',
            version: '1.0'
        },
        environment: 'Dev',
        severity: 'warn',
        bucket: 'printers-data',
        created: 'Mon, Apr 21, 2025',
        updated: 'Fri, May 16, 2025',
        aiZoneName: 'HP Observability AIZone- Dev',
    },
    {
        serde: "csv",
        schedule: "@daily 12noon",
        name: 'HP RDS data Glue Catalog',
        location: "s3://printers-data/",
        table_type: "external",
        connectionID: '2732763284',
        description: 'Glue Catalog for various HP underlying datasources inside AWS RDS',
        owner: 'Adrian Paleacu',
        tag: {
            deployment: 'Manual',
            version: '1.0'
        },
        environment: 'Prod',
        severity: 'success',
        bucket: 'printers-data',
        created: 'Thu, Jun 05, 2025',
        updated: 'Fri, Jun 06, 2025',
        aiZoneName: 'HP Observability AIZone- Prod',
    },
];

export const dataGovernanceItems = [
    {
        image: 'ranger/ranger',
        version: '2.1.3',
        mem: '8',
        heap: '8',
        ssd: '128',
        hdd: '512',
        master: 1,
        worker: 3,
        uss: 'AWS S3 Object Storage(s3n://)',
        mnt: '/usr/mnt1',
        uri: "alluxio://s3n/",
        name: 'Apache Ranger -ACL Governance',
        connectionID: '2732763284',
        description: 'Apache Ranger ACL Policies configuration at AWS S3 location of the HP Printer logs folder, from all geos and is partitioned by event date. These are brought in with privacy-preserving, and are AES-256 encrypted symmetrically. Also archived to glacier every 30d.',
        owner: 'Raju Pasunuri',
        tag: {
            deployment: 'Manual',
            priority: 'Low',
            version: '1.0'
        },
        environment: 'Stg',
        severity: 'info',
        bucket: 'printers-data',
        key: 'logs',
        folder: 'geos',
        created: 'Thu, May 15, 2025',
        updated: 'Fri, May 16, 2025',
        service: 'new service',
        aiZoneName: 'HP Observability AIZone- Dev',
    }
];

export const rdsItems = [
    {
        name: 'HP Customer Support Tickets Database',
        connectionID: '2732763284',
        description: 'AWS RDS Server for HP CST tickets, runbooks, Case Histories etc. Indexed by created_date and updated_date.',
        owner: 'Adrian Paleacu',
        tag: {
            category: 'CST',
            priority: 'High',
            access: 'CONFIDENTIAL'
        },
        rdbms: 'Postgres',
        version: 'v14.2',
        host: "rds-v3243521.us-east-1.rds.aws.com",
        port: 5432,
        securityGroup: 'HP rds SG',
        region: 'us-east-1',
        az: ['us-east-1a', 'us-east-1b'],
        vpc: 'vpc-12114566',
        subnets: ['subnet-11882349', 'subnet-102294532'],
        iam: 'my_ec2_rds_readonly_role',
        username: 'rdsuser',
        database: 'public',
        ssl: true,
        cert: 'aws-cm-452219',
        environment: 'Dev',
        severity: 'warn',
        bucket: 'printers-data',
        key: 'logs',
        folder: 'geos',
        created: 'Mon, Apr 15, 2025',
        updated: 'Sat, Jun 01, 2025',
        service: 'new service',
        aiZoneName: 'HP Observability AIZone- Dev',
    }
];