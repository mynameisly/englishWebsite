const path = require('path');
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    publicPath: './',
    lintOnSave: false, // 是否启用eslint
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 require('autoprefixer')({
    //                     overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    //                 }),
    //                 require('postcss-pxtorem')({
    //                     rootValue: 37.5, // 换算的基数
    //                     selectorBlackList: ['vant'], // 忽略转换正则匹配项
    //                     propList: ['*'],
    //                 }),
    //             ]
    //         }
    //     },
    // },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@vie', resolve('src/views'))
            .set('@uit', resolve('src/utils'))
            .set('@ass', resolve('src/assets'))
            .set('@style', resolve('src/style'))
            .set('@com', resolve('src/components'))
    },

    devServer: {
        port: 8080,
        disableHostCheck: true,
        proxy: {
            '/': {
                target: "http://dev.ninepay.in/api/",
                changeOrigin: true,
                ws: true,
            }
        }
    }
}