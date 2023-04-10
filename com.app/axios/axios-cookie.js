const {default: axios} = require("axios");

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


// 这个支持java|python等多种语言 在线运行代码
// axios.post('https://www.jdoodle.com/engine/execute', {
//     script: "\nprint (\"== HELLO WORLD ==\");",
//     args: null,
//     stdin: null,
//     language: 'python3',
//     versionIndex: '4',
//     libs: [],
//     projectKey: '1002',
//     hasInputFiles: false
// }, {
//     headers: {
//         'cookie': 'SESSION=c87bac27-41c7-4084-b94b-745ad454361c', // 这里请求头需要cookie
//         'Content-Type': 'application/json'
//     }
// })
//     .then(function (response) {
//         // console.log(response);
//         console.log(response.data);
//         // console.log(response.headers);
//         // console.log(response.headers['set-cookie']);
//         console.log("then3================================================================================");
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// 这个只支持java语言 在线运行代码
axios.post('https://www.compilejava.net/v1/compile', {
    buffers: {
        "main.java": "// tip: each public class is put in its own file\r\npublic class main\r\n{\r\n    // tip: arguments are passed via the field below this editor\r\n    public static void main(String[] args)\r\n    {\r\n        System.out.println(\"Hellwwwoqqq, world!\");\r\n    }\r\n}"
    },
    cliargs: [],
    language: 'java'
}, {
    headers: {
        // 这个不需要 cookie
        //'cookie': 'SESSION=c87bac27-41c7-4084-b94b-745ad454361c',
        'Content-Type': 'application/json'
    }
})
    .then(function (response) {
        // console.log(response);
        console.log(response.data);
        console.log("================================================================================");
        console.log(response.headers);
        console.log("then3================================================================================");
    })
    .catch(function (error) {
        console.log(error);
    });
