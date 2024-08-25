import { createHash } from 'crypto';

// Función principal que maneja el comando
const processCommand = async function (message, { connection, inputText, prefixUsed }) {
  // Generar un hash MD5 del identificador del remitente
  let hashValue = createHash('md5').update(message.sender).digest('hex');

  // Enviar una respuesta falsa con el hash generado
  connection.fakeReply(message.chat, hashValue, '0@s.whatsapp.net', `乂 N U M E R O - D E - S E R I E 乂`, 'status@broadcast');
}

// Configuración del comando
processCommand.help = ['myns'];
processCommand.tags = ['xp'];
processCommand.command = /^(myns|ceksn)$/i;
processCommand.register = true;

export default processCommand;
