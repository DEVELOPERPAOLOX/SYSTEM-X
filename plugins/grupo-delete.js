// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

const procesarEliminacion = async (mensaje, { conexion, prefijo, comando }) => {
  if (!mensaje.quoted) throw `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐝𝐞𝐥 + 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐦𝐬𝐣`;

  try {
    const participante = mensaje.message.extendedTextMessage.contextInfo.participant;
    const mensajeId = mensaje.message.extendedTextMessage.contextInfo.stanzaId;
    return conexion.sendMessage(mensaje.chat, { delete: { remoteJid: mensaje.chat, fromMe: false, id: mensajeId, participant: participante }});
  } catch (error) {
    return conexion.sendMessage(mensaje.chat, { delete: mensaje.quoted.vM.key });
  }
};

procesarEliminacion.help = ['del', 'delete'];
procesarEliminacion.tags = ['group'];
procesarEliminacion.command = /^del(ete)?$/i;
procesarEliminacion.group = true;
procesarEliminacion.admin = true;
procesarEliminacion.botAdmin = true;

export default procesarEliminacion;
