// exports、module.exports 和 export、export default 到底是咋回事
// https://juejin.im/post/6844903489257095181

// nodejs学习笔记 之prototype_QIUCHUNHUIGE的博客-CSDN博客
// https://blog.csdn.net/qiuchunhuige/article/details/78131707

// 引入： 在require自定义模块的时候一定要加上路径
// 暴露方法：
//         exports  用来暴露变量
//         module.exports用来暴露一个构造函数（不能用exports）

// 理理他们的使用范围
// require: node 支持的引入
// export / import : 只有es6 支持的导出引入
// module.exports / exports: 只有 node 支持的导出

// console.log(module.exports); //能打印出结果为：{}
// console.log(exports); //能打印出结果为：{}
// console.log(module.exports == exports); // true

// this
// 在函数执行时，this 总是指向调用该函数的对象。要判断 this 的指向，其实就是判断 this 所在的函数属于谁。
// 在《javaScript语言精粹》这本书中，把 this 出现的场景分为四类，简单的说就是：
// 1.有对象就指向调用对象
// 2.没调用对象就指向全局对象
// 3.用new构造就指向新对象
// 4.通过 apply 或 call 或 bind 来改变 this 的所指。

// 在nodejs中，类型定义就像定义函数一样，其实该函数就是LCInfo类的构造函数
function LCInfoClass(name, age) {
    // 姓名
    this.name = name;
    // 年龄
    this.age = age;
    //定义对象方法
    this.show = function () {
        console.log("对象方法 show " + this.name + ' ' + this.age);
    };
}

// // 上面的有以下写法 这里不需要 隐掉
// var LCInfoClass2 = function (name, age) {
//     //如果需要定义该类对象的字段、方法等，需加上this关键字，否则就认为是该函数中的临时变量
//     // 姓名
//     this.name = name;
//     // 年龄
//     this.age = age;
//     //定义对象方法
//     this.show = function () {
//         console.log("LCInfoClass2 对象方法 show " + this.name + ' ' + this.age);
//     };
// };

// JavaScript prototype（原型对象） | 菜鸟教程
// https://www.runoob.com/js/js-object-prototype.html
LCInfoClass.prototype = {
    say: function () {
        console.log("prototype say " + "hello," + " from " + this.name)
    },
    sayHelloWithName: function (name) {
        this.name = "默认管理员admin"
        console.log("prototype sayHelloWithName " + "hello," + name + " from " + this.name)
    }
}

// 类的成员方法也可以在构造方法外定义，需加上prototype关键字，否则就认为是定义类方法（静态方法）
LCInfoClass.prototype.showName = function () {
    console.log("showName " + this.name);
};

LCInfoClass.prototype.showAge = function () {
    console.log("showAge " + this.age);
};

// 定义类方法(类的静态方法，可直接通过类名访问)
LCInfoClass.showAll = function (name, age) {
    console.log("showAll " + name + ' ' + age);
};

// 类方法（静态方法）
LCInfoClass.classApp = function () {
    console.log("类方法（静态方法） classApp ");
};

// 定义类的静态字段
// 小名
LCInfoClass.smallName = "chen";

// 将LCInfoClass暴露出去
module.exports = LCInfoClass;
