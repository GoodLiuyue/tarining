const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.img|png|svg|woff|ogg$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};