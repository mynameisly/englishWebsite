export const REQUEST_BASICS = {
    baseURL: process.env.NODE_ENV === 'development' ? "/" : "/",
    maxContentLength: 2000,
    timeout: 6000,
    // 发送请求时头部信息
    headers: {
        // 'Content-Type': 'application/json;charset=utf-8'
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}