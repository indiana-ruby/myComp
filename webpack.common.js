const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
//HardSourceWebpackPlugin效果不明显

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'productList',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    resolveLoader: {
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.json' ],
        mainFields: [ 'loader', 'main' ]
    },
    // devtool: "source-map",
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         minSize: 300,
    //         minChunks: 1,
    //         cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
    //             common: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'common',  //抽取的chunk的名字
    //                 priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
    //                 minChunks: 1,  //最少被几个chunk引用
    //                 reuseExistingChunk: true,
    //                 enforce: true
    //             },
    //             default: {
    //                 minChunks: 1,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //          }
    //     },
    //     runtimeChunk: {
    //         name: entrypoint => `runtime.${entrypoint.name}`
    //     },
    //     minimize: true,
    //     usedExports: true
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: true,
                    },
                }, {
                    loader: "css-loader"
                }],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'local'),
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
        new VueLoaderPlugin(),
        // new ScriptExtHtmlWebpackPlugin({
        //     // inline: /runtime\..*\.js$/,
        //     defaultAttribute: 'async'
        // }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        // new HardSourceWebpackPlugin()
    ],
};
