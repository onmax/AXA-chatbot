const fs = require('fs');

module.exports = async function trainnlp(manager) {

    if (fs.existsSync('./model.nlp')) {
	manager.load('./model.nlp');
	return;
    }
    // Greetings
    manager.addDocument('es', "Hola", 'greeting');
    manager.addDocument('es', "Buenos días", 'greetings');
    manager.addDocument('es', "Buenas tardes", 'greetings');
    manager.addDocument('es', "Buenas noches", 'greetings');

    // Name and lastname
    manager.addDocument('es', "Mi nombre es %name%", 'name');
    manager.addDocument('es', "Me llamo %name%", 'name');
    manager.addDocument('es', "Soy %name%", 'name');

    // User id.
    manager.addDocument('es', "Mi dni es %userID%", 'DNI');
    manager.addDocument('es', "dni %userID%", 'DNI');
    manager.addDocument('es', "%userID%", 'DNI');

    // Accident
    manager.addDocument('es', "He tenido un accidente", 'accident');
    manager.addDocument('es', "He sufrido un accidente", 'accident');
    manager.addDocument('es', "He sufrido un incidente", 'accident');

    // Number of affected people
    manager.addDocument('es', "%naffected%", 'affected');
    manager.addDocument('es', 'Se han visto afectados %naffected%','affected');

    // Number of insurance
    manager.addDocument('es', "%ninsurance%", 'insurance'); 
    manager.addDocument('es', "Mi seguro es: %ninsurance%", 'insurance');
    manager.addDocument('es', "Mi numero de poliza es: %ninsurance%", 'insurance');
    manager.addDocument('es', "Mi poliza es: %ninsurance%", 'insurance');

    // Address
    manager.addDocument('es', "Mi dirección es %address%", 'address'); 
    manager.addDocument('es', "Es %address%", 'address'); 

    // Help
    manager.addDocument('es', "Necesito ayuda", 'agent.help');
    manager.addDocument('es', "Ayuda", 'agent.help');
    manager.addDocument('es', "Tengo una duda", 'agent.help');

    // Cancel
    manager.addDocument('es', "Adios", 'cancel');
    manager.addDocument('es', "Chao", 'cancel');
    manager.addDocument('es', "Cancelar", 'cancel');
    manager.addDocument('es', "Bye", 'cancel');

    const nameEntity = manager.addTrimEntity('name');
    nameEntity.addAfterLastCondition('es', 'es');
    nameEntity.addAfterLastCondition('es', 'llamo');

    const dniEntity = manager.addTrimEntity('DNI');
    dniEntity.addAfterLastCondition('es','dni');
    dniEntity.addAfterLastCondition('es','es');

    const affectedEntity = manager.addTrimEntity('naffected');
    affectedEntity.addAfterLastCondition('es','afectados');
    affectedEntity.addAfterLastCondition('es','son');
    affectedEntity.addAfterLastCondition('es','sido');
    affectedEntity.addAfterLastCondition('es','sufrido');


    const insuranceEntity = manager.addTrimEntity('ninsurance');
    insuranceEntity.addAfterLastCondition('es','es');
    

    const addressEntity = manager.addTrimEntity('address');
    addressEntity.addAfterLastCondition('es','en');
    addressEntity.addAfterLastCondition('es','es');


    manager.slotManager.addSlot('name', 'name', true);
    manager.slotManager.addSlot('DNI','userID', true);
    manager.slotManager.addSlot('naffected','affected',true);
    manager.slotManager.addSlot('ninsurance','insurance',true);
    manager.slotManager.addSlot('address','address',true);

    manager.addAnswer('es', 'agent.user', 'Hola {{ name }}');

    await manager.train();
};
