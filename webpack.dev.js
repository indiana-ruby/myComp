const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
//速度分析
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: './local/index.js',
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'local/index.html'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8082,
        open: true,
        hot: true,
        hotOnly: true
    }      
});
