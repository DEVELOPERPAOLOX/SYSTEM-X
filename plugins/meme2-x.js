// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import memeService from 'hispamemes';

let memeCommandHandler = async (msg, { connection, prefix, cmd }) => {
  try {
    // Obtén la URL del meme
    const memeUrl = await memeService.meme();

    // Envía el archivo del meme con un pie de foto
    connection.sendFile(msg.chat, memeUrl, '𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗.jpg', '\`𝐌𝐄𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗\`', msg, fake,);
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.', error);
    connection.reply(msg.chat, '❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.', msg, fake,);
  }
};

// Define los comandos disponibles para este handler
memeCommandHandler.command = ['meme2', 'memes2'];
memeCommandHandler.level = 2;
memeCommandHandler.register = true;

export default memeCommandHandler;
