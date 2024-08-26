// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

const handler = async (message, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤 https://getstickerpack.com/stickers/flork-memes-4-1`;
  }

  try {
    const url = text;
    const response = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`);
    const data = await response.json();

    for (const item of (data.result || data)) {
      const stickerData = await sticker(false, item, global.packname, global.author);
      await conn.sendFile(
        message.chat, 
        stickerData, 
        null, 
        { asSticker: true },
        message, 
        true, 
        { contextInfo: { 'forwardingScore': 200, 'isForwarded': true } },
        { quoted: message }
      );
      await wait(5000);
    }
  } catch (error) {
    await message.reply('❎𝐀𝐥𝐠𝐨 𝐬𝐚𝐥𝐢𝐨 𝐦𝐚𝐥, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.');
  }
};

handler.command = /^stickerpack$/i;
export default handler;

const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration));
