// mumuy/relationship: Chinese kinship system.中国亲戚关系计算器 - 家庭称谓/称呼计算/亲戚关系算法
// https://github.com/mumuy/relationship

var relationship = require("relationship.js");
var options = {text: '儿子的爸爸的妈妈', sex: 1};
console.log(relationship(options));