# nodejsdemo

> 一些nodejs样例

# 一些链接

```markdown
Node.js 中文网  
> http://nodejs.cn/

Node.js  
> https://nodejs.org/en/

GitHub - alsotang/node-lessons: 《Node.js 包教不包会》 by alsotang  
> https://github.com/alsotang/node-lessons

mumuy/relationship: Chinese kinship system.中国亲戚关系计算器 - 家庭称谓/称呼计算/亲戚关系算法  
> https://github.com/mumuy/relationship

socks-proxy-agent-JavaScript中文网-JavaScript教程资源分享门户
http://www.javascriptcn.com/post/5eedabc1b5cbfe1ea061083d

socks-proxy-agent - npm - nodejs中使用代理进行一些特殊api请求
https://www.npmjs.com/package/socks-proxy-agent

GitHub - TooTallNate/node-socks-proxy-agent: A SOCKS (v4/v5) proxy `http.Agent` implementation for HTTP and HTTPS
https://github.com/TooTallNate/node-socks-proxy-agent

axios中文网|axios API 中文文档 | axios
http://www.axios-js.com/

文档 - axios中文文档|axios中文网 | axios
http://www.axios-js.com/zh-cn/docs/

请求配置 - axios中文文档|axios中文网 | axios
http://www.axios-js.com/zh-cn/docs/#请求配置

Axios使用代理IP请求 - SegmentFault 思否
https://segmentfault.com/q/1010000023241921

使用Axios来设置请求头（headers）的方法_墨语轩的博客-CSDN博客_axios设置headers
https://blog.csdn.net/MFWSCQ/article/details/125547207

Telegram Messenger
https://www.telegram.org/

Telegram APIs
https://core.telegram.org/api

GitHub - yagop/node-telegram-bot-api: Telegram Bot API for NodeJS
https://github.com/yagop/node-telegram-bot-api

Error: cannot enable cancellation after promises are in use · Issue #319 · yagop/node-telegram-bot-api · GitHub
https://github.com/yagop/node-telegram-bot-api/issues/319

telegraf.js - v4.8.5
https://telegraf.js.org/

GitHub - telegraf/telegraf: Modern Telegram Bot Framework for Node.js
https://github.com/telegraf/telegraf

Node-Fetch设置httphttps代理发送请求示例 - 百度文库 - 从这拿到的灵感 但是不好使
https://wenku.baidu.com/view/2ee196ed2fc58bd63186bceb19e8b8f67c1cefe0.html

http-proxy-agent - npm
https://www.npmjs.com/package/http-proxy-agent

GitHub - TooTallNate/node-http-proxy-agent: An HTTP(s) proxy `http.Agent` implementation for HTTP endpoints
https://github.com/TooTallNate/node-http-proxy-agent

PM2 - Home
https://pm2.keymetrics.io/

GitHub - Unitech/pm2: Node.js Production Process Manager with a built-in Load Balancer.
https://github.com/Unitech/pm2
```

# 安装依赖
```markdown
1. cd nodejsdemo
2. npm install
   npm i
   cnpm install
   cnpm i
3. enjoy it.
```

# run

将 `use-telegram-api-with-node-socks-proxy` 运行

```shell
node com.app/use-telegram-api-with-node-socks-proxy/app.js
```

# fork me

ahviplc/nodejsdemo  
> https://gitee.com/ahviplc/nodejsdemo

# 其他

## 小记录

```markdown
在
node_modules/telegraf/lib/core/network/client.js:252
加入
========================================================
// 完善 agent下的proxy
config.secureProxy = false,
config.agent.proxy = {
protocol: 'http:',
slashes: true,
auth: null,
host: '192.168.192.192',
port: 7893,
hostname: '192.168.192.192',
hash: null,
search: null,
query: null,
href: 'http://192.168.192.192:7893/'
}
========================================================
失败

```

## 小说明

* 在`com.app/use-node-telegram-bot-api/telegram.js:282` 我新增了代理配置项
* 使用 ` npm install pm2 --save-dev` 安装了 pm2 使用 `npx` 运行 `npx pm2 start .\com.app\use-pm2\app.js` | `npx pm2 ls` | `npx pm2 stop 0` | ` npx pm2 stop all` |  `npx pm2 log app --lines 10`

> Never Give Up...

# 我的 nodejs 其他相关库 

vscodeku/nodejsKu at master · ahviplc/vscodeku · GitHub   
> https://github.com/ahviplc/vscodeku/tree/master/nodejsKu 

# Git提交说明

```markdown
提交信息书写模板指南:

注意前面有个空格
> ### 代表是具体的文字描述

*
* 做杂务 零工 杂事的时候
* chore: ###
*
* 修复bug的时候
* fix: ###
*
* 有功绩 有重大功能添加的时候
* feat: ###
*
* 性能提升的时候
* perf: ###
*
* 文档编辑相关的时候
* docs: ###
*
```
