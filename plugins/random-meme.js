import memeGenerator from 'hispamemes';

let memeHandler = async (message, { command, connection }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeGenerator.meme();

    // Envía el archivo del meme con un pie de foto
    connection.sendFile(message.chat, memeUrl, 'meme.jpg', '𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗', message);
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.', error);
    connection.reply(message.chat, 'Hubo un problema al obtener el meme. Intenta de nuevo más tarde.', message);
  }
};

// Define las propiedades del handler
memeHandler.help = ['meme'];
memeHandler.tags = ['random'];
memeHandler.command = /^(meme|memes)$/i;

export default memeHandler;
