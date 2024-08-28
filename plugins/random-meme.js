import memeGenerator from 'hispamemes';

let memeHandler = async (message, { command, connection }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeGenerator.meme();

    // Envía el archivo del meme con un pie de foto
    connection.sendFile(message.chat, memeUrl, 'meme.jpg', '😂😂h😂', message);
  } catch (error) {
    console.error('Error al obtener el meme:', error);
    connection.reply(message.chat, 'Hubo un problema al obtener el meme. Intenta de nuevo más tarde.', message);
  }
};

// Define las propiedades del handler
memeHandler.help = ['meme'];
memeHandler.tags = ['random'];
memeHandler.command = /^(meme|memes)$/i;

export default memeHandler;
