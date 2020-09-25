console.log("hello world node js")
console.log("hello world node js")
console.log("hello world node js")
console.log("hello world node js")
console.log("hello world node js")
console.log("---------------------------------------------------------------------")
// utility库
const utils = require('utility')

console.log(utils.md5('admin'))

console.log(utils.sha1('admin'))

console.log(utils.sha256('admin'))

console.log(utils.sha256(Buffer.from('admin')))

console.log(utils.hmac('sha1', 'I am a key', 'hello world'))

// base64 encode
console.log(utils.base64encode('你好￥')); // '5L2g5aW977+l'
console.log(utils.base64decode('5L2g5aW977+l')) // '你好￥'

// urlsafe base64 encode
console.log(utils.base64encode('你好￥', true)); // '5L2g5aW977-l'
console.log(utils.base64decode('5L2g5aW977-l', true)); // '你好￥'

// html escape and unescape
console.log(utils.escape('<script/>"& &amp;')); // '&lt;script/&gt;&quot;&amp; &amp;amp;'
console.log(utils.unescape('&lt;script/&gt;&quot;&amp; &amp;amp;')); // '<script/>"& &amp;'

// Safe encodeURIComponent and decodeURIComponent
console.log(utils.decodeURIComponent(utils.encodeURIComponent('你好, nodejs')));
console.log("---------------------------------------------------------------------")

// os
// os | Node.js API 文档
// http://nodejs.cn/api/os.html#os_os

var os_utils = require("os");
console.log(os_utils.cpus())
console.log("---------------------------------------------------------------------")
console.log(os_utils.type())
console.log(os_utils.homedir())
console.log(os_utils.arch())
console.log("---------------------------------------------------------------------")

// whoru
// 单独暴露类
// 使用require方法加载LCInfoClass模块
LCInfoClass = require("./utils/whoru");

// 调用类方法
LCInfoClass.showAll("LC", 18); // showAll LC 18

console.log(LCInfoClass) // [Function: LCInfoClass] {showAll: [Function],classApp: [Function],smallName: 'chen'}

// 展现类静态字段
console.log(LCInfoClass.smallName); // chen
// 更改smallName
LCInfoClass.smallName = "chenchen";
console.log(LCInfoClass.smallName); // chenchen

console.log("---------------------------------------------------------------------")

// 实例化类对象
var stu = new LCInfoClass("LC2", 18);
stu.show(); // 对象方法 show LC2 18
stu.showName(); // showName LC2
console.log(stu.name) // LC2
stu.showAge(); // showAge 18
stu.say() // prototype say hello, from LC2
stu.name = "LC3"
stu.showName(); // showName LC3
stu.say() // prototype say hello, from LC3
console.log("---------------------------------------------------------------------")

LCInfoClass.prototype.sayHelloWithName("LC4") // prototype sayHelloWithName hello,LC4 from 默认管理员admin

console.log("---------------------------------------------------------------------")

LCInfoClass.classApp() // 类方法（静态方法） classApp

console.log("---------------------------------------------------------------------")
// 单独暴露常量
// config
config = require("./utils/config");
console.log(config) // { whoru_desc: '自定义工具类BY LC.', whoru_author: 'LC', version: '0.1.0' }
console.log(config.whoru_desc) // 自定义工具类BY LC.
console.log(config.whoru_author) // LC
console.log(config.version) // 0.1.0
console.log("---------------------------------------------------------------------")
// 单独暴露方法 使用 module.exports
// 引入greet模块
var greet = require('./utils/greet');
const ToName = 'LC5';
greet(ToName); // ---打招呼 greet--- , LC5!
console.log("---------------------------------------------------------------------")
// 单独暴露方法 2 使用 exports
// md5
var m = require('./utils/md5');
const outData = m.md5('admin')
console.log(outData) // 21232f297a57a5a743894a0e4a801fc3
console.log("---------------------------------------------------------------------")

// request 自定义封装的axios请求模块 含有request response拦截器
const request = require("./utils/request"); // 返回的是axios实例 = axiosInstance 起名叫 request
// lmtplat测试api http://lmtplat.flowmetek.com.cn/rest/v1/test
// 异步result 可使用 【.then】【.catch】【.finally】
// Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息
const result = request({
    method: 'GET',
    url: '/rest/v1/test'
}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    // handle error
    console.log("有error了 " + error); // 类似输出:有error了 TypeError: Cannot read property 'data' of undefined
}).finally(function () {
    console.log("finally1")
});
result.finally(function () {
    console.log("finally2")
    console.log(result) // Promise { undefined }
    console.log("---------------------------------------------------------------------")
})
console.log(result) // Promise { <pending> }

console.log("---------------------------------------------------------------------")
// lmtplat测试api http://lmtplat.flowmetek.com.cn/api/t1
const result2 = request({
    method: 'GET',
    url: '/api/t1'
}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    // handle error
    console.log("有error了 " + error); // 类似输出:有error了 TypeError: Cannot read property 'data' of undefined
}).finally(function () {
    console.log("finally3")
    console.log("---------------------------------------------------------------------")
});
console.log("---------------------------------------------------------------------")

