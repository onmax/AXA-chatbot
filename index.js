const { Bot } = require('./bot');
const { BotAdapterMs } = require('./bot-adapter-ms');
console.log("Starting up bot!");
const bot = new Bot();
new BotAdapterMs(bot.processMessage).start();
