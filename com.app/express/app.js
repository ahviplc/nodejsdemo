// from 下面链接
// node-lessons/lesson2 at master · alsotang/node-lessons · GitHub
// https://github.com/alsotang/node-lessons/tree/master/lesson2

// Express - 基于 Node.js 平台的 web 应用开发框架 - Express 中文文档 | Express 中文网
// https://www.expressjs.com.cn/

// utility - npm - 这里有使用说明demo.
// https://www.npmjs.com/package/utility

// GitHub - node-modules/utility: A collection of useful utilities.
// https://github.com/node-modules/utility

// 这时我们来安装依赖，这次的应用，我们依赖 express 和 utility 两个模块。
//
// $ npm install express utility --save
//
// Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能.
// 调用 utility.md5 方法，得到 md5 之后的值
//
// 这次的安装命令与上节课的命令有两点不同，一是没有指定 registry，没有指定的情况下，默认从 npm 官方安装，上次我们是从淘宝的源安装的。
// 二是多了个 --save 参数，这个参数的作用，就是会在你安装依赖的同时，自动把这些依赖写入 package.json。命令执行完成之后，查看 package.json，会发现多了一个 dependencies 字段，
//
// 这时查看 node_modules 目录，会发现有两个文件夹，分别是 express 和 utility
// 我们开始写应用层的代码，建立一个 app.js 文件

// 引入依赖
var express = require('express');
var utility = require('utility');

// 建立 express 实例
var app = express();

app.get('/', function (req, res) {
    // 从 req.query 中取出我们的 q 参数。
    // 如果是 post 传来的 body 数据，则是在 req.body 里面，不过 express 默认不处理 body 中的信息，需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理，这个后面会讲到。
    // 如果分不清什么是 query，什么是 body 的话，那就需要补一下 http 的知识了
    var q = req.query.q;

    // 调用 utility.md5 方法，得到 md5 之后的值
    // 之所以使用 utility 这个库来生成 md5 值，其实只是习惯问题。每个人都有自己习惯的技术堆栈，
    // 我刚入职阿里的时候跟着苏千和朴灵混，所以也混到了不少他们的技术堆栈，仅此而已。
    // utility 的 github 地址：https://github.com/node-modules/utility
    // 里面定义了很多常用且比较杂的辅助方法，可以去看看
    var md5Value = utility.md5(q);

    res.send(md5Value);
});

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});

// 其他
// OK，运行我们的程序
//
// $ node app.js
//
// 访问 http://localhost:3000/?q=admin，完成。
//
// 题外话
// 如果直接访问 http://localhost:3000/ 会抛错
//
// 可以看到，这个错误是从 crypto.js 中抛出的。
//
// 这是因为，当我们不传入 q 参数时，req.query.q 取到的值是 undefined，utility.md5 直接使用了这个空值，导致下层的 crypto 抛错。
