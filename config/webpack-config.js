
const pathUtil = require('path')

const webpackConfig = {
    mode: 'development',
    entry: {
        index: pathUtil.join(__dirname, '../src/javascripts/index.js'),
        collection: pathUtil.join(__dirname, '../src/javascripts/collection.js'),
        detailed: pathUtil.join(__dirname, '../src/javascripts/detailed.js')
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/, // 找到引入到js中的html文件
                use: ['string-loader']
            }
        ]
    }
}

module.exports = webpackConfig