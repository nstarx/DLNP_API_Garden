# Composables AI Catalog REST API Design Documentation

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Entity Model](#entity-model)
4. [Authentication & Authorization](#authentication--authorization)
5. [API Endpoints](#api-endpoints)
6. [Data Models](#data-models)
7. [Filtering & Search](#filtering--search)
8. [Marketplace Management](#marketplace-management)
9. [Provenance & Auditing](#provenance--auditing)
10. [Real-time Updates](#real-time-updates)
11. [Caching Strategy](#caching-strategy)
12. [Error Handling](#error-handling)

## Overview

This document provides a comprehensive REST API design for the Composables AI Catalog System - an advanced platform for managing AI/ML assets through reactive composable patterns. The system provides a unified interface for datasets, models, experiments, pipelines, feature sets, endpoints, policies, and comprehensive provenance tracking with real-time filtering and marketplace capabilities.

### Key Features
- Reactive data management with composable patterns
- AI model marketplace with ratings and favorites
- Advanced filtering and search capabilities
- Real-time provenance tracking
- Multi-tier caching strategy
- Optimistic UI updates
- WebSocket support for real-time synchronization
- Comprehensive audit trail
- Enterprise marketplace features
- Version control for all assets

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────┐
│                   API Gateway                           │
├─────────────────────────────────────────────────────────┤
│              Composables Service Layer                  │
├──────────────────────┬──────────────────────────────────┤
│  Core Data Services  │    Marketplace Services          │
├──────────────────────┼──────────────────────────────────┤
│ • Dataset Manager    │ • Model Marketplace              │
│ • Model Registry     │ • Provider Integration           │
│ • Experiment Tracker │ • Rating System                  │
│ • Pipeline Manager   │ • Trending Analytics             │
│ • Feature Store      │ • Recommendation Engine          │
├──────────────────────┼──────────────────────────────────┤
│ Filter & Search      │    Provenance Services           │
├──────────────────────┼──────────────────────────────────┤
│ • Query Builder      │ • Audit Logger                   │
│ • Index Manager      │ • Lineage Tracker                │
│ • Cache Manager      │ • Compliance Monitor             │
│ • Sort Engine        │ • Activity Stream                │
├──────────────────────┼──────────────────────────────────┤
│   State Management   │    Real-time Services            │
├──────────────────────┼──────────────────────────────────┤
│ • Reactive Store     │ • WebSocket Handler              │
│ • State Sync         │ • Event Broadcaster              │
│ • Cache Invalidation │ • Subscription Manager           │
│ • Optimistic Updates │ • Change Notifications           │
├──────────────────────┴──────────────────────────────────┤
│              Infrastructure Layer                       │
├──────────────────────────────────────────────────────────┤
│ • Redis Cache        │ • ElasticSearch                  │
│ • PostgreSQL         │ • Message Queue                  │
└─────────────────────────────────────────────────────────┘
```

### Service Hierarchy

```
AI Catalog Composables
├── Core Assets
│   ├── Datasets
│   │   ├── Structured Data
│   │   ├── Unstructured Data
│   │   ├── Time Series
│   │   └── Streaming Data
│   ├── Models
│   │   ├── Pre-trained Models
│   │   ├── Custom Models
│   │   ├── Fine-tuned Models
│   │   └── Ensemble Models
│   ├── Experiments
│   │   ├── Training Runs
│   │   ├── Hyperparameter Tuning
│   │   ├── A/B Testing
│   │   └── Validation Results
│   ├── Pipelines
│   │   ├── Data Pipelines
│   │   ├── Training Pipelines
│   │   ├── Inference Pipelines
│   │   └── ETL Pipelines
│   └── Feature Sets
│       ├── Feature Engineering
│       ├── Feature Selection
│       ├── Feature Transforms
│       └── Feature Validation
├── Marketplace
│   ├── Company Models
│   │   ├── OpenAI Models
│   │   ├── Google Models
│   │   ├── Anthropic Models
│   │   └── Custom Providers
│   ├── Categories
│   │   ├── NLP
│   │   ├── Computer Vision
│   │   ├── Time Series
│   │   └── Reinforcement Learning
│   └── Ratings & Reviews
│       ├── User Ratings
│       ├── Expert Reviews
│       └── Performance Metrics
├── Deployment
│   ├── Endpoints
│   │   ├── REST Endpoints
│   │   ├── GraphQL Endpoints
│   │   ├── WebSocket Endpoints
│   │   └── Batch Endpoints
│   └── Policies
│       ├── Access Policies
│       ├── Rate Limiting
│       ├── Security Policies
│       └── Compliance Rules
└── Provenance
    ├── Audit Trail
    ├── Lineage Tracking
    ├── Version Control
    └── Compliance Records
```

## Entity Model

### Core Entities and Relationships

```
Dataset (1) ──────────────┬──── (*) Model
    │                     │
    │ (*)                │ (*)
    ├──── (*) Feature Set └──── (*) Experiment
    │                            │
    │ (*)                       │ (*)
    └──── (*) Pipeline ────────┴──── (*) Endpoint

Model (1) ────────────────┬──── (*) Version
    │                     │
    │ (*)                │ (1)
    ├──── (*) Experiment └──── (1) Provider
    │                            │
    │ (*)                       │ (*)
    ├──── (*) Rating            └──── (*) Category
    │
    │ (*)
    └──── (*) Deployment

Marketplace (1) ──────────┬──── (*) Company Model
    │                     │
    │ (*)                │ (*)
    ├──── (*) Provider   └──── (*) Category
    │
    │ (*)
    └──── (*) Trending

Provenance (1) ───────────┬──── (*) Audit Entry
    │                     │
    │ (*)                │ (*)
    ├──── (*) Lineage    └──── (*) Activity
    │
    │ (*)
    └──── (*) Compliance
```

### Entity Hierarchy

1. **Core Assets** (Foundation Level)
   - Datasets: Raw and processed data collections
   - Models: Trained AI/ML models
   - Experiments: Training and validation runs
   - Pipelines: Data and model workflows
   - Feature Sets: Engineered features

2. **Marketplace** (Business Level)
   - Company Models: Commercial AI models
   - Providers: Model vendors and platforms
   - Categories: Model classifications
   - Ratings: User and expert evaluations

3. **Deployment** (Operational Level)
   - Endpoints: Model serving interfaces
   - Policies: Access and governance rules
   - Monitoring: Performance tracking
   - Scaling: Resource management

4. **Provenance** (Compliance Level)
   - Audit Trail: Complete action history
   - Lineage: Data and model ancestry
   - Versioning: Change tracking
   - Compliance: Regulatory records

## Authentication & Authorization

### Authentication Flow

```
POST /api/v1/auth/login
Authorization: Bearer {token}
X-API-Key: {api-key}
X-Workspace-Id: {workspace-id}
```

### Authorization Model

```json
{
  "authorization": {
    "type": "RBAC + ABAC",
    "roles": {
      "catalog_admin": {
        "permissions": ["*"],
        "description": "Full catalog administration"
      },
      "data_scientist": {
        "permissions": [
          "dataset:*",
          "model:*",
          "experiment:*",
          "pipeline:*",
          "feature:*",
          "endpoint:create",
          "endpoint:read",
          "marketplace:read"
        ],
        "description": "Data science operations"
      },
      "ml_engineer": {
        "permissions": [
          "model:*",
          "pipeline:*",
          "endpoint:*",
          "deployment:*",
          "monitoring:*"
        ],
        "description": "ML engineering and deployment"
      },
      "marketplace_user": {
        "permissions": [
          "marketplace:read",
          "model:read",
          "rating:create",
          "favorite:*"
        ],
        "description": "Marketplace consumer"
      },
      "auditor": {
        "permissions": [
          "provenance:read",
          "audit:read",
          "compliance:read",
          "lineage:read"
        ],
        "description": "Compliance and audit access"
      },
      "viewer": {
        "permissions": [
          "*:read"
        ],
        "description": "Read-only access"
      }
    },
    "attributes": {
      "workspace": "string",
      "department": "string",
      "project": "string",
      "clearance_level": "integer"
    }
  }
}
```

## API Endpoints

### Base URL
```
https://api.ai-catalog.example.com/v1
```

### Dataset Management

```
# Dataset Operations
GET    /datasets                              # List datasets
GET    /datasets/{datasetId}                  # Get dataset details
POST   /datasets                              # Create dataset
PUT    /datasets/{datasetId}                  # Update dataset
DELETE /datasets/{datasetId}                  # Delete dataset
PATCH  /datasets/{datasetId}/metadata         # Update metadata

# Dataset Versions
GET    /datasets/{datasetId}/versions         # List versions
POST   /datasets/{datasetId}/versions         # Create version
GET    /datasets/{datasetId}/versions/{ver}   # Get version
POST   /datasets/{datasetId}/rollback         # Rollback version

# Dataset Operations
POST   /datasets/{datasetId}/validate         # Validate dataset
POST   /datasets/{datasetId}/profile          # Generate profile
GET    /datasets/{datasetId}/statistics       # Get statistics
POST   /datasets/{datasetId}/sample           # Get data sample
POST   /datasets/{datasetId}/transform        # Apply transformation

# Dataset Sharing
GET    /datasets/{datasetId}/permissions      # Get permissions
PUT    /datasets/{datasetId}/permissions      # Update permissions
POST   /datasets/{datasetId}/share            # Share dataset
POST   /datasets/{datasetId}/publish          # Publish to catalog

# Dataset Lineage
GET    /datasets/{datasetId}/lineage          # Get lineage
GET    /datasets/{datasetId}/dependencies     # Get dependencies
GET    /datasets/{datasetId}/consumers        # Get consumers
```

### Model Management

```
# Model Registry
GET    /models                                # List models
GET    /models/{modelId}                      # Get model details
POST   /models                                # Register model
PUT    /models/{modelId}                      # Update model
DELETE /models/{modelId}                      # Delete model
PATCH  /models/{modelId}/metadata             # Update metadata

# Model Versions
GET    /models/{modelId}/versions             # List versions
POST   /models/{modelId}/versions             # Create version
GET    /models/{modelId}/versions/{ver}       # Get version
POST   /models/{modelId}/promote              # Promote version
POST   /models/{modelId}/rollback             # Rollback version

# Model Operations
POST   /models/{modelId}/validate             # Validate model
POST   /models/{modelId}/evaluate             # Evaluate model
GET    /models/{modelId}/metrics              # Get metrics
POST   /models/{modelId}/predict              # Make prediction
POST   /models/{modelId}/batch-predict        # Batch prediction

# Model Deployment
POST   /models/{modelId}/deploy               # Deploy model
GET    /models/{modelId}/deployments          # List deployments
PUT    /models/{modelId}/deployments/{depId}  # Update deployment
DELETE /models/{modelId}/deployments/{depId}  # Undeploy

# Model Monitoring
GET    /models/{modelId}/performance          # Performance metrics
GET    /models/{modelId}/drift                # Drift detection
GET    /models/{modelId}/usage                # Usage statistics
POST   /models/{modelId}/retrain              # Trigger retraining
```

### Experiment Management

```
# Experiment Operations
GET    /experiments                           # List experiments
GET    /experiments/{experimentId}            # Get experiment
POST   /experiments                           # Create experiment
PUT    /experiments/{experimentId}            # Update experiment
DELETE /experiments/{experimentId}            # Delete experiment

# Experiment Runs
GET    /experiments/{experimentId}/runs       # List runs
POST   /experiments/{experimentId}/runs       # Create run
GET    /experiments/runs/{runId}              # Get run details
PUT    /experiments/runs/{runId}              # Update run
POST   /experiments/runs/{runId}/stop         # Stop run

# Experiment Metrics
POST   /experiments/runs/{runId}/log-metric   # Log metric
POST   /experiments/runs/{runId}/log-param    # Log parameter
POST   /experiments/runs/{runId}/log-artifact # Log artifact
GET    /experiments/runs/{runId}/metrics      # Get metrics
GET    /experiments/runs/{runId}/artifacts    # Get artifacts

# Experiment Comparison
POST   /experiments/compare                   # Compare experiments
GET    /experiments/{experimentId}/best-run   # Get best run
POST   /experiments/{experimentId}/visualize  # Visualize results
GET    /experiments/{experimentId}/report     # Generate report
```

### Pipeline Management

```
# Pipeline Registry
GET    /pipelines                             # List pipelines
GET    /pipelines/{pipelineId}                # Get pipeline
POST   /pipelines                             # Create pipeline
PUT    /pipelines/{pipelineId}                # Update pipeline
DELETE /pipelines/{pipelineId}                # Delete pipeline

# Pipeline Execution
POST   /pipelines/{pipelineId}/run            # Run pipeline
GET    /pipelines/{pipelineId}/runs           # List runs
GET    /pipelines/runs/{runId}                # Get run details
POST   /pipelines/runs/{runId}/stop           # Stop run
POST   /pipelines/runs/{runId}/retry          # Retry run

# Pipeline Components
GET    /pipelines/{pipelineId}/components     # List components
POST   /pipelines/{pipelineId}/components     # Add component
PUT    /pipelines/{pipelineId}/components/{id} # Update component
DELETE /pipelines/{pipelineId}/components/{id} # Remove component

# Pipeline Scheduling
POST   /pipelines/{pipelineId}/schedule       # Create schedule
GET    /pipelines/{pipelineId}/schedules      # List schedules
PUT    /pipelines/schedules/{scheduleId}      # Update schedule
DELETE /pipelines/schedules/{scheduleId}      # Delete schedule
```

### Feature Set Management

```
# Feature Store
GET    /feature-sets                          # List feature sets
GET    /feature-sets/{featureSetId}           # Get feature set
POST   /feature-sets                          # Create feature set
PUT    /feature-sets/{featureSetId}           # Update feature set
DELETE /feature-sets/{featureSetId}           # Delete feature set

# Feature Operations
GET    /feature-sets/{featureSetId}/features  # List features
POST   /feature-sets/{featureSetId}/features  # Add features
PUT    /features/{featureId}                  # Update feature
DELETE /features/{featureId}                  # Remove feature

# Feature Serving
GET    /feature-sets/{featureSetId}/serve     # Serve features
POST   /feature-sets/{featureSetId}/compute   # Compute features
GET    /feature-sets/{featureSetId}/stats     # Get statistics
POST   /feature-sets/{featureSetId}/validate  # Validate features

# Feature Lineage
GET    /feature-sets/{featureSetId}/lineage   # Get lineage
GET    /feature-sets/{featureSetId}/impact    # Impact analysis
GET    /feature-sets/{featureSetId}/usage     # Usage tracking
```

### Endpoint Management

```
# Endpoint Registry
GET    /endpoints                             # List endpoints
GET    /endpoints/{endpointId}                # Get endpoint
POST   /endpoints                             # Create endpoint
PUT    /endpoints/{endpointId}                # Update endpoint
DELETE /endpoints/{endpointId}                # Delete endpoint

# Endpoint Configuration
GET    /endpoints/{endpointId}/config         # Get configuration
PUT    /endpoints/{endpointId}/config         # Update config
POST   /endpoints/{endpointId}/scale          # Scale endpoint
POST   /endpoints/{endpointId}/restart        # Restart endpoint

# Endpoint Monitoring
GET    /endpoints/{endpointId}/status         # Get status
GET    /endpoints/{endpointId}/health         # Health check
GET    /endpoints/{endpointId}/metrics        # Get metrics
GET    /endpoints/{endpointId}/logs           # Get logs

# Endpoint Usage
POST   /endpoints/{endpointId}/invoke         # Invoke endpoint
POST   /endpoints/{endpointId}/batch-invoke   # Batch invoke
GET    /endpoints/{endpointId}/usage          # Usage statistics
GET    /endpoints/{endpointId}/billing        # Billing info
```

### Policy Management

```
# Policy Registry
GET    /policies                              # List policies
GET    /policies/{policyId}                   # Get policy
POST   /policies                              # Create policy
PUT    /policies/{policyId}                   # Update policy
DELETE /policies/{policyId}                   # Delete policy

# Policy Types
GET    /policies/access                       # Access policies
GET    /policies/security                     # Security policies
GET    /policies/compliance                   # Compliance policies
GET    /policies/governance                   # Governance policies

# Policy Enforcement
POST   /policies/{policyId}/enable            # Enable policy
POST   /policies/{policyId}/disable           # Disable policy
POST   /policies/{policyId}/evaluate          # Evaluate policy
GET    /policies/{policyId}/violations        # Get violations

# Policy Reporting
GET    /policies/{policyId}/report            # Policy report
GET    /policies/compliance-report            # Compliance report
GET    /policies/audit-report                  # Audit report
```

### Marketplace Operations

```
# Model Marketplace
GET    /marketplace/models                    # List marketplace models
GET    /marketplace/models/{modelId}          # Get model details
POST   /marketplace/models                    # Publish model
PUT    /marketplace/models/{modelId}          # Update listing
DELETE /marketplace/models/{modelId}          # Remove listing

# Categories & Providers
GET    /marketplace/categories                # List categories
GET    /marketplace/categories/{catId}/models # Models by category
GET    /marketplace/providers                 # List providers
GET    /marketplace/providers/{provId}/models # Models by provider

# Search & Filter
POST   /marketplace/search                    # Search marketplace
GET    /marketplace/trending                  # Trending models
GET    /marketplace/recommended               # Recommended models
GET    /marketplace/new                       # New models
GET    /marketplace/popular                   # Popular models

# Ratings & Reviews
GET    /marketplace/models/{modelId}/ratings  # Get ratings
POST   /marketplace/models/{modelId}/rate     # Rate model
GET    /marketplace/models/{modelId}/reviews  # Get reviews
POST   /marketplace/models/{modelId}/review   # Write review

# Favorites & Subscriptions
GET    /marketplace/favorites                 # Get favorites
POST   /marketplace/favorites/{modelId}       # Add favorite
DELETE /marketplace/favorites/{modelId}       # Remove favorite
POST   /marketplace/subscribe/{modelId}       # Subscribe to updates
DELETE /marketplace/subscribe/{modelId}       # Unsubscribe
```

### Provenance & Auditing

```
# Provenance Tracking
GET    /provenance                            # List provenance records
GET    /provenance/{recordId}                 # Get record details
POST   /provenance/query                      # Query provenance
GET    /provenance/lineage/{artifactId}       # Get lineage

# Audit Trail
GET    /audit                                 # List audit entries
GET    /audit/{entryId}                       # Get entry details
POST   /audit/search                          # Search audit trail
GET    /audit/export                          # Export audit log

# Activity Tracking
GET    /activity                              # Activity stream
GET    /activity/user/{userId}                # User activity
GET    /activity/artifact/{artifactId}        # Artifact activity
POST   /activity/subscribe                    # Subscribe to activity

# Compliance
GET    /compliance/status                     # Compliance status
GET    /compliance/reports                    # Compliance reports
POST   /compliance/validate                   # Validate compliance
GET    /compliance/certifications             # Get certifications
```

### Filter & Search Operations

```
# Advanced Search
POST   /search                                # Global search
POST   /search/datasets                       # Search datasets
POST   /search/models                         # Search models
POST   /search/experiments                    # Search experiments
POST   /search/pipelines                      # Search pipelines

# Filtering
GET    /filters/options                       # Get filter options
POST   /filters/apply                         # Apply filters
POST   /filters/save                          # Save filter preset
GET    /filters/presets                       # Get saved presets

# Sorting
GET    /sort/options                          # Get sort options
POST   /sort/apply                            # Apply sorting
GET    /sort/defaults                         # Get defaults
```

### Real-time Operations

```
# WebSocket Connections
WS     /ws/connect                            # Establish connection
WS     /ws/subscribe/{channel}                # Subscribe to channel
WS     /ws/unsubscribe/{channel}              # Unsubscribe
WS     /ws/heartbeat                          # Heartbeat

# Event Subscriptions
POST   /events/subscribe                      # Subscribe to events
DELETE /events/subscribe/{subId}              # Unsubscribe
GET    /events/subscriptions                  # List subscriptions
POST   /events/filter                         # Filter events

# Notifications
GET    /notifications                         # Get notifications
POST   /notifications/mark-read               # Mark as read
DELETE /notifications/{notifId}               # Delete notification
POST   /notifications/preferences             # Update preferences
```

## Data Models

### Dataset Entity

```json
{
  "id": "dataset-001",
  "name": "Customer Behavior Dataset",
  "description": "Historical customer interaction data",
  "type": "structured",
  "format": "parquet",
  "size": "5.2GB",
  "recordCount": 10000000,
  "created": "2023-01-15T10:00:00Z",
  "updated": "2023-06-15T14:30:00Z",
  "version": "2.1.0",
  "owner": "data-team",
  "tags": ["customer", "behavior", "analytics"],
  "schema": {
    "fields": [
      {
        "name": "customer_id",
        "type": "string",
        "nullable": false
      },
      {
        "name": "timestamp",
        "type": "timestamp",
        "nullable": false
      },
      {
        "name": "action",
        "type": "string",
        "nullable": false
      },
      {
        "name": "value",
        "type": "float",
        "nullable": true
      }
    ]
  },
  "statistics": {
    "nullCount": 1250,
    "uniqueValues": 85000,
    "mean": 42.5,
    "median": 38.0,
    "stdDev": 15.3
  },
  "quality": {
    "completeness": 99.8,
    "validity": 98.5,
    "consistency": 99.2,
    "accuracy": 97.8
  },
  "location": {
    "type": "s3",
    "path": "s3://data-lake/datasets/customer-behavior/",
    "region": "us-east-1"
  },
  "lineage": {
    "sources": ["raw-events", "customer-profiles"],
    "transformations": ["dedup", "aggregate", "normalize"],
    "consumers": ["model-001", "pipeline-003"]
  },
  "access": {
    "level": "internal",
    "groups": ["data-scientists", "analysts"],
    "restrictions": ["no-export", "anonymized"]
  }
}
```

### Model Entity

```json
{
  "id": "model-001",
  "name": "Customer Churn Predictor",
  "description": "Predicts customer churn probability",
  "type": "classification",
  "framework": "tensorflow",
  "version": "3.2.0",
  "status": "deployed",
  "created": "2023-03-01T09:00:00Z",
  "updated": "2023-06-10T16:45:00Z",
  "owner": "ml-team",
  "tags": ["churn", "customer", "classification"],
  "provider": "internal",
  "category": "predictive-analytics",
  "architecture": {
    "type": "neural-network",
    "layers": 8,
    "parameters": 1500000,
    "inputShape": [100],
    "outputShape": [2]
  },
  "training": {
    "dataset": "dataset-001",
    "epochs": 100,
    "batchSize": 256,
    "optimizer": "adam",
    "loss": "binary_crossentropy",
    "duration": "4h 32m",
    "cost": "$125.50"
  },
  "performance": {
    "accuracy": 0.945,
    "precision": 0.932,
    "recall": 0.928,
    "f1Score": 0.930,
    "auc": 0.972,
    "latency": "15ms",
    "throughput": "1000 req/s"
  },
  "deployment": {
    "endpoint": "endpoint-001",
    "instances": 3,
    "autoScaling": true,
    "region": "us-east-1",
    "environment": "production"
  },
  "monitoring": {
    "driftThreshold": 0.05,
    "performanceThreshold": 0.90,
    "alerting": true,
    "retrainingSchedule": "monthly"
  },
  "marketplace": {
    "published": true,
    "price": "free",
    "rating": 4.7,
    "downloads": 1250,
    "reviews": 48
  }
}
```

### Experiment Entity

```json
{
  "id": "experiment-001",
  "name": "Hyperparameter Optimization",
  "description": "Grid search for optimal hyperparameters",
  "status": "completed",
  "created": "2023-06-01T10:00:00Z",
  "completed": "2023-06-02T15:30:00Z",
  "owner": "john.doe@example.com",
  "tags": ["optimization", "hyperparameter", "grid-search"],
  "configuration": {
    "model": "model-001",
    "dataset": "dataset-001",
    "framework": "mlflow",
    "trackingServer": "https://mlflow.example.com"
  },
  "parameters": {
    "learningRate": [0.001, 0.01, 0.1],
    "batchSize": [32, 64, 128, 256],
    "epochs": [50, 100, 200],
    "dropout": [0.2, 0.3, 0.4]
  },
  "runs": [
    {
      "id": "run-001",
      "parameters": {
        "learningRate": 0.01,
        "batchSize": 128,
        "epochs": 100,
        "dropout": 0.3
      },
      "metrics": {
        "accuracy": 0.942,
        "loss": 0.125,
        "valAccuracy": 0.935,
        "valLoss": 0.142
      },
      "duration": "45m",
      "status": "completed"
    }
  ],
  "bestRun": {
    "id": "run-001",
    "metric": "valAccuracy",
    "value": 0.935
  },
  "artifacts": [
    {
      "name": "model.h5",
      "type": "model",
      "size": "125MB",
      "path": "s3://experiments/experiment-001/run-001/model.h5"
    },
    {
      "name": "metrics.json",
      "type": "metrics",
      "size": "2KB",
      "path": "s3://experiments/experiment-001/run-001/metrics.json"
    }
  ],
  "visualization": {
    "charts": ["accuracy-curve", "loss-curve", "parameter-importance"],
    "reports": ["summary.html", "detailed-analysis.pdf"]
  }
}
```

### Pipeline Entity

```json
{
  "id": "pipeline-001",
  "name": "Customer Analytics Pipeline",
  "description": "End-to-end customer data processing",
  "type": "data-processing",
  "status": "active",
  "created": "2023-02-01T08:00:00Z",
  "updated": "2023-06-14T11:20:00Z",
  "owner": "data-engineering",
  "tags": ["etl", "customer", "analytics"],
  "components": [
    {
      "id": "comp-001",
      "name": "Data Ingestion",
      "type": "source",
      "config": {
        "source": "kafka",
        "topic": "customer-events",
        "format": "json"
      }
    },
    {
      "id": "comp-002",
      "name": "Data Validation",
      "type": "transform",
      "config": {
        "rules": ["schema-validation", "range-check"],
        "errorHandling": "quarantine"
      }
    },
    {
      "id": "comp-003",
      "name": "Feature Engineering",
      "type": "transform",
      "config": {
        "features": ["aggregations", "rolling-windows"],
        "featureSet": "feature-set-001"
      }
    },
    {
      "id": "comp-004",
      "name": "Model Scoring",
      "type": "model",
      "config": {
        "model": "model-001",
        "batchSize": 1000,
        "timeout": "30s"
      }
    },
    {
      "id": "comp-005",
      "name": "Result Storage",
      "type": "sink",
      "config": {
        "destination": "postgres",
        "table": "predictions",
        "mode": "append"
      }
    }
  ],
  "schedule": {
    "type": "cron",
    "expression": "0 */6 * * *",
    "timezone": "UTC"
  },
  "monitoring": {
    "sla": {
      "completionTime": "2h",
      "successRate": 99.5
    },
    "alerts": ["email", "slack"],
    "metrics": ["throughput", "latency", "error-rate"]
  },
  "execution": {
    "runtime": "spark",
    "resources": {
      "driver": "4 cores, 16GB",
      "executors": "8 x (2 cores, 8GB)"
    },
    "dependencies": ["spark-3.2", "pandas", "numpy"]
  }
}
```

### Feature Set Entity

```json
{
  "id": "feature-set-001",
  "name": "Customer Features",
  "description": "Engineered features for customer analytics",
  "version": "1.5.0",
  "created": "2023-04-01T12:00:00Z",
  "updated": "2023-06-15T09:30:00Z",
  "owner": "feature-engineering-team",
  "tags": ["customer", "behavioral", "demographic"],
  "features": [
    {
      "name": "days_since_last_purchase",
      "type": "numeric",
      "dtype": "float32",
      "description": "Days elapsed since last purchase",
      "computation": "current_date - last_purchase_date",
      "statistics": {
        "mean": 45.2,
        "std": 28.7,
        "min": 0,
        "max": 365
      }
    },
    {
      "name": "total_spend_30d",
      "type": "numeric",
      "dtype": "float64",
      "description": "Total spending in last 30 days",
      "computation": "sum(amount) where date >= current_date - 30",
      "statistics": {
        "mean": 250.50,
        "std": 180.25,
        "min": 0,
        "max": 5000
      }
    },
    {
      "name": "preferred_category",
      "type": "categorical",
      "dtype": "string",
      "description": "Most purchased product category",
      "computation": "mode(category) group by customer_id",
      "cardinality": 25
    }
  ],
  "source": {
    "datasets": ["dataset-001", "dataset-002"],
    "tables": ["customers", "transactions"],
    "refreshSchedule": "daily"
  },
  "storage": {
    "type": "feature-store",
    "backend": "redis",
    "ttl": "7 days",
    "partitioning": "customer_id"
  },
  "serving": {
    "online": true,
    "offline": true,
    "latencySLA": "50ms",
    "throughput": "10000 req/s"
  },
  "validation": {
    "rules": [
      {
        "feature": "days_since_last_purchase",
        "rule": "range",
        "min": 0,
        "max": 365
      },
      {
        "feature": "total_spend_30d",
        "rule": "non-negative"
      }
    ],
    "monitoring": true
  }
}
```

### Marketplace Model Entity

```json
{
  "id": "marketplace-model-001",
  "name": "GPT-4 Turbo",
  "provider": "OpenAI",
  "category": "NLP",
  "description": "Advanced language model with 128K context",
  "version": "1.0.0",
  "released": "2023-11-06T00:00:00Z",
  "lastUpdated": "2023-06-15T12:00:00Z",
  "status": "available",
  "pricing": {
    "model": "usage-based",
    "input": "$0.01 per 1K tokens",
    "output": "$0.03 per 1K tokens",
    "freeQuota": "1000 tokens/day"
  },
  "capabilities": [
    "text-generation",
    "code-generation",
    "translation",
    "summarization",
    "question-answering"
  ],
  "specifications": {
    "contextWindow": 128000,
    "maxOutput": 4096,
    "languages": ["multi-lingual"],
    "apiVersion": "v1"
  },
  "performance": {
    "latency": "500ms avg",
    "throughput": "100 req/s",
    "availability": "99.9%"
  },
  "rating": {
    "average": 4.8,
    "count": 2543,
    "distribution": {
      "5": 2100,
      "4": 350,
      "3": 75,
      "2": 15,
      "1": 3
    }
  },
  "usage": {
    "downloads": 125000,
    "activeUsers": 35000,
    "apiCalls": "10M/month"
  },
  "documentation": {
    "quickStart": "https://docs.openai.com/quickstart",
    "apiReference": "https://docs.openai.com/api",
    "examples": "https://github.com/openai/examples"
  },
  "compliance": {
    "certifications": ["SOC2", "GDPR", "HIPAA"],
    "dataResidency": ["US", "EU"],
    "encryption": "AES-256"
  },
  "isFavorite": false,
  "userTags": [],
  "integrations": ["langchain", "llamaindex", "huggingface"]
}
```

### Provenance Entity

```json
{
  "id": "prov-001",
  "timestamp": "2023-06-15T14:30:00Z",
  "type": "model",
  "action": "deployment",
  "artifact": "model-001",
  "artifactVersion": "3.2.0",
  "user": "john.doe@example.com",
  "role": "ml-engineer",
  "description": "Deployed model to production endpoint",
  "metadata": {
    "environment": "production",
    "endpoint": "endpoint-001",
    "previousVersion": "3.1.0",
    "reason": "performance improvements"
  },
  "lineage": {
    "upstream": [
      {
        "type": "dataset",
        "id": "dataset-001",
        "version": "2.1.0"
      },
      {
        "type": "experiment",
        "id": "experiment-001"
      }
    ],
    "downstream": [
      {
        "type": "pipeline",
        "id": "pipeline-001"
      },
      {
        "type": "endpoint",
        "id": "endpoint-001"
      }
    ]
  },
  "changes": {
    "configuration": {
      "before": {
        "instances": 2,
        "memory": "8GB"
      },
      "after": {
        "instances": 3,
        "memory": "16GB"
      }
    }
  },
  "compliance": {
    "approved": true,
    "approver": "manager@example.com",
    "approvalDate": "2023-06-15T14:00:00Z",
    "policies": ["deployment-policy", "production-gate"]
  },
  "impact": {
    "services": ["prediction-api", "recommendation-engine"],
    "users": 5000,
    "criticality": "high"
  },
  "audit": {
    "sessionId": "session-xyz-123",
    "ipAddress": "10.0.1.50",
    "userAgent": "AI-Catalog-CLI/2.0",
    "requestId": "req-abc-456"
  }
}
```

## Filtering & Search

### Advanced Filtering System

```json
{
  "filters": {
    "datasets": {
      "type": ["structured", "unstructured", "streaming"],
      "format": ["parquet", "csv", "json", "avro"],
      "size": {
        "min": "1MB",
        "max": "1TB"
      },
      "quality": {
        "completeness": ">95%",
        "validity": ">90%"
      },
      "tags": ["customer", "financial", "operational"],
      "owner": ["data-team", "analytics-team"],
      "created": {
        "from": "2023-01-01",
        "to": "2023-12-31"
      }
    },
    "models": {
      "type": ["classification", "regression", "clustering"],
      "framework": ["tensorflow", "pytorch", "scikit-learn"],
      "status": ["draft", "validated", "deployed"],
      "performance": {
        "accuracy": ">0.90",
        "latency": "<100ms"
      },
      "category": ["nlp", "computer-vision", "time-series"],
      "provider": ["openai", "google", "anthropic", "internal"]
    },
    "marketplace": {
      "rating": {
        "min": 4.0,
        "max": 5.0
      },
      "pricing": ["free", "freemium", "paid"],
      "downloads": ">1000",
      "trending": true,
      "certified": true
    },
    "provenance": {
      "type": ["create", "update", "delete", "deploy"],
      "user": ["specific-user", "team", "system"],
      "timeRange": {
        "last24h": true,
        "last7d": true,
        "last30d": true,
        "custom": {
          "from": "2023-06-01",
          "to": "2023-06-15"
        }
      },
      "artifact": ["model", "dataset", "pipeline", "experiment"],
      "compliance": ["approved", "pending", "rejected"]
    }
  }
}
```

### Search Query DSL

```json
{
  "search": {
    "query": "customer churn prediction",
    "fields": ["name", "description", "tags"],
    "filters": {
      "type": "model",
      "category": "classification",
      "performance.accuracy": ">0.90"
    },
    "sort": [
      {
        "field": "rating",
        "order": "desc"
      },
      {
        "field": "updated",
        "order": "desc"
      }
    ],
    "pagination": {
      "page": 1,
      "size": 20
    },
    "facets": ["category", "provider", "framework"],
    "highlight": {
      "fields": ["description"],
      "preTag": "<mark>",
      "postTag": "</mark>"
    }
  }
}
```

## Marketplace Management

### Marketplace Features

1. **Discovery**
   - Trending models based on usage and ratings
   - Personalized recommendations
   - Category-based browsing
   - Provider showcases

2. **Evaluation**
   - Free tier/trial access
   - Playground environment
   - Performance benchmarks
   - Comparison tools

3. **Integration**
   - One-click deployment
   - SDK/API access
   - Pre-built integrations
   - Custom connectors

4. **Monetization**
   - Usage-based pricing
   - Subscription tiers
   - Revenue sharing
   - Billing management

### Recommendation Engine

```json
{
  "recommendations": {
    "user": "user-123",
    "context": {
      "currentProject": "customer-analytics",
      "recentSearches": ["churn", "segmentation"],
      "usedModels": ["model-001", "model-002"]
    },
    "strategies": [
      {
        "type": "collaborative",
        "weight": 0.3,
        "similar_users": ["user-456", "user-789"]
      },
      {
        "type": "content-based",
        "weight": 0.4,
        "features": ["category", "tags", "performance"]
      },
      {
        "type": "trending",
        "weight": 0.2,
        "timeWindow": "7d"
      },
      {
        "type": "personalized",
        "weight": 0.1,
        "userProfile": {
          "preferences": ["nlp", "high-accuracy"],
          "experience": "intermediate"
        }
      }
    ],
    "results": [
      {
        "modelId": "marketplace-model-002",
        "score": 0.92,
        "reason": "Similar to your recent usage patterns"
      },
      {
        "modelId": "marketplace-model-003",
        "score": 0.87,
        "reason": "Trending in your domain"
      }
    ]
  }
}
```

## Provenance & Auditing

### Lineage Tracking

```json
{
  "lineage": {
    "artifact": {
      "id": "model-001",
      "type": "model",
      "version": "3.2.0"
    },
    "graph": {
      "nodes": [
        {
          "id": "dataset-001",
          "type": "dataset",
          "label": "Training Data"
        },
        {
          "id": "feature-set-001",
          "type": "features",
          "label": "Engineered Features"
        },
        {
          "id": "experiment-001",
          "type": "experiment",
          "label": "Training Run"
        },
        {
          "id": "model-001",
          "type": "model",
          "label": "Trained Model"
        },
        {
          "id": "endpoint-001",
          "type": "endpoint",
          "label": "Deployment"
        }
      ],
      "edges": [
        {
          "source": "dataset-001",
          "target": "feature-set-001",
          "relationship": "feeds"
        },
        {
          "source": "feature-set-001",
          "target": "experiment-001",
          "relationship": "used-by"
        },
        {
          "source": "experiment-001",
          "target": "model-001",
          "relationship": "produces"
        },
        {
          "source": "model-001",
          "target": "endpoint-001",
          "relationship": "deployed-to"
        }
      ]
    },
    "impact": {
      "upstream": ["dataset-001", "feature-set-001"],
      "downstream": ["pipeline-001", "pipeline-002", "dashboard-001"],
      "critical": ["production-api", "customer-recommendations"]
    }
  }
}
```

## Real-time Updates

### WebSocket Events

```json
{
  "websocket": {
    "channels": [
      {
        "name": "catalog-updates",
        "events": [
          "artifact.created",
          "artifact.updated",
          "artifact.deleted",
          "artifact.deployed"
        ]
      },
      {
        "name": "marketplace",
        "events": [
          "model.published",
          "model.rated",
          "model.trending",
          "price.changed"
        ]
      },
      {
        "name": "experiments",
        "events": [
          "experiment.started",
          "experiment.completed",
          "metrics.logged",
          "best-run.updated"
        ]
      },
      {
        "name": "provenance",
        "events": [
          "audit.logged",
          "compliance.violation",
          "approval.required",
          "lineage.updated"
        ]
      }
    ],
    "subscription": {
      "filter": {
        "types": ["model", "dataset"],
        "owners": ["my-team"],
        "tags": ["production"]
      },
      "throttle": {
        "maxEvents": 100,
        "window": "1s"
      }
    }
  }
}
```

## Caching Strategy

### Multi-tier Cache Architecture

```json
{
  "caching": {
    "tiers": [
      {
        "name": "browser",
        "type": "local-storage",
        "ttl": "5m",
        "size": "10MB",
        "strategy": "lru",
        "data": ["user-preferences", "recent-searches", "favorites"]
      },
      {
        "name": "cdn",
        "type": "edge-cache",
        "ttl": "1h",
        "regions": ["us-east", "eu-west", "ap-south"],
        "data": ["static-assets", "marketplace-listings", "documentation"]
      },
      {
        "name": "application",
        "type": "redis",
        "ttl": "15m",
        "eviction": "lfu",
        "data": ["filtered-results", "computed-metrics", "aggregations"]
      },
      {
        "name": "database",
        "type": "query-cache",
        "ttl": "5m",
        "size": "1GB",
        "data": ["frequent-queries", "join-results", "materialized-views"]
      }
    ],
    "invalidation": {
      "strategies": [
        "time-based",
        "event-driven",
        "dependency-tracking"
      ],
      "events": [
        "data.updated",
        "model.deployed",
        "configuration.changed"
      ]
    },
    "optimization": {
      "prefetch": ["trending-models", "user-recommendations"],
      "warmup": ["popular-datasets", "featured-models"],
      "compression": true,
      "etag": true
    }
  }
}
```

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "CATALOG_001",
    "message": "Model not found",
    "details": {
      "modelId": "model-999",
      "timestamp": "2023-06-15T14:30:00Z",
      "suggestion": "Check model ID or use search to find similar models"
    },
    "context": {
      "requestId": "req-abc-123",
      "traceId": "trace-xyz-789",
      "userId": "user-123"
    },
    "documentation": "https://docs.ai-catalog.com/errors#CATALOG_001"
  }
}
```

### Error Codes

```
# Catalog Errors
CATALOG_001: Resource not found
CATALOG_002: Duplicate resource
CATALOG_003: Invalid resource format
CATALOG_004: Resource locked
CATALOG_005: Version conflict

# Marketplace Errors
MARKET_001: Model not available
MARKET_002: Insufficient credits
MARKET_003: Rate limit exceeded
MARKET_004: Invalid subscription
MARKET_005: Provider unavailable

# Filter Errors
FILTER_001: Invalid filter syntax
FILTER_002: Unsupported filter field
FILTER_003: Filter value out of range
FILTER_004: Too many filters
FILTER_005: Conflicting filters

# Provenance Errors
PROV_001: Lineage cycle detected
PROV_002: Missing audit trail
PROV_003: Compliance violation
PROV_004: Invalid provenance chain
PROV_005: Unauthorized access to history

# Real-time Errors
RT_001: WebSocket connection failed
RT_002: Channel subscription failed
RT_003: Event stream interrupted
RT_004: Message queue full
RT_005: Synchronization conflict
```

## Implementation Guidelines

### Composable Architecture Principles

1. **Reactive State Management**
   - Single source of truth
   - Immutable state updates
   - Optimistic UI updates
   - Automatic dependency tracking

2. **Composition Patterns**
   ```javascript
   // Composable pattern
   const useFilteredModels = () => {
     const { models, filters } = useAICatalogData()
     const filtered = computed(() => applyFilters(models.value, filters.value))
     return { filtered }
   }
   ```

3. **Performance Optimization**
   - Lazy loading of data
   - Virtual scrolling for large lists
   - Debounced search and filter
   - Memoized computations

4. **Error Recovery**
   - Automatic retry with exponential backoff
   - Fallback to cached data
   - Graceful degradation
   - User-friendly error messages

### API Standards

1. **RESTful Design**
   - Resource-oriented URLs
   - Proper HTTP status codes
   - Consistent response structure
   - HATEOAS links

2. **Pagination**
   ```json
   {
     "data": [...],
     "pagination": {
       "page": 1,
       "pageSize": 20,
       "totalPages": 10,
       "totalCount": 200,
       "hasNext": true,
       "hasPrevious": false
     },
     "links": {
       "self": "/api/v1/models?page=1",
       "next": "/api/v1/models?page=2",
       "last": "/api/v1/models?page=10"
     }
   }
   ```

3. **Versioning**
   - URL path versioning (/v1/, /v2/)
   - Backward compatibility
   - Deprecation warnings
   - Migration documentation

## Conclusion

This comprehensive REST API design for the Composables AI Catalog System provides:

1. **Reactive Data Management**: Composable patterns for efficient state management
2. **Complete Asset Lifecycle**: Management of datasets, models, experiments, pipelines, and features
3. **Enterprise Marketplace**: Discovery, evaluation, and integration of AI models
4. **Advanced Filtering**: Multi-dimensional filtering and search capabilities
5. **Real-time Synchronization**: WebSocket-based live updates and notifications
6. **Comprehensive Provenance**: Complete audit trail and lineage tracking
7. **Performance Optimization**: Multi-tier caching and reactive updates
8. **Enterprise Security**: Role-based access control with attribute-based policies

The API enables organizations to build reactive, performant AI catalog applications with enterprise-grade features for managing the complete lifecycle of AI/ML assets through modern composable architecture patterns.