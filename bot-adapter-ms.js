const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');
const { Event } = require('./event');

class BotAdapterMs {
    constructor(handler) {
	this.handler = handler;
    }

    start() {
	const adapter = new BotFrameworkAdapter();
	const server = restify.createServer();
	server.listen(8080, () => {
	    console.log("Started bot adapter using Microsoft Bot Framework");
	});

	server.post('/api/messages', (req, res) => {
	    adapter.processActivity(req, res, async ctx => {
		const extra = new Object();
		extra.text_message = ctx.activity.text;
		const ev = new Event(ctx.activity.from.id, "dummy", extra);
		await this.handler(ev).then(msg => {
		    return ctx.sendActivity(msg);
		});
	    });
	});
    }
}

module.exports.BotAdapterMs = BotAdapterMs;
