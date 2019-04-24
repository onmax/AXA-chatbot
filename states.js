/*
   States
   -1: couldn't find what you are looking for
   0: Start
   1: Error
   2: DNI
   3: Name
   4: Afected
   5: Poliza
   6: Place
   7: Photo incident
   8: Photo parte
*/
const states = ['greetings', 'accident', 'DNI', 'name', 'naffected', 'insurance', 'address', 'photo', 'photo_doc', 'end',
        'cancel', 'help'
    ];
const redis = require('redis.js');

export  {checkState};

function checkState(statepos, future_state) {

    switch (states[state]) {
        case states[0]:
            return future_state === (states[10] || states[9] || states[1]) ? future_state : null ;
        case states[1]:
            return future_state === (states[10] || states[9] || states[2]) ? future_state : null;
        case states[2]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[3]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[4]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[5]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[6]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[7]:
            return future_state === (states[10] || states[9] || states[3]) ? future_state : null;
        case states[8]:
            return future_state === (states[10] || states[9] || states[8]) ? future_state : null;
        default:
            return null;
    }

}
