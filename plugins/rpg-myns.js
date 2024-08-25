import { createHash } from 'crypto';

// Función para manejar el comando
const handleRequest = async function (message, { conn, text, usedPrefix }) {
  // Crear un hash MD5 usando el identificador del remitente
  const seriesNumber = createHash('md5').update(message.sender).digest('hex');

  // Enviar una respuesta falsa con el número de serie generado
  conn.fakeReply(message.chat, seriesNumber, '0@s.whatsapp.net', '乂 N U M E R O - D E - S E R I E 乂', 'status@broadcast');
}

// Configuración del comando
handleRequest.help = ['myns'];
handleRequest.tags = ['xp'];
handleRequest.command = /^(myns|ceksn)$/i;
handleRequest.register = true;

export default handleRequest;
