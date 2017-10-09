
const path = require('path')
const merge = require('webpack-merge')
const util = require('util')

const config = merge(require('./webpack.config.js'), {
    devServer: {
        contentBase: [path.join(__dirname, '.'), path.join(__dirname, 'dist')],
	    openPage: './index.html',
    },
    devtool: "eval-source-map",
})
console.log(util.inspect(config, false, null))
module.exports = config
