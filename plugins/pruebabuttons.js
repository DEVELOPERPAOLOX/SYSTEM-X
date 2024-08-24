import { promises as fs } from 'fs';
import { join as joinPath } from 'path';
import fetch from 'node-fetch';

// Función para enviar un mensaje con botones interactivos
const sendInteractiveButtons = async (message, { conn }) => {
  try {
    // Definición de botones
    const buttons = [
      { buttonId: 'option1', buttonText: { displayText: 'Opción 1' }, type: 1 },
      { buttonId: 'option2', buttonText: { displayText: 'Opción 2' }, type: 1 },
      { buttonId: 'option3', buttonText: { displayText: 'Opción 3' }, type: 1 }
    ];

    // Contenido del mensaje con botones
    const buttonMessage = {
      text: 'Selecciona una opción:',
      footer: 'Bot de Ejemplo',
      buttons: buttons,
      headerType: 1
    };

    // Enviar el mensaje con botones
    await conn.sendMessage(message.chat, buttonMessage);

  } catch (error) {
    console.error('Error al enviar el mensaje con botones:', error);
    conn.reply(message.chat, '❎ Lo sentimos, hubo un error al enviar el mensaje con botones.', message);
  }
};

// Función para manejar la respuesta de botones
const handleButtonResponse = async (message, { conn }) => {
  try {
    const buttonId = message.buttonId; // Obtener el ID del botón seleccionado
    let responseText;

    // Responder según el botón seleccionado
    switch (buttonId) {
      case 'option1':
        responseText = 'Has seleccionado la Opción 1';
        break;
      case 'option2':
        responseText = 'Has seleccionado la Opción 2';
        break;
      case 'option3':
        responseText = 'Has seleccionado la Opción 3';
        break;
      default:
        responseText = 'Selección no reconocida';
    }

    // Enviar la respuesta al usuario
    await conn.reply(message.chat, responseText, message);
    
  } catch (error) {
    console.error('Error al manejar la respuesta de los botones:', error);
  }
};

// Configuración del comando
const pruebabuttonsHandler = async (message, { conn, usedPrefix }) => {
  if (message.text === `${usedPrefix}pruebabuttons`) {
    await sendInteractiveButtons(message, { conn });
  } else if (message.buttonId) {
    await handleButtonResponse(message, { conn });
  }
};

// Configuración del comando
pruebabuttonsHandler.help = ['pruebabuttons'];
pruebabuttonsHandler.tags = ['main'];
pruebabuttonsHandler.command = ['pruebabuttons'];
pruebabuttonsHandler.register = true;

export default pruebabuttonsHandler;
