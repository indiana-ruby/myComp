const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
//HardSourceWebpackPlugin效果不明显
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
//速度分析
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
//将每次都会改变且体积很小的文件内联到html里

module.exports = smp.wrap({
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.json' ],
        mainFields: [ 'loader', 'main' ]
    },
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 300,
            minChunks: 1,
            cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',  //抽取的chunk的名字
                    priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
                    minChunks: 1,  //最少被几个chunk引用
                    reuseExistingChunk: true,
                    enforce: true
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                }
             }
        },
        runtimeChunk: {
            name: entrypoint => `runtime.${entrypoint.name}`
        },
        minimize: true,
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: true,
                    },
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader" 
                }],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        // new ScriptExtHtmlWebpackPlugin({
        //     // inline: /runtime\..*\.js$/,
        //     defaultAttribute: 'async'
        // }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        // new HardSourceWebpackPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8080,
        open: true,
        hot: true,
        hotOnly: true
    }      
});
