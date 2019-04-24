const { Bot } = require('./bot');
const { BotAdapterTgm } = require('./bot-adapter-tgm');
<<<<<<< HEAD
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train/train-nlp');


const manager = new NlpManager({languages: ['es']});
(async () => {
    await trainnlp(nlpManager);
    console.log("Starting up bot!");
    const bot = new Bot(manager);
    new BotAdapterTgm(bot.processMessage).start();
})();
=======
console.log("Starting up bot!");
const bot = new Bot();
new BotAdapterTgm(bot.processMessage).start();
>>>>>>> 9bbea8632a8f3ff79c99d510d5c1f86e3c575d91
