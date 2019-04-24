class Bot {
    async processMessage(event) {
	const text_message = event.extra.text_message;
	return `Received ${text_message} from ${event.channel_id}`;
    }
}

module.exports.Bot = Bot;
