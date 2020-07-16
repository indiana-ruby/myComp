const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
//速度分析

module.exports = smp.wrap(merge(common, {
    mode: 'production',
    entry: './local/index.js'
}));
