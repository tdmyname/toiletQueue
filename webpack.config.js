/**
 * Created by TANDONG on 2017/1/12.
 */
var OpenBrowser = require("open-browser-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        loaders: [
          {test:/\.css$/,loaders:['style-loader','css-loader']},
          {test: /\.js?$/, loader: "babel", exclude: path.resolve(__dirname, "node_modules")}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "首页"
        }),
        new OpenBrowser({
            url: "http://localhost:8080/"
        })
    ]
}