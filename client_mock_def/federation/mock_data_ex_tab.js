export const moduleFederationExConfig = {
    host: {
        name: 'convergeAppsHost',
        port: 5173,
        exposes: {},
        remotes: {
            helloWorld: 'helloWorld@http://localhost:3001/assets/remoteEntry.js'
        },
        shared: {
            vue: {
                singleton: true,
                requiredVersion: '^3.0.0'
            },
            'vue-router': {
                singleton: true,
                requiredVersion: '^4.0.0'
            }
        }
    },
    remoteApps: [
        {
            name: 'helloWorld',
            url: 'http://localhost:3001/assets/remoteEntry.js',
            scope: 'helloWorld',
            modules: ['./HelloWorld'],
            description: 'Simple Hello World remote application',
            status: 'available'
        }
    ]
};
