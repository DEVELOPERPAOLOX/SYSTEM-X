import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

// Manejador principal
const handleNotification = async (message, { conn, text, participants }) => {
  // Verifica si el mensaje está en un chat de grupo y tiene texto
  if (message.chat && participants.length > 0) {
    // Extrae los IDs de los participantes del chat y los decodifica
    let userIds = participants.map(user => conn.decodeJid(user.id));
    
    // Determina si el mensaje es citado o no
    let originalMessage = message.quoted ? message.quoted : message;
    let messageContent = message.quoted ? message.quoted : message.msg;
    
    // Genera el mensaje que será enviado
    const formattedMessage = conn.cMod(message.chat,
      generateWAMessageFromContent(message.chat, {
        [messageContent.toJSON ? originalMessage.mtype : 'extendedTextMessage']: messageContent.toJSON ? messageContent.toJSON() : {
          text: messageContent || ''
        }
      }, {
        userJid: conn.user.id
      }),
      text || originalMessage.text, conn.user.jid, { mentions: userIds }
    );
    
    // Envía el mensaje formateado al chat
    await conn.relayMessage(message.chat, formattedMessage.message, { messageId: formattedMessage.key.id });
  }
}

// Configuración para activar el manejador sin prefijo
handleNotification.command = ['notify', 'n']
handleNotification.group = true;
handleNotification.admin = true;

export default handleNotification;
