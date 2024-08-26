// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

let handleTag = async (message, { conn, text, participants }) => {
  // Obtén los IDs de los participantes, excluyendo el ID del bot
  let participantIds = participants.map(user => user.id).filter(id => id !== conn.user.jid);

  // Verifica si el mensaje es una cita
  if (!message.quoted) {
    return message.reply(`𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒆𝒏𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒏𝒐𝒕𝒊𝒇𝒊𝒄𝒂𝒓.`);
  }

  // Envía el mensaje citado a los participantes mencionados
  conn.sendMessage(message.chat, { forward: message.quoted.fakeObj, mentions: participantIds });
}

// Configuración del comando
handleTag.help = ['tag']
handleTag.tags = ['group']
handleTag.command = /^(totag|tag)$/i
handleTag.admin = true
handleTag.group = true

export default handleTag
