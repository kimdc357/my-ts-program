
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
 
module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        main: './src/index.tsx'
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
        
    ],
    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}