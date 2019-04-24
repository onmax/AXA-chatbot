import {checkState} from "./states";

class Bot {


    constructor(manager) {
        this.manager = manager;
        this.saved_state = 0;
        this.threshold = 0.5;
    }

    getProcessFun() {
	const man = this.manager;
	const threshold = this.threshold;
	
	return async (event) => {
	    const text_message = event.extra.text_message;
            const result = await man.process(text_message);
	    console.log(result);

	 var answer = checkState(this.saved_state, result.intent);
	 if (answer === null){
	     this.saved_state = 0;
	     return "No te hemos entendido";

     }
	 this.saved_state = result.intent;
    return answer;
	};
    }
}

module.exports.Bot = Bot;
