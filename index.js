const { Bot } = require('./bot');
const { BotAdapterTgm } = require('./bot-adapter-tgm');
console.log("Starting up bot!");
const bot = new Bot();
new BotAdapterTgm(bot.processMessage).start();
