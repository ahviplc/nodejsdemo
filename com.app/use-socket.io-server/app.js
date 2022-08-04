const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    // 一些属性的输出
    // console.log(socket.id); // iJEP-_k_DhfALpnSAAAd
    //
    // console.log(socket.rooms); // Set { <socket.id> }
    //
    // socket.join("room1");
    //
    // console.log(socket.rooms); // Set { <socket.id>, "room1" }

    socket.on('chat-message-from-html', msg => {
        console.log('来自前端的消息 ===> ', msg)
        io.emit('chat-message-from-server', msg);
    });

    // 连接之后 会自动触发
    // 写法1
    socket.emit("hello", "world", (response) => {
        console.log('写法1 ',response); // "got it"
    });

    // // 写法2 写在这里有点问题 会触发错误 error
    // io.emit("hello", "world2", (response) => {
    //     console.log('写法2 ',response); // "got it"
    // });

    socket.on("news", (data) => {
        console.log(data);
    });

    socket.on("error", (err) => {
        console.log(err)
        if (err && err.message === "unauthorized event") {
            socket.disconnect();
        }
    });

});

io.on("new_namespace", (namespace) => {
    console.log(namespace);
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});


// log==================================================================
// Socket.IO server running at http://localhost:3000/
//     写法1  got it 连接之后 会自动触发
// 来自前端的消息 ===>  1
// 写法1  got it 连接之后 会自动触发
// 写法1  got it 连接之后 会自动触发
// 来自前端的消息 ===>  2
// have news => 2
// 来自前端的消息 ===>  111
// have news => 111
// 来自前端的消息 ===>  333
// have news => 333
// log==================================================================
