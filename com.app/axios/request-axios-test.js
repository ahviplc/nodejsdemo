// 测试用例 for com.app/utils/request-axios.js

//import * as req_axios from '../utils/request-axios'
const req_axios = require('../utils/request-axios');

// console.log(req_axios)

// axios配置 for_get
let this_config_for_get = {
    // 请求头
    headers: {
        "LCLCL": "123"
    },
    params: {
        "getparams1": "getparams1",
        "getparams2": "getparams2"
    },
    // 设置代理
    // proxy: {
    //     host: '192.168.5.5',
    //     port: 7893
    // }
}

// axios配置 for_post
let this_config_for_post = {
    // 请求头
    headers: {
        "LCLCL": "123"
    },
    data: {
        "postparams1": "postparams1",
        "postparams2": "postparams2"
    },
    // 设置代理
    // proxy: {
    //     host: '192.168.5.5',
    //     port: 7893
    // }
}

// 定义 url
const this_url = "https://httpbin.org/anything"

console.log("=============================111=================================")

const app = async () => {
    const thisObj = await req_axios.get_with_axios(this_url, this_config_for_get)
    console.log(thisObj);
}

app()

console.log("=============================222=================================")

const app2 = async () => {
    const thisObj2 = await req_axios.post_with_axios(this_url, this_config_for_post)
    console.log(thisObj2);
}

app2()

console.log("=============================333=================================")


