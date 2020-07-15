const path = require('path');
const webpack = require('webpack');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
//速度分析
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = smp.wrap(merge(common, {
    mode: 'production',
    // entry: './src/index.js',
    entry: {
        index: path.resolve(__dirname,"./src/index.js"),
        desc: path.resolve(__dirname,"./src/desc.js"),
        // comp: path.resolve(__dirname,"./src/comp.vue"),
        // children: path.resolve(__dirname,"./src/children.vue"),
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 600,
            minChunks: 2,
            cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    name: "vendor",
                    priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
                    minChunks: 1,  //最少被几个chunk引用
                    reuseExistingChunk: true,
                    enforce: true
                },
                default: {
                    minChunks: 2,
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
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'productList',
        libraryTarget: 'umd',
        libraryExport: 'default',
    }     
}));
