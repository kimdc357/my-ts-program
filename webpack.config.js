const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        homepage: ['./src/homepage.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
                // loader: "awesome-typescript-loader"
            }
        ]
    },
   
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ],
    devServer:{
        port:3000,
        historyApiFallback:true,
    }
};
