// 基于 axios 封装的请求模块
// src/utils/request.js · lipengzhou/toutiao-publish-admin - 码云 - 开源中国
// https://gitee.com/lipengzhou/toutiao-publish-admin/blob/master/src/utils/request.js

// src/api/user.js · lipengzhou/toutiao-publish-admin - 码云 - 开源中国
// https://gitee.com/lipengzhou/toutiao-publish-admin/blob/master/src/api/user.js

// Send a POST request 3
// 创建一个 axios 实例，说白了就是复制了一个 axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理

const axios = require('axios').default;

// axios()
// axios.get()
// axios.post()

// axios实例 axiosInstance
const axiosInstance = axios.create({
    baseURL: 'http://lmtplat.flowmetek.com.cn', // 请求的基础路径
})

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
        console.log("i am here interceptors.request enter...")
        return config
    },
    error => {
        // Do something with request error
        console.error('interceptors.request error:', error); // for debug
        Promise.reject(error);
    })

// 响应拦截器
axiosInstance.interceptors.response.use(config => {
        console.log("i am here interceptors.response enter...")
        return config
    },
    error => {
        // Do something with request error
        console.error('interceptors.response error:', error); // for debug
        Promise.reject(error);
    })

// 导出请求方法
module.exports = axiosInstance;

// 谁要使用谁就加载 request 模块
// 两种导入 未完待续待确认
// const request = require("./utils/request"); // 可用 nodejs 对应 module.exports = axiosInstance;
// import request from './utils/request' // 待确认 vue 对应 export default axiosInstance
// 使用
// request.xxx
// request({
//   method: ,
//   url: ''
// })
