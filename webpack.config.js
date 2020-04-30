const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
    }, // can be an object | string | array
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        })
    ],
    mode: 'development',
};