export const moduleFederationMockData = {
    applications: [
        {
            id: 1,
            name: 'Shell Application',
            host: 'shell-app',
            version: 'v2.1.0',
            status: 'active',
            health: 'healthy',
            remotes: [
                {
                    name: 'headerModule',
                    url: 'http://localhost:3001/remoteEntry.js',
                    exposedModules: ['./Header', './Navigation', './UserMenu'],
                    loadTime: 245,
                    size: 156789,
                    lastUpdated: '2024-01-15T10:30:00Z'
                },
                {
                    name: 'dashboardModule',
                    url: 'http://localhost:3002/remoteEntry.js',
                    exposedModules: ['./Dashboard', './Analytics', './Charts'],
                    loadTime: 512,
                    size: 298456,
                    lastUpdated: '2024-01-15T09:45:00Z'
                },
                {
                    name: 'profileModule',
                    url: 'http://localhost:3003/remoteEntry.js',
                    exposedModules: ['./UserProfile', './Settings'],
                    loadTime: 189,
                    size: 98234,
                    lastUpdated: '2024-01-14T16:20:00Z'
                }
            ],
            config: {
                port: 3000,
                publicPath: 'auto',
                filename: 'remoteEntry.js',
                shared: ['react', 'react-dom', 'react-router-dom', '@mui/material']
            },
            metrics: {
                avgLoadTime: 315,
                successRate: 99.5,
                errorCount: 2
            },
            dependencies: {
                react: '^18.2.0',
                'react-dom': '^18.2.0',
                webpack: '^5.88.0',
                '@module-federation/enhanced': '^0.1.0'
            }
        },
        {
            id: 2,
            name: 'E-Commerce Platform',
            host: 'ecommerce-host',
            version: 'v1.5.2',
            status: 'active',
            health: 'warning',
            remotes: [
                {
                    name: 'productCatalog',
                    url: 'http://localhost:4001/remoteEntry.js',
                    exposedModules: ['./ProductList', './ProductDetail', './SearchBar'],
                    loadTime: 678,
                    size: 456789,
                    lastUpdated: '2024-01-15T11:00:00Z'
                },
                {
                    name: 'shoppingCart',
                    url: 'http://localhost:4002/remoteEntry.js',
                    exposedModules: ['./Cart', './Checkout', './PaymentForm'],
                    loadTime: 892,
                    size: 378234,
                    lastUpdated: '2024-01-15T08:30:00Z'
                },
                {
                    name: 'orderManagement',
                    url: 'http://localhost:4003/remoteEntry.js',
                    exposedModules: ['./OrderHistory', './OrderTracking', './Returns'],
                    loadTime: 456,
                    size: 234567,
                    lastUpdated: '2024-01-14T14:15:00Z'
                },
                {
                    name: 'reviewsModule',
                    url: 'http://localhost:4004/remoteEntry.js',
                    exposedModules: ['./ReviewList', './ReviewForm', './RatingStars'],
                    loadTime: 234,
                    size: 123456,
                    lastUpdated: '2024-01-15T10:00:00Z'
                }
            ],
            config: {
                port: 4000,
                publicPath: 'auto',
                filename: 'remoteEntry.js',
                shared: ['vue', 'vuex', 'vue-router', 'axios']
            },
            metrics: {
                avgLoadTime: 565,
                successRate: 97.8,
                errorCount: 15
            },
            dependencies: {
                vue: '^3.3.0',
                vuex: '^4.1.0',
                webpack: '^5.88.0',
                '@module-federation/enhanced': '^0.1.0'
            }
        },
        {
            id: 3,
            name: 'Admin Dashboard',
            host: 'admin-portal',
            version: 'v3.0.1',
            status: 'active',
            health: 'healthy',
            remotes: [
                {
                    name: 'analyticsModule',
                    url: 'http://localhost:5001/remoteEntry.js',
                    exposedModules: ['./RealtimeAnalytics', './Reports', './DataExport'],
                    loadTime: 1234,
                    size: 567890,
                    lastUpdated: '2024-01-15T12:00:00Z'
                },
                {
                    name: 'userManagement',
                    url: 'http://localhost:5002/remoteEntry.js',
                    exposedModules: ['./UserList', './RoleManagement', './Permissions'],
                    loadTime: 345,
                    size: 234567,
                    lastUpdated: '2024-01-15T11:30:00Z'
                },
                {
                    name: 'systemConfig',
                    url: 'http://localhost:5003/remoteEntry.js',
                    exposedModules: ['./ConfigPanel', './FeatureFlags', './APISettings'],
                    loadTime: 278,
                    size: 178234,
                    lastUpdated: '2024-01-14T17:45:00Z'
                }
            ],
            config: {
                port: 5000,
                publicPath: 'auto',
                filename: 'remoteEntry.js',
                shared: ['react', 'react-dom', 'antd', 'moment']
            },
            metrics: {
                avgLoadTime: 619,
                successRate: 99.9,
                errorCount: 1
            },
            dependencies: {
                react: '^18.2.0',
                'react-dom': '^18.2.0',
                antd: '^5.11.0',
                webpack: '^5.88.0'
            }
        },
        {
            id: 4,
            name: 'Content Management',
            host: 'cms-host',
            version: 'v2.2.0',
            status: 'inactive',
            health: 'critical',
            remotes: [
                {
                    name: 'editorModule',
                    url: 'http://localhost:6001/remoteEntry.js',
                    exposedModules: ['./RichTextEditor', './ImageUploader', './VideoPlayer'],
                    loadTime: 2345,
                    size: 789012,
                    lastUpdated: '2024-01-13T09:00:00Z'
                },
                {
                    name: 'mediaLibrary',
                    url: 'http://localhost:6002/remoteEntry.js',
                    exposedModules: ['./MediaGallery', './AssetManager', './ImageEditor'],
                    loadTime: 1567,
                    size: 678901,
                    lastUpdated: '2024-01-12T15:30:00Z'
                }
            ],
            config: {
                port: 6000,
                publicPath: 'auto',
                filename: 'remoteEntry.js',
                shared: ['angular', '@angular/core', '@angular/common', 'rxjs']
            },
            metrics: {
                avgLoadTime: 1956,
                successRate: 85.3,
                errorCount: 45
            },
            dependencies: {
                '@angular/core': '^16.0.0',
                '@angular/common': '^16.0.0',
                rxjs: '^7.8.0',
                webpack: '^5.88.0'
            }
        },
        {
            id: 5,
            name: 'Mobile Banking App',
            host: 'mobile-banking',
            version: 'v1.8.0',
            status: 'active',
            health: 'healthy',
            remotes: [
                {
                    name: 'accountModule',
                    url: 'http://localhost:7001/remoteEntry.js',
                    exposedModules: ['./AccountSummary', './TransactionHistory', './AccountSettings'],
                    loadTime: 432,
                    size: 345678,
                    lastUpdated: '2024-01-15T13:15:00Z'
                },
                {
                    name: 'transferModule',
                    url: 'http://localhost:7002/remoteEntry.js',
                    exposedModules: ['./TransferForm', './BeneficiaryList', './TransferHistory'],
                    loadTime: 567,
                    size: 289012,
                    lastUpdated: '2024-01-15T12:45:00Z'
                },
                {
                    name: 'billPayModule',
                    url: 'http://localhost:7003/remoteEntry.js',
                    exposedModules: ['./BillList', './PaymentScheduler', './PaymentHistory'],
                    loadTime: 389,
                    size: 234567,
                    lastUpdated: '2024-01-15T11:00:00Z'
                },
                {
                    name: 'securityModule',
                    url: 'http://localhost:7004/remoteEntry.js',
                    exposedModules: ['./BiometricAuth', './PinManagement', './DeviceRegistration'],
                    loadTime: 123,
                    size: 98765,
                    lastUpdated: '2024-01-15T14:00:00Z'
                }
            ],
            config: {
                port: 7000,
                publicPath: 'auto',
                filename: 'remoteEntry.js',
                shared: ['react-native', 'react', 'react-native-web', '@react-navigation/native']
            },
            metrics: {
                avgLoadTime: 378,
                successRate: 99.7,
                errorCount: 3
            },
            dependencies: {
                react: '^18.2.0',
                'react-native': '^0.72.0',
                'react-native-web': '^0.19.0',
                webpack: '^5.88.0'
            }
        }
    ],

    remoteApps: [
        {
            id: 'business-dashboard',
            name: 'Business Intelligence Dashboard',
            remoteName: 'helloWorld',
            remoteUrl: 'http://localhost:3001/assets/remoteEntry.js',
            cssUrl: 'http://localhost:3001/assets/style-osS_PlTx.css',
            modules: [
                {
                    name: 'BusinessDashboard',
                    exposedAs: './BusinessDashboard',
                    description: 'Complete business intelligence dashboard with KPIs and analytics',
                    type: 'component'
                },
                {
                    name: 'KPICard',
                    exposedAs: './KPICard',
                    description: 'Key performance indicator card component',
                    type: 'component'
                },
                {
                    name: 'ChartCard',
                    exposedAs: './ChartCard',
                    description: 'Flexible chart component supporting line, bar, and pie charts',
                    type: 'component'
                },
                {
                    name: 'ModelPerformance',
                    exposedAs: './ModelPerformance',
                    description: 'Machine learning model performance metrics display',
                    type: 'component'
                }
            ],
            status: 'active',
            framework: 'vue',
            version: '2.0.0'
        },
        {
            id: 'dashboard-widgets',
            name: 'Dashboard Widgets',
            remoteName: 'dashboardWidgets',
            remoteUrl: 'http://localhost:3002/assets/remoteEntry.js',
            cssUrl: 'http://localhost:3002/assets/styles.css',
            modules: [
                {
                    name: 'StatsCard',
                    exposedAs: './StatsCard',
                    description: 'Statistical data card component',
                    type: 'component'
                },
                {
                    name: 'ChartWidget',
                    exposedAs: './ChartWidget',
                    description: 'Interactive chart component',
                    type: 'component'
                },
                {
                    name: 'ActivityFeed',
                    exposedAs: './ActivityFeed',
                    description: 'Real-time activity feed',
                    type: 'component'
                }
            ],
            status: 'inactive',
            framework: 'vue',
            version: '2.1.0'
        },
        {
            id: 'user-management',
            name: 'User Management Suite',
            remoteName: 'userManagement',
            remoteUrl: 'http://localhost:3003/assets/remoteEntry.js',
            modules: [
                {
                    name: 'UserList',
                    exposedAs: './UserList',
                    description: 'User listing with search and filters',
                    type: 'component'
                },
                {
                    name: 'UserProfile',
                    exposedAs: './UserProfile',
                    description: 'User profile editor',
                    type: 'component'
                },
                {
                    name: 'RoleManager',
                    exposedAs: './RoleManager',
                    description: 'Role and permission management',
                    type: 'component'
                }
            ],
            status: 'inactive',
            framework: 'vue',
            version: '1.5.0'
        }
    ],

    remoteTemplates: [
        {
            id: 'react-component',
            name: 'React Component Template',
            framework: 'react',
            description: 'Basic React component exposed via Module Federation',
            config: {
                exposes: {
                    './Component': './src/Component'
                },
                shared: {
                    react: { singleton: true, requiredVersion: '^18.0.0' },
                    'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
                }
            }
        },
        {
            id: 'vue-component',
            name: 'Vue Component Template',
            framework: 'vue',
            description: 'Vue 3 component with Composition API',
            config: {
                exposes: {
                    './Component': './src/Component.vue'
                },
                shared: {
                    vue: { singleton: true, requiredVersion: '^3.0.0' }
                }
            }
        },
        {
            id: 'angular-module',
            name: 'Angular Module Template',
            framework: 'angular',
            description: 'Angular module with lazy loading support',
            config: {
                exposes: {
                    './Module': './src/app/remote/remote.module.ts'
                },
                shared: {
                    '@angular/core': { singleton: true, strictVersion: true },
                    '@angular/common': { singleton: true, strictVersion: true }
                }
            }
        }
    ]
};
