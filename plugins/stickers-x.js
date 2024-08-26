// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false;
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime) && (q.msg || q).seconds > 8) {
        return m.reply(`❎𝐒𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐞𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨, 𝐞𝐧𝐭𝐨𝐧𝐜𝐞𝐬 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐝𝐮𝐫𝐚𝐫 +𝟕 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.`);
      }
      let img = await q.download?.();
      if (!img) throw `⚒️𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐞𝐧𝐝𝐨 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐨 𝐯𝐢𝐝𝐞𝐨.`;

      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
        await conn.reply(m.chat, `✅𝐄𝐬𝐭𝐨𝐲 𝐜𝐫𝐞𝐚𝐧𝐝𝐨 𝐭𝐮 𝐬𝐭𝐢𝐜𝐤𝐞𝐫, 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫.`, m);
      } catch (e) {
        console.error(e);
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== 'string') out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) {
        stiker = await sticker(false, args[0], global.packname, global.author);
      } else {
        return m.reply(`❎𝐄𝐥 𝐔𝐑𝐋 𝐞𝐬 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨.`);
      }
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker) {
      conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, {
        contextInfo: {
          'forwardingScore': 200,
          'isForwarded': false,
          externalAdReply: {
            showAdAttribution: false,
            title: 'ＳＴＩＣＫＥＲ',
            body: `ＳＹＳＴＥＭ Ｘ`,
            mediaType: 2,
            sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u',
            thumbnail: imagen1
          }
        }
      }, { quoted: m });
    } else {
      throw `⚒️𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐞𝐧𝐝𝐨 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐨 𝐯𝐢𝐝𝐞𝐨.`;
    }
  }
};

handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>'];
handler.tags = ['sticker'];
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i;

export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
