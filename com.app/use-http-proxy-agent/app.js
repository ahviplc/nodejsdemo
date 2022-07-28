var url = require('url');
var http = require('http');
var HttpProxyAgent = require('http-proxy-agent');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://192.168.192.192:7893';
console.log('using proxy server %j', proxy);

// HTTP endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'http://nodejs.org/api/';
console.log('attempting to GET %j', endpoint);
var opts = url.parse(endpoint);

// create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);
console.log("====agent=== ", agent);
opts.agent = agent;

http.get(opts, function (res) {
    console.log('"response" event!', res.headers);
    res.pipe(process.stdout);
});

// it can work

// ======================================agent======================================
// HttpProxyAgent {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//         _maxListeners: undefined,
//         timeout: null,
//         maxFreeSockets: 1,
//         maxSockets: 1,
//         maxTotalSockets: Infinity,
//         sockets: {},
//     freeSockets: {},
//     requests: {},
//     options: {},
//     secureProxy: false,
//         proxy: {
//         protocol: 'http:',
//             slashes: true,
//             auth: null,
//             host: '192.168.192.192',
//             port: 7893,
//             hostname: '192.168.192.192',
//             hash: null,
//             search: null,
//             query: null,
//             href: 'http://192.168.192.192:7893/'
//     },
//     [Symbol(kCapture)]: false
// }
// ======================================agent======================================

// 这就是配置的 proxy
//  proxy: {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: '192.168.192.192',
//     port: 7893,
//     hostname: '192.168.192.192',
//     hash: null,
//     search: null,
//     query: null,
//     href: 'http://192.168.192.192:7893/'
//   },

// 响应
// "response" event! {
//     connection: 'close',
//     'transfer-encoding': 'chunked',
//     'cache-control': 'max-age=3600',
//     'cf-ray': '731b65afbe587c47-LAX',
//     date: 'Thu, 28 Jul 2022 06:00:55 GMT',
//     expires: 'Thu, 28 Jul 2022 07:00:55 GMT',
//     location: 'https://nodejs.org/api/',
//     server: 'cloudflare',
//     vary: 'Accept-Encoding',
//     'x-content-type-options': 'nosniff'
// }
