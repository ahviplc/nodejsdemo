const axios = require('axios').default;

// 定义一个返回的 obj封装
let this_obj = {}

// axios get请求再封装
// this_url 请求的url
// this_config 一些配置项 get请求中可配置 => 请求头 header 此get的请求参数 params 设置代理 proxy等
exports.get_with_axios = async function get_with_axios(this_url, this_config) {
    await axios.get(this_url, this_config)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            this_obj = res.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            console.log("request-axios.js get_with_axios always executed================================================================================");
        })
        .finally(function () {
            console.log("request-axios.js get_with_axios finally================================================================================");
        });
    return this_obj
}

// axios post请求再封装
// this_url 请求的url
// this_config 一些配置项 get请求中可配置 => 请求头 header 此post的请求数据 data 设置代理 proxy等
exports.post_with_axios = async function post_with_axios(this_url, this_config) {
    await axios.post(this_url, this_config.data, this_config)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            this_obj = res.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            console.log("request-axios.js post_with_axios always executed================================================================================");
        })
        .finally(function () {
            console.log("request-axios.js post_with_axios finally================================================================================");
        });
    return this_obj
}

// 方法1
// exports.get_with_axios = get_with_axios;
// exports.post_with_axios = post_with_axios;

// 方法2
// module.exports.get_with_axios = get_with_axios;
// module.exports.post_with_axios = post_with_axios;

// 方法3 直接在方法上 目前使用的就是这个

// 其他导出方式借鉴
// com.app/utils/greet.js
// com.app/utils/md5.js
