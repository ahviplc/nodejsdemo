const {Telegraf} = require('telegraf')

process.env.NODE_ENV = 'dev'

// https://api.telegram.org/bot<token>/sendmessage?chat_id='this is your chat_id'&text=%22hello%22
process.env.BOT_TOKEN = 'this is your token,write it here'

console.log("process.env.NODE_ENV => ", process.env.NODE_ENV)
console.log("process.env.BOT_TOKEN => ", process.env.BOT_TOKEN)

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('test', (ctx) => ctx.reply('Hello test'))
bot.command('test2', Telegraf.reply('Hello test2'))

bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)

    // Using context shortcut
    ctx.leaveChat()
})

bot.on('text', (ctx) => {
    // Explicit usage
    ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

    // Using context shortcut
    ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('callback_query', (ctx) => {
    // Explicit usage
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

    // Using context shortcut
    ctx.answerCbQuery()
})

bot.on('inline_query', (ctx) => {
    const result = []
    // Explicit usage
    ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

    // Using context shortcut
    ctx.answerInlineQuery(result)
})

bot.launch()

// 优雅暂停
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// (Use `node --trace-warnings ...` to show where the warning was created)
