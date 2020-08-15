const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:{
        index: './src/index.js'
    },
    output:{
        path: __dirname + '/dist',
        filename:'[name].js',
        publicPath:"/"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: 'index.html',
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: __dirname + "/dist",
        port: 3002,
        open:true,
        hot:true
    },
    devtool: "source-map"

}