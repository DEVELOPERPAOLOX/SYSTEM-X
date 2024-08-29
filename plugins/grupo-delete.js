// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

// Adaptado por [TuNombre]

const eliminarMensaje = async (msg, { cliente, prefijo, comando }) => {
  if (!msg.quoted) {
    throw `👋🏻 ¡Hola usuario!\n🚀 Por favor, asegúrate de usar el comando correctamente.\n✅ Ejemplo: ${prefijo + comando} y responde al mensaje`;
  }

  try {
    // Obtiene información del mensaje citado
    const participante = msg.message.extendedTextMessage.contextInfo.participant;
    const mensajeId = msg.message.extendedTextMessage.contextInfo.stanzaId;

    // Intenta eliminar el mensaje
    await cliente.sendMessage(msg.chat, {
      delete: {
        remoteJid: msg.chat,
        fromMe: false,
        id: mensajeId,
        participant: participante
      }
    });
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
    if (msg.quoted && msg.quoted.vM && msg.quoted.vM.key) {
      // Si la eliminación falla, intenta con el mensaje citado
      await cliente.sendMessage(msg.chat, { delete: msg.quoted.vM.key });
    } else {
      throw new Error('No se pudo eliminar el mensaje porque no se encontró la clave del mensaje citado.');
    }
  }
};

// Configura el manejador
eliminarMensaje.help = ['del', 'delete'];
eliminarMensaje.tags = ['group'];
eliminarMensaje.command = /^del(ete)?$/i;
eliminarMensaje.group = true;
eliminarMensaje.admin = true;
eliminarMensaje.botAdmin = true;

export default eliminarMensaje;
