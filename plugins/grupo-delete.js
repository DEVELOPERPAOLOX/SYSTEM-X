// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

// Adaptación realizada por [TuNombre]

const procesarEliminacion = async (mensaje, { conexion, prefijo, comando }) => {
  // Verifica si el mensaje está citado
  if (!mensaje.quoted) {
    throw `👋🏻 ¡Hola usuario!\n🚀 Asegúrate de utilizar el comando correctamente.\n✅ Ejemplo: ${prefijo + comando} y responde al mensaje`;
  }

  // Verifica el objeto `conexion`
  if (!conexion || typeof conexion.sendMessage !== 'function') {
    throw new Error('El objeto "conexion" no está definido correctamente o no tiene el método "sendMessage".');
  }

  try {
    // Obtiene el participante y el ID del mensaje
    const participante = mensaje.message.extendedTextMessage.contextInfo.participant;
    const mensajeId = mensaje.message.extendedTextMessage.contextInfo.stanzaId;

    // Intenta eliminar el mensaje
    await conexion.sendMessage(mensaje.chat, {
      delete: {
        remoteJid: mensaje.chat,
        fromMe: false,
        id: mensajeId,
        participant: participante
      }
    });
  } catch (error) {
    console.error('Error en el proceso de eliminación:', error);
    if (mensaje.quoted && mensaje.quoted.vM && mensaje.quoted.vM.key) {
      // Si falla, intenta eliminar el mensaje citado
      await conexion.sendMessage(mensaje.chat, { delete: mensaje.quoted.vM.key });
    } else {
      throw new Error('No se pudo eliminar el mensaje porque no se encontró la clave del mensaje citado.');
    }
  }
};

// Define las propiedades del manejador
procesarEliminacion.help = ['del', 'delete'];
procesarEliminacion.tags = ['group'];
procesarEliminacion.command = /^del(ete)?$/i;
procesarEliminacion.group = true;
procesarEliminacion.admin = true;
procesarEliminacion.botAdmin = true;

// Exporta el manejador
export default procesarEliminacion;
