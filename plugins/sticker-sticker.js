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
        return m.reply(`*EL VIDEO NO PUEDE DURAR MÁS DE 7 SEGUNDOS*`);
      }
      let img = await q.download?.();
      if (!img) throw `> 🏴𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘢 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 [.𝘴𝘵𝘪𝘤𝘬𝘦𝘳]`;

      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
        await conn.reply(m.chat, `> 🏴𝘔𝘪𝘻𝘶𝘬𝘪 | 𝘉𝘰𝘵 𝘦𝘴𝘵á 𝘤𝘳𝘦𝘢𝘯𝘥𝘰 𝘵𝘶 𝘴𝘵𝘪𝘤𝘬𝘦𝘳, 𝘦𝘴𝘱𝘦𝘳𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰.`, m);
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
        return m.reply(`URL inválido`);
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
            title: 'ＭＩＺＵＫＩ | ＢＯＴ',
            body: `ᴅᴇᴠᴇʟᴏᴘᴇʀ: ʙᴇɴᴊᴀᴍɪɴ`,
            mediaType: 2,
            sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u', // Enlace actualizado
            thumbnail: imagen1
          }
        }
      }, { quoted: m });
    } else {
      throw `> 🏴𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘢 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 [.𝘴𝘵𝘪𝘤𝘬𝘦𝘳]`;
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
