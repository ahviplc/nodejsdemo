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
