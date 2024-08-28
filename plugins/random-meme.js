import memeGenerator from 'hispamemes';

let memeHandler = async (message, { command, conn }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeGenerator.meme();

    // Envía el archivo del meme con un pie de foto
    conn.sendFile(message.chat, memeUrl, 'meme.jpg', '𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗', message);
  } catch (error) {
    console.error('Error al obtener el meme:', error);
    // Verifica si el método `reply` existe en el objeto `conn`
    if (conn.reply) {
      conn.reply(message.chat, 'Hubo un problema al obtener el meme. Intenta de nuevo más tarde.', message);
    } else {
      console.error('Método `reply` no encontrado en el objeto `conn`.');
    }
  }
};

// Define las propiedades del handler
memeHandler.help = ['meme'];
memeHandler.tags = ['random'];
memeHandler.command = /^(meme|memes)$/i;

export default memeHandler;
