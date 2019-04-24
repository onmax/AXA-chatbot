const fs = require('fs');

module.exports = async function trainnlp(manager) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
  // Greetings
  manager.addDocument('es', "Hola", 'agent.greeting');
  manager.addDocument('es', "Buenos días", 'agent.greeting');
  manager.addDocument('es', "Buenas tardes", 'agent.greeting');
  manager.addDocument('es', "Buenas noches", 'agent.greeting');

  // Name and lastname
  manager.addDocument('es', "Mi nombre es %name%", 'agent.user');
  manager.addDocument('es', "Me llamo %name%", 'agent.user');
  manager.addDocument('es', "Soy %name%", 'agent.user');

  // User id.
  manager.addDocument('es', "Mi dni es %userID%", 'agent.user');
  manager.addDocument('es', "dni %userID%", 'agent.user');
  manager.addDocument('es', "%userID%", 'agent.user');

  // Accident
  manager.addDocument('es', "He tenido un accidente", 'agent.accident');
  manager.addDocument('es', "He sufrido un accidente", 'agent.accident');
  manager.addDocument('es', "He sufrido un incidente", 'agent.accident');

  // Number of affected people
  manager.addDocument('es', "%naffected%", 'agent.accident');

  // Number of insurance
  manager.addDocument('es', "%ninsurance%", 'agent.insurance'); 
  manager.addDocument('es', "%ninsurance%", 'agent.insurance');

  // Address
  manager.addDocument('es', "Mi dirección es %address%", 'agent.user'); 
  manager.addDocument('es', "Es %address%", 'agent.user'); 

  // Help
  manager.addDocument('es', "Necesito ayuda", 'agent.help');
  manager.addDocument('es', "Ayuda", 'agent.help');
  manager.addDocument('es', "Tengo una duda", 'agent.help');

  // Cancel
  manager.addDocument('es', "Adios", 'agent.cancel');
  manager.addDocument('es', "Chao", 'agent.cancel');
  manager.addDocument('es', "Cancelar", 'agent.cancel');
  manager.addDocument('es', "Bye", 'agent.cancel');
}