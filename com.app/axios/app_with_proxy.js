const axios = require('axios').default;

// Axios使用代理IP请求

// axios配置
let config = {
    // 请求头
    headers: {
        "LCLCL": "123"
    },
    // 设置代理
    proxy: {
        host: '192.168.5.5',
        port: 7893
    }
}
// 设置的proxy已成功启用
// https://httpbin.org/anything
axios.get('https://httpbin.org/anything', config)
    .then(function (response) {
        // handle success
        // console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log("then1================================================================================");
    })
    .finally(function () {
        console.log("finally1================================================================================");
    });

// =======================================分隔符===========================================================================

// POST
axios.post('http://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone'
}, config)
    .then(function (response) {
        // console.log(response);
        console.log(response.data);
        console.log("then2================================================================================");
    })
    .catch(function (error) {
        console.log(error);
    }).finally(function () {
    console.log("finally2================================================================================");
});
;

axios.post('http://httpbin.org/anything', {
    firstName: 'Fred',
    lastName: 'Flintstone'
}, config)
    .then(function (response) {
        // console.log(response);
        console.log(response.data);
        console.log("then3================================================================================");
    })
    .catch(function (error) {
        console.log(error);
    }).finally(function () {
    console.log("finally3================================================================================");
});
;

// 设置的proxy已成功启用
// https://api.telegram.org/notFound
// 此url 需要使用代理 否则无法请求 你懂得
// ==============================================================================================
// axios.get('https://api.telegram.org/notFound', config)
//     .then(function (response) {
//         // handle success
//         // console.log(response);
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//         console.log("then4================================================================================");
//     })
//     .finally(function () {
//         console.log("finally4================================================================================");
//     });