class Bot {
    threshold = 0.5;

    constructor(manager) {
        this.manager = manager;
    }

    async processMessage(event) {
        const text_message = event.extra.text_message;
        const result = await nlpManager.process(text_message);
        return result.score > this.threshold && result.answer
                ? result.answer
                : "Lo siento no te he entendido";
    }
}

module.exports.Bot = Bot;
