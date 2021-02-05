export const REQUEST_BASICS = {
    baseURL: process.env.NODE_ENV === 'development' ? "http://dev.ninepay.in" : "http://dev.ninepay.in",
    maxContentLength: 2000,
    timeout: 6000,
    withCredentials: false, //表示跨域时是否需要凭证
    // 发送请求时头部信息
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
}