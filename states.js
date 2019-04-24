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
//const redis = require('./redis.js');


module.exports.checkState = (statepos, future_state) => {
    
    const states = ['greetings', 'accident', 'DNI', 'name', 'naffected', 'insurance', 'address', 'photo', 'photo_doc', 'end',
            'cancel', 'help', 'origin'
        ];
        console.log([states[10],states[11],states[0]].includes(future_state), future_state, statepos, "OOOO")
    switch (statepos) {
        case states[12]:
            return [states[10],states[11],states[0],states[1]].includes(future_state) ? future_state : null ;
        case states[1]:
            return [states[10], states[11] , states[2]].includes(future_state) ? future_state : null;
        case states[2]:
            return [states[10], states[11], states[3]].includes(future_state) ? future_state : null;
        case states[3]:
            return [states[10], states[11] , states[4]].includes(future_state) ? future_state : null;
        case states[4]:
            return [states[10], states[11] , states[5]].includes(future_state) ? future_state : null;
        case states[5]:
            return [states[10], states[11], states[6]].includes(future_state) ? future_state : null;
        case states[6]:
            return [states[10], states[11], states[7]].includes(future_state) ? future_state : null;
        case states[7]:
            return [states[10], states[11], states[8]].includes(future_state) ? future_state : null;
        case states[8]:
            return [states[10] , states[11] , states[9]].includes(future_state) ? future_state : null;
        default:
            return null;
    }

}
