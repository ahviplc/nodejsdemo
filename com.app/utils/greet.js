// 模块 - 廖雪峰的官方网站
// https://www.liaoxuefeng.com/wiki/1022910821149312/1023027697415616

// learn-javascript/samples/node/module at master · michaelliao/learn-javascript · GitHub
// https://github.com/michaelliao/learn-javascript/tree/master/samples/node/module

// 只是暴露一个方法
function greet(name) {
    console.log('---打招呼 greet--- ' + ', ' + name + '!');
}

module.exports = greet;
