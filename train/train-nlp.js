const fs = require('fs');

module.exports = async function trainnlp(manager) {

    if (fs.existsSync('./model.nlp')) {
	manager.load('./model.nlp');
	return;
    }
    // Greetings
    manager.addDocument('es', "Hola", 'greetings');
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
    manager.addDocument('es', 'Hay %naffected% afectados','affected');

    // Number of insurance
    manager.addDocument('es', "%ninsurance%", 'insurance'); 
    manager.addDocument('es', "Mi seguro es: %ninsurance%", 'insurance');
    manager.addDocument('es', "Mi numero de poliza es: %ninsurance%", 'insurance');
    manager.addDocument('es', "Mi poliza es: %ninsurance%", 'insurance');

    // Address
    manager.addDocument('es', "Mi dirección es %address%", 'address'); 
    manager.addDocument('es', "Es %address%", 'address'); 
    manager.addDocument('es', "%address%", 'address'); 

    // Help
    manager.addDocument('es', "Necesito ayuda", 'help');
    manager.addDocument('es', "Ayuda", 'help');
    manager.addDocument('es', "Tengo una duda", 'help');

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

    manager.addAnswer('es', 'greetings', 'Hola');
    manager.addAnswer('es', 'accident', 'Vaya, lo sentimos 😢. Necesitamos más información sobre el accidente. ¿Cuál es tu DNI?');
    manager.addAnswer('es', 'DNI', 'De acuerdo, ¿y como te llamas?');
    manager.addAnswer('es', 'name', 'De acuerdo, {{ name }} y ¿cuántas personas se han visto afectadas?');
    manager.addAnswer('es', 'affected', 'Vaya… Ya estamos manos a la obra. ¿Cuál es tu número de poliza?');
    manager.addAnswer('es', 'insurance', '¿Y cuál es tu dirección?');
    manager.addAnswer('es', 'address', '¿Puedes enviar una foto del incidente?');
    manager.addAnswer('es', 'help', '¿En qué quieres que te ayudemos?');
    manager.addAnswer('es', 'cancel', 'De acuerdo');

    await manager.train();
};
