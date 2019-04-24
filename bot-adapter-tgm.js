const { Event } = require('./event');
const fs = require('fs');
class BotAdapterTgm {
    constructor(handler) {
	this.handler = handler;
    }

    start() {
	const TelegramBot = require('node-telegram-bot-api');
	const rawdata = fs.readFileSync('tgm-secret.json');  
	const token = JSON.parse(rawdata).token;

	const bot = new TelegramBot(token, {polling: true});

	bot.on('message', (msg) => {
	    const chatId = msg.chat.id;
	    const text = msg.text; //TODO Only accepted text message for now.
	    const extra = new Object();
	    extra.text_message = text;
	    const event = new Event(chatId, "dummy", extra);
	    this.handler(event).then(msg => {
		bot.sendMessage(chatId, msg);
	    });
	});

	bot.on('polling_error', error => {
	    console.log(error);
	});
    }
}

module.exports.BotAdapterTgm = BotAdapterTgm;
