const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultPort = 3000;

module.exports = (env, argv) => {
const port = argv.port || process.env.PORT || defaultPort;

return {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']
            }
        }
        }
    ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'My Game',
        template: 'public/index.html'
    })
    ],
    devServer: {
    port: port,
    compress: true,
    open: true
    }
};
};