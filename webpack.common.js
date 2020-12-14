const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
 
module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json','jpg','png'],
      },
    module: {
        rules: [{ 
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                      }
                },
                {
                    loader: 'sass-loader' 
                }
            ]
        }
        ],
        
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