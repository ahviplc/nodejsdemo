const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'this is your token,write it here';
// 这里使用时 请改成你真实的 telegram id 也就是 chatId
const this_is_your_chatId = 123456789;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    console.log("===onText===");
    console.log(msg);
    console.log("===onText===");
    console.log("onText", chatId);
    console.log("===onText===");
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log("===message===");
    console.log(msg);
    console.log("===message===");
    console.log("message", chatId);
    console.log("===message===");
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});

// 直接发生消息
// 这里需要用你的 telegram id 发送消息
// this_is_your_chatId 这是你的telegram id
// this_send_content 这是你的发送内容
const this_send_content = "Hello LC from node app"
bot.sendMessage(this_is_your_chatId, this_send_content);

// 输出样例
// ===message===
// {
//     message_id: 20,
//     from: {
//         id: xxx,
//         is_bot: false,
//         first_name: 'xxx',
//         last_name: 'xxx',
//         username: 'xxx',
//         language_code: 'zh-hans'
//     },
//     chat: {
//         id: xxx,
//         first_name: 'xxx',
//         last_name: 'xxx',
//         username: 'xxx',
//         type: 'private'
//     },
//     date: 1658591825,
//     text: '10086'
// }
// ===message===
// message chat_id_xxx
// ===message===
// ================================================================================
