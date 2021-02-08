module.exports = {
    // baseUrl: './',
    assetsDir: 'static',
    outputDir: 'dist',
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://120.24.186.190:8080',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        }
    }
}