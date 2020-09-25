// 模块 - 廖雪峰的官方网站
// https://www.liaoxuefeng.com/wiki/1022910821149312/1023027697415616

// learn-javascript/samples/node/module at master · michaelliao/learn-javascript · GitHub
// https://github.com/michaelliao/learn-javascript/tree/master/samples/node/module

// 开发nodejs模块并发布到npm的简单示例 - Zhuang miao - 博客园
// https://www.cnblogs.com/mz121star/archive/2012/11/15/nodejsandnom.html

const utils = require('utility')

// 只是暴露一个方法 使用 exports
function md5(inData) {
    console.log('---md5--- ' + ', ' + utils.md5(inData));
    return utils.md5(inData)
}

exports.md5 = md5;


