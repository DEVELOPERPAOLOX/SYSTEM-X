import memeService from 'hispamemes';

let memeCommandHandler = async (msg, { connection, prefix, cmd }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeService.meme();

    // Envía el archivo del meme con un pie de foto
    connection.sendFile(msg.chat, memeUrl, 'meme.jpg', '😂😂🤣', msg);
  } catch (error) {
    console.error('Error al obtener el meme:', error);
    connection.reply(msg.chat, 'No se pudo obtener el meme. Intenta de nuevo más tarde.', msg);
  }
};

// Define los comandos disponibles para este handler
memeCommandHandler.command = ['meme2', 'memes2'];
memeCommandHandler.level = 2;
memeCommandHandler.register = true;

export default memeCommandHandler;
