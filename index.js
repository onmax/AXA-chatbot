const { Bot } = require('./bot');
const { BotAdapterTgm } = require('./bot-adapter-tgm');
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train/train-nlp');

const manager = new NlpManager({languages: ['es']});
(async () => {
    await trainnlp(nlpManager);
    console.log("Starting up bot!");
    const bot = new Bot(manager);
    new BotAdapterTgm(bot.processMessage).start();
})();
