export const REQUEST_BASICS = {
    baseURL: process.env.NODE_ENV === 'development' ? "http://dev.ninepay.in/api/" : "http://dev.ninepay.in/api/",
    maxContentLength: 2000,
    timeout: 6000,
    // 发送请求时头部信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
}