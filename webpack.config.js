const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            "./src/main.js"
        ],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./js/app.bundle.js",
    },
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: './css/app.bundle.css'
        })
    ],
};