const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    ignoreWarnings: [
        {
            module: /^(?!CriticalDependenciesWarnings$)/
        }
    ],
};