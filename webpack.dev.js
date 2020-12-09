const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
 
module.exports = {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',//'inline-source-map',
    entry: {
        main: './src/index.tsx'
    },
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        hotOnly: true
    },
    module: {
        rules: [{ 
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }), 
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}