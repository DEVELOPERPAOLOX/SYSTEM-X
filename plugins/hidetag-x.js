// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

const handleNotification = async (message, { conn, text, participants }) => {
  // Extrae los IDs de los participantes del chat y los decodifica
  let userIds = participants.map(user => conn.decodeJid(user.id))
  
  // Determina si el mensaje es citado o no
  let originalMessage = message.quoted ? message.quoted : message
  let messageContent = message.quoted ? message.quoted : message.msg
  
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
  )
  
  // Envía el mensaje formateado al chat
  await conn.relayMessage(message.chat, formattedMessage.message, { messageId: formattedMessage.key.id })
}

// Configuración del comando
handleNotification.help = ['notify <message>']
handleNotification.tags = ['group']
handleNotification.command = ['notify', 'n', 'hidetag', 'aviso', 'noti']
handleNotification.group = true
handleNotification.admin = true

export default handleNotification
