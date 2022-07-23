const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'this is your token,write it here';

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
    console.log("onText",chatId);
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
    console.log("message",chatId);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});


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
