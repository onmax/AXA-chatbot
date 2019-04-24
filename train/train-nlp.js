const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
  manager.addDocument('es', "Hola", 'agent.greeting');
  manager.addDocument('es', "Buenos días", 'agent.greeting');
  manager.addDocument('es', "Buenas tardes", 'agent.greeting');
  manager.addDocument('es', "Buenas noches", 'agent.greeting');
  manager.addDocument('es', "Mi nombre es %name% %lastname%", 'agent.name');
  manager.addDocument('es', "Me llamo %name% %lastname%", 'agent.name');
  manager.addDocument('es', "Soy %name% %lastname%", 'agent.name');
  manager.addDocument('es', "Mi dni es %userID%", 'agent.id');
  manager.addDocument('es', "dni %userID%", 'agent.id');
  manager.addDocument('es', "He tenido un accidente", 'agent.accident');
  manager.addDocument('es', "He sufrido un accidente", 'agent.accident');
  manager.addDocument('es', "He sufrido una incidente", 'agent.accident');
  manager.addDocument('es', "He sufrido una incidente", 'agent.accident');
  manager.addDocument('es', "Necesito ayuda", 'agent.help');
  manager.addDocument('es', "Ayuda", 'agent.help');
  manager.addDocument('es', "Tengo una duda", 'agent.help');
  manager.addDocument('es', "Adios", 'agent.cancel');
  manager.addDocument('es', "Chao", 'agent.cancel');
  manager.addDocument('es', "Cancelar", 'agent.cancel');
  manager.addDocument('es', "Bye", 'agent.cancel');
}