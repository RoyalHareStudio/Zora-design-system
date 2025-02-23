const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',  // Entry point for your components
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',  // The bundled file
        library: 'MyReactDesignSystem',  // The global variable name for your library
        libraryTarget: 'umd',  // Universal Module Definition
        umdNamedDefine: true,  // Support named AMD modules
    },
    externals: [nodeExternals()],  // Avoid bundling node_modules
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    mode: 'production',  // Use production mode for optimized output
};
