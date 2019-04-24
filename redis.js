

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports.KEY_DNI = 'dni';
module.exports.KEY_NAME = 'name';
module.exports.KEY_AFFECTED = 'affected';
module.exports.KEY_INFO = 'info';
module.exports.KEY_PLACE = 'place';
module.exports.KEY_PHOTO_INCIDENT = 'incident';
module.exports.KEY_PHOTO_PARTE = 'parte';
module.exports.KEY_MATRICULA = 'matricula';
module.exports.KEY_MODEL = 'car_model';
module.exports.KEY_DRIVER_LICENSE_YEAR = 'driver_license_year';
module.exports.KEY_VEHICLE_DATA = 'key_vehicle_data';
export {setValue}


function setValue(chatid, key, value) {
    var redis = require("redis"),
        client = redis.createClient();
    return new Promise(function (fulfill, reject){
            client.hset(`user.${chatid}`, key, value, function (err, reply) {
                console.log(reply.length + " replies:");
                if (err) reject(err);
                else fulfill(reply);
                client.quit();
            });

    });


}

setValue('asd', KEY_DNI, '5367282Y',)
