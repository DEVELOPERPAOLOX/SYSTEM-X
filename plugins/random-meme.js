import memeGenerator from 'hispamemes';

let memeHandler = async (message, { command, conn }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeGenerator.meme();

    // Envía el archivo del meme con un pie de foto
    conn.sendFile(message.chat, memeUrl, '𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗.jpg', '\`𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗\`', message, fake,);
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.', error);
    // Verifica si el método `reply` existe en el objeto `conn`
    if (conn.reply) {
      conn.reply(message.chat, '❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.', message);
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
