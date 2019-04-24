const states = require('./states');

class Bot {

    constructor(manager) {
        this.manager = manager;
        this.saved_state = 'origin';
        this.threshold = 0.5;
    }

    getProcessFun() {
	const man = this.manager;
	const threshold = this.threshold;
	
	return async (event) => {
	    const text_message = event.extra.text_message;
            const result = await man.process(text_message);
	    console.log(result);

     var answer = states.checkState(this.saved_state, result.intent);
     console.log(answer, this.saved_state, result.intent)
	 if (answer === null){
         this.saved_state = 'origin';
	     return "No te hemos entendido";
         
        }
    this.saved_state = ["help", "greetings", "cancel"].includes(result.intent) ? "origin" : result.intent;;
    return result.answer;
	};
    }
}

module.exports.Bot = Bot;
