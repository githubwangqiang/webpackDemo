const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        hot: true
        // compress: true,
        // port: 9000,
        // 反向代理
        // proxy: {
            // "/api": {
            //     target: 'htto://localhost:3000',
            //     bypass: function(req, res, proxyOptions) {
            //         if (req.headers.accept.indexOf("html") !== -1) {
            //           console.log("Skipping proxy for browser request.");
            //           return "/index.html";
            //         }
            //     }
            // }
        // }
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: './index.html'
        }),
        new ExtractTextPlugin("[name].[hash:5].css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}