const { ModuleResolutionKind } = require('typescript');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
 
const devConfig = {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',//'inline-source-map',

    devServer: {
        open: true,
        port: 3000,
        hot: true,
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    },
}

module.exports = merge(commonConfig,devConfig)