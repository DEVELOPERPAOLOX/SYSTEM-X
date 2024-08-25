import { createHash } from 'crypto';

// Función principal para procesar el comando
const processCommand = async function (message, context) {
  // Obtener el objeto de conexión y el texto del mensaje desde el contexto
  const { connection, text, usedPrefix } = context;

  // Generar un hash MD5 del identificador del remitente
  const hashValue = createHash('md5').update(message.sender).digest('hex');

  // Asegurarse de que connection y fakeReply estén definidos
  if (connection && typeof connection.fakeReply === 'function') {
    // Enviar una respuesta falsa con el hash generado
    connection.fakeReply(
      message.chat, 
      hashValue, 
      '0@s.whatsapp.net', 
      '乂 N U M E R O - D E - S E R I E 乂', 
      'status@broadcast'
    );
  } else {
    console.error('Connection object or fakeReply method is not defined');
  }
}

// Configuración del comando
processCommand.help = ['myns'];
processCommand.tags = ['xp'];
processCommand.command = /^(myns|ceksn)$/i;
processCommand.register = true;

export default processCommand;
