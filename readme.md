# API Endpoints Statistics Report

> Generated: 2025-08-27T10:08:59.062Z

## 📊 Overall Statistics

| Metric | Value |
|--------|-------|
| **Total Endpoints** | 2395 |
| **Unique Path Patterns** | 1627 |
| **Total Files Scanned** | 14 |
| **Authentication Types** | Bearer Token, API Key |

## 🔄 Endpoints by HTTP Method

| Method | Count | Percentage | Visualization |
|--------|-------|------------|---------------|
| **GET** | 1210 | 50.5% | `██████████░░░░░░░░░░` |
| **POST** | 782 | 32.7% | `██████░░░░░░░░░░░░░░` |
| **PUT** | 210 | 8.8% | `█░░░░░░░░░░░░░░░░░░░` |
| **DELETE** | 165 | 6.9% | `█░░░░░░░░░░░░░░░░░░░` |
| **PATCH** | 28 | 1.2% | `░░░░░░░░░░░░░░░░░░░░` |

## 📦 Endpoints by API Group/Domain

| Group | Count | Percentage |
|-------|-------|------------|
| **catalog** | 273 | 11.4% |
| **pipelines** | 94 | 3.9% |
| **governance** | 92 | 3.8% |
| **deployments** | 87 | 3.6% |
| **marketplace** | 86 | 3.6% |
| **fl** | 72 | 3.0% |
| **projects** | 49 | 2.0% |
| **environments** | 46 | 1.9% |
| **testing** | 46 | 1.9% |
| **alerts** | 43 | 1.8% |
| **models** | 42 | 1.8% |
| **connections** | 42 | 1.8% |
| **kubernetes** | 42 | 1.8% |
| **monitoring** | 41 | 1.7% |
| **federation** | 41 | 1.7% |

## 🏷️ Endpoints by API Version

| Version | Count | Percentage |
|---------|-------|------------|
| **v1** | 336 | 14.0% |
| *(no version)* | 2059 | 86.0% |

## 📁 Endpoints by File

### 📄 ai-catalog-rest-api-design

- **Total Endpoints:** 276
- **Methods:** POST (85), GET (153), PUT (20), DELETE (13), PATCH (5)
- **Top Groups:** catalog (168), marketplace (36), governance (29), provenance (24), search (14)

### 📄 data-platform-rest-api-design

- **Total Endpoints:** 258
- **Methods:** POST (85), GET (131), PUT (22), DELETE (17), PATCH (3)
- **Top Groups:** ai-generator (31), tasks (22), documents (19), projects (17), email (16)

### 📄 ai-system-rest-api-design

- **Total Endpoints:** 239
- **Methods:** POST (85), GET (121), PUT (18), DELETE (14), PATCH (1)
- **Top Groups:** catalog (105), generator (29), marketplace (27), training (20), governance (20)

### 📄 assets-platform-rest-api-design

- **Total Endpoints:** 230
- **Methods:** POST (52), GET (134), PUT (21), DELETE (19), PATCH (4)
- **Top Groups:** fl (50), testing (46), budgets (33), services (23), charts (22)

### 📄 deployments-platform-rest-api-design

- **Total Endpoints:** 208
- **Methods:** POST (63), GET (111), PUT (21), DELETE (12), PATCH (1)
- **Top Groups:** kubernetes (42), deployments (33), artifacts (22), cloud (22), strategies (22)

### 📄 cicd-platform-rest-api-design

- **Total Endpoints:** 203
- **Methods:** POST (71), GET (98), PUT (17), DELETE (14), PATCH (3)
- **Top Groups:** pipelines (31), jobs (29), environments (23), ai-zones (18), builds (18)

### 📄 composables-ai-catalog-rest-api-design

- **Total Endpoints:** 192
- **Methods:** POST (69), GET (90), PUT (15), DELETE (16), PATCH (2)
- **Top Groups:** models (24), marketplace (23), datasets (22), experiments (19), pipelines (18)

### 📄 connections-platform-rest-api-design

- **Total Endpoints:** 179
- **Methods:** POST (64), GET (91), PUT (10), DELETE (11), PATCH (3)
- **Top Groups:** connections (42), clusters (26), federation (24), governance (19), aws (16)

### 📄 agentic-rest-api-design

- **Total Endpoints:** 167
- **Methods:** POST (51), GET (89), PUT (17), DELETE (9), PATCH (1)
- **Top Groups:** workbench (27), pipelines (23), agents (20), deployments (18), templates (17)

### 📄 admin-rest-api-design

- **Total Endpoints:** 119
- **Methods:** POST (27), GET (61), PUT (18), PATCH (3), DELETE (10)
- **Top Groups:** users (20), projects (19), roles (13), menus (12), admin (10)

### 📄 rag-platform-rest-api-design

- **Total Endpoints:** 107
- **Methods:** GET (39), POST (46), PUT (10), DELETE (10), PATCH (2)
- **Top Groups:** governance (24), data (17), experiments (14), deployments (13), monitoring (12)

### 📄 views-ui-platform-rest-api-design

- **Total Endpoints:** 86
- **Methods:** GET (31), POST (32), PUT (9), DELETE (14)
- **Top Groups:** views (13), personalization (13), components (11), themes (11), widgets (11)

### 📄 spark-services-platform-rest-api-design

- **Total Endpoints:** 84
- **Methods:** GET (36), POST (35), PUT (8), DELETE (5)
- **Top Groups:** spark (15), datasets (12), pipelines (11), processing (11), resources (11)

### 📄 federation-fl-platform-rest-api-design

- **Total Endpoints:** 47
- **Methods:** GET (25), POST (17), PUT (4), DELETE (1)
- **Top Groups:** fl (22), federation (17), integration (8)

## 🔍 Most Common Query Parameters

| Parameter | Occurrences |
|-----------|-------------|
| `status` | 20 |
| `search` | 20 |
| `type` | 19 |
| `limit` | 13 |
| `metrics` | 13 |
| `projectId` | 12 |
| `period` | 11 |
| `category` | 11 |
| `page` | 9 |
| `format` | 9 |
| `from` | 8 |
| `to` | 8 |
| `aggregation` | 5 |
| `framework` | 4 |
| `sort` | 4 |

## 🔗 Most Common Path Patterns

| Count | Pattern |
|-------|---------|
| 12 | `/alerts/{param}` |
| 10 | `/api/v{n}/auth/login` |
| 10 | `/alerts` |
| 10 | `/deployments/{param}` |
| 9 | `/projects/{param}` |
| 9 | `/pipelines/{param}` |
| 9 | `/marketplace/models/{param}` |
| 9 | `/governance/policies/{param}` |
| 8 | `/deployments` |
| 7 | `/environments/{param}` |

## 📈 Summary

| Metric | Value |
|--------|-------|
| **Average endpoints per file** | 171.1 |
| **Most common HTTP method** | GET (1210 endpoints) |
| **Largest API group** | catalog (273 endpoints) |
| **Total unique query parameters** | 92 |

---

# 🎯 Grand Total Summary

## 📊 Endpoint Totals

| Metric | Count |
|--------|-------|
| **Total Endpoints** | 2395 |
| **Total Files** | 14 |
| **Unique Path Patterns** | 1627 |
| **Total API Groups** | 118 |
| **Total API Versions** | 2 |

## 🔧 Operation Breakdown

| Operation Type | Count | Percentage |
|----------------|-------|------------|
| **READ** Operations (GET) | 1210 | 50.5% |
| **WRITE** Operations (POST/PUT/PATCH) | 1020 | 42.6% |
| **DELETE** Operations | 165 | 6.9% |

## 📊 Method Distribution

```
GET:    1210 ██████████████████████████████████████████████████
POST:    782 ██████████████████████████████████████████████████
PUT:     210 ██████████████████████████████████████████████████
DELETE:  165 ██████████████████████████████████████████████████
PATCH:    28 ██████████████
```

## 📐 Complexity Metrics

| Metric | Value |
|--------|-------|
| **Average Endpoints per File** | 171.1 |
| **Average Endpoints per Group** | 20.3 |
| **Total Query Parameter Uses** | 262 |
| **Unique Query Parameters** | 92 |
| **Authentication Methods** | 2 |

## 🏆 API Maturity Score

### Overall Score: **100/100**

| Category | Score | Status |
|----------|-------|--------|
| **Versioning** | 20/20 | ✅ Excellent |
| **Authentication** | 20/20 | ✅ Implemented |
| **Query Parameters** | 20/20 | ✅ Rich |
| **CRUD Coverage** | 40/40 | ✅ Complete |

---

> 📝 **Note:** This report provides a comprehensive analysis of your API structure.
> Use these metrics to identify areas for improvement and ensure API consistency.