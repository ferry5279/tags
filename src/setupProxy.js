const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/aps', {
            target: 'http://api.baxiaobu.com',
            changeOrigin: true,
            pathRewrite: {
                '^/aps': ''
            }
        }),
    )
    app.use(
        createProxyMiddleware('/apa', {
            target: 'https://blog.zdldove.top/',
            changeOrigin: true,
            pathRewrite: {
                '^/apa': ''
            }
        })
    )
}