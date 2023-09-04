const {default: axios} = require("axios");
// 这个目前没有使用【"htmlparser2": "^9.0.0",】
// const htmlparser2 = require("htmlparser2");
const cheerio = require("cheerio");

// 这个是测试
// axios.post('http://httpbin.org/post', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// })
//     .then(function (response) {
//         // console.log(response);
//         // console.log(response.data);
//         console.log(response.headers);
//         console.log("then3================================================================================");
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// 写法1 好用
// 上海交通卡
// axios.get('https://card.whutech.com/balance/sha/18800868031.html', {
//     headers: {
//         // 这个需要 cookie
//         'cookie': 'openid=card_794659fa087b8f96; PHPSESSID=pckjlvsfqfjn7sa4qifnl6km67; card=18800868031; page=sha',
//         'Content-Type': 'application/json'
//     }
// })
//     .then(function (response) {
//         // console.log(response);
//         console.log(response.data);
//         console.log("================================================================================");
//         console.log(response.headers);
//         console.log("then3================================================================================");
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// 写法2好用
// 上海交通卡
//import * as req_axios from '../utils/request-axios'
const req_axios = require('../utils/request-axios');

// console.log(req_axios)

// axios配置 for_get
let this_config_for_get = {
    // 请求头
    headers: {
        'cookie': 'openid=card_8c1d7acbe4d24903; PHPSESSID=pckjlvsfqfjn7sa4qifnl6km67; card=18800868031; page=sha',
        "LCLCLC": "123",
        my_lc_token:"123",
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

// 定义 url
const this_url = "https://card.whutech.com/balance/sha/18800868031.html"
const app = async () => {
    const thisObj = await req_axios.get_with_axios(this_url, this_config_for_get)
    // console.log(thisObj);

    //  "htmlparser2": "^9.0.0", | 不使用
    // const dom = htmlparser2.parseDocument(thisObj);
    // console.log(dom);

    // 使用 cheerio 这个库
    const $ = cheerio.load(thisObj);

    // 卡号
    const cardno = $('.cardno');
    // 余额
    const balance = $('.balance-val');
    // lastdate | update为数据最后更新时间
    // :first 代表 如果有多个 则 取第一个
    const lastdate =  $('.weui-cells__title:first');

    const this_data_you_want_return = {
        "cardno": cardno.text(),
        "balance": balance.text(),
        // "lastdate": lastdate.text().substring(7),
        "update": lastdate.text().substring(7),
        "city:": "sha"
    }
    console.log(this_data_you_want_return);
    return this_data_you_want_return
}
console.log("=============================111=================================")
app()
console.log("=============================222=================================")


