import { totalmem, freemem } from 'os';
import os from 'os';
import util from 'util';
import osu from 'node-os-utils';
import { performance } from 'perf_hooks';
import { sizeFormatter } from 'human-readable';
import speed from 'performance-now';
import { spawn, exec, execSync } from 'child_process';

const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` });

// Define los IDs y nombres de los chats a los que enviar el mensaje
let canalId = [
    "120363316264159575@newsletter", 
    "120363316264159575@newsletter", 
    "120363316264159575@newsletter", 
    "120363316264159575@newsletter"
];
let canalNombre = [
    "✅ ＣＡＮＡＬ | ＳＹＳＴＥＭ Ｘ", 
    "✅ ＣＡＮＡＬ | ＳＹＳＴＥＭ Ｘ", 
    "✅ ＣＡＮＡＬ | ＳＹＳＴＥＭ Ｘ", 
    "✅ ＣＡＮＡＬ | ＳＹＳＴＥＭ Ｘ"
];

var handler = async (m, { conn }) => {
    let timestamp = speed();
    let latensi = speed() - timestamp;

    let _muptime = process.uptime() * 1000;
    let muptime = clockString(_muptime);

    let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
    let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]);

    let texto = `*\`𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*
> 🚀 ${latensi.toFixed(4)}

*\`𝐃𝐀𝐓𝐎𝐒 𝐃𝐄𝐋 𝐒𝐄𝐑𝐕𝐈𝐃𝐎𝐑 𝐇𝐎𝐒𝐓:\`*
> ✅𝐂𝐎𝐑𝐈𝐍𝐏𝐋𝐔𝐒`.trim();

    // Itera sobre cada ID en el array canalId
    for (let i = 0; i < canalId.length; i++) {
        let chatId = canalId[i];
        let nombreCanal = canalNombre[i];

        await conn.sendMessage(chatId, { 
            text: texto, 
            contextInfo: { 
                externalAdReply: { 
                    title: 'ＶＥＬＯＣＩＤＡＤ',
                    body: 'ＳＹＳＴＥＭ Ｘ', 
                    thumbnailUrl: 'https://th.bing.com/th/id/OIG3.2m4d0gMcd0jt.lPVn.B8?w=1024&h=1024&rs=1&pid=ImgDetMain', 
                    sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u',
                    mediaType: 1, 
                    renderLargerThumbnail: true 
                }
            } 
        });
    }
};

handler.help = ['ping'];
handler.tags = ['bot'];
handler.command = ['ping', 'velocidad'];
handler.register = true;

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
