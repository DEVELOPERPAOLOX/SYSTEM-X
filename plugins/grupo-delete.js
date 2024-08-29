// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

const procesarEliminacion = async (mensaje, { conexion, prefijo, comando }) => {
  if (!mensaje.quoted) {
    throw `👋🏻 ¡Hola usuario!\n🚀 Asegúrate de utilizar el comando correctamente.\n✅ Ejemplo: ${prefijo + comando} y responde al mensaje`;
  }

  try {
    if (!conexion || typeof conexion.sendMessage !== 'function') {
      throw new Error('El objeto "conexion" no está definido correctamente o no tiene el método "sendMessage".');
    }
    
    const participante = mensaje.message.extendedTextMessage.contextInfo.participant;
    const mensajeId = mensaje.message.extendedTextMessage.contextInfo.stanzaId;
    
    await conexion.sendMessage(mensaje.chat, { delete: { remoteJid: mensaje.chat, fromMe: false, id: mensajeId, participant: participante }});
  } catch (error) {
    console.error('Error en el proceso de eliminación:', error);
    if (mensaje.quoted && mensaje.quoted.vM && mensaje.quoted.vM.key) {
      await conexion.sendMessage(mensaje.chat, { delete: mensaje.quoted.vM.key });
    } else {
      throw new Error('No se pudo eliminar el mensaje porque no se encontró la clave del mensaje citado.');
    }
  }
};

procesarEliminacion.help = ['del', 'delete'];
procesarEliminacion.tags = ['group'];
procesarEliminacion.command = /^del(ete)?$/i;
procesarEliminacion.group = true;
procesarEliminacion.admin = true;
procesarEliminacion.botAdmin = true;

export default procesarEliminacion;
