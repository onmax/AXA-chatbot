class Bot {
    constructor(manager) {
        this.manager = manager;
	this.threshold = 0.5;
    }

    getProcessFun() {
	const man = this.manager;
	const threshold = this.threshold;
	
	return async (event) => {
	    const text_message = event.extra.text_message;
            const result = await man.process(text_message);
	    console.log(result);
	    return result.answer;
	};
    }
}

module.exports.Bot = Bot;
