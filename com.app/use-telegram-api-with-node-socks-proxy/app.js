// 使用 import 注意配置 "type": "module",
import https from 'https';
// 使用库 socks-proxy-agent
import { SocksProxyAgent } from 'socks-proxy-agent';

const info = {
    hostname: '192.168.5.5',
    port:'7893',
    userId: '',
    password: ''
};

const agent = new SocksProxyAgent(info);

// 请求1
// https.get('https://httpbin.org/anything',  (res) => {
//     // console.log(res.headers);
//     // console.log(res);
//     res.pipe(process.stdout);
// });

// 请求2
// use proxy 设置的proxy已成功启用
// 此url 需要使用代理 否则无法请求 你懂得
https.get('https://api.telegram.org/notFound',  {agent},(res) => {
    // console.log(res.headers);
    // console.log(res);
    res.pipe(process.stdout);
});

// 故意的 主要是看能否调用成功 测试代理是否可用
// 会输出 json
// {"ok":false,"error_code":404,"description":"Not Found"}