const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
 
module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json','jpg','png'],
        // alias: {
        //      img: path.resolve(__dirname, '/src/img/'
        //     　　)}
      },
    module: {
        rules: [{ 
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, { 
            test: /\.scss$/, 
            use: ["style-loader", 
            "css-loader",
            "sass-loader"]
         },
        //  {

        //     test: /\.(png|jpg)?$/,
        //     use: [
        //         {
        //           loader: 'url-loader',
        //           options: {
        //             limit: 8192
        //           }
        //         }
        //       ]
        // }
        {
            test: /\.(png|jpg|ico)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                  },
              },
            ],
          }
        
        //  {
        //     test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf|woff2)\??.*$/,
        //     use: [
        //       {
        //         loader: 'file-loader',
        //         options: {
        //           name: '[path][name].[ext]'
        //         }
        //       }
        //     ]
        //   },

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