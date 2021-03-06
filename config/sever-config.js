const proxy = require('http-proxy-middleware')

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3006,
    middleware: [ // 中间件 http-proxy-middleware
        proxy('/fanshu', {
            target: 'https://www.jianshu.com/',
            changeOrigin: true,
            pathRewrite: { // 去掉暗号
                '^/fanshu': ''
            }
        })
    ],
    proxies: [      
        // { source: '/api', target: '' }
    ]
}

module.exports = serverConfig