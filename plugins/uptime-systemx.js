// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
import { totalmem, freemem } from 'os';
import os from 'os';
import util from 'util';
import osu from 'node-os-utils';
import { performance } from 'perf_hooks';
import { sizeFormatter } from 'human-readable';
import speed from 'performance-now';
import { spawn, exec, execSync } from 'child_process';

const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` });

// Define los IDs y nombres de los canales a los que enviar el mensaje
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

var handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './media/menus/Menu1.jpg'; // No se utiliza en este caso, pero se puede eliminar si no es necesario
    let name = await conn.getName(m.sender);
    let usuario = `${m.sender.split("@")[0]}`;
    let aa = usuario + '@s.whatsapp.net';
    let _uptime = process.uptime() * 1000;
    let _muptime;

    if (process.send) { 
        process.send('uptime');
        _muptime = await new Promise(resolve => { 
            process.once('message', resolve);
            setTimeout(resolve, 1000); 
        }) * 1000;
    }

    let fkontak = { 
        "key": { 
            "participants":"0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    };

    let uptime = clockString(_uptime);
    let estado = `${pickRandom([`*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*\n> ⏰ ${uptime}`, `*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*\n> ⏰ ${uptime}`, `*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*\n> ⏰ ${uptime}`, `*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*\n> ⏰ ${uptime}`, `*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*\n> ⏰ ${uptime}`])}`.trim();

    // URL de imagen y URL de fuente
    let imageUrl = 'https://th.bing.com/th/id/OIG3.gykYEWN8QAgNYfwhtTvi?w=1024&h=1024&rs=1&pid=ImgDetMain';
    let sourceUrl = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u';

    // Itera sobre cada ID en el array canalId
    for (let i = 0; i < canalId.length; i++) {
        let chatId = canalId[i];
        let nombreCanal = canalNombre[i];

        await conn.sendMessage(chatId, { 
            text: estado, 
            contextInfo: { 
                externalAdReply: { 
                    title: 'ＵＰＴＩＭＥ',
                    body: 'ＳＹＳＴＥＭ Ｘ',
                    thumbnailUrl: 'https://th.bing.com/th/id/OIG3.gykYEWN8QAgNYfwhtTvi?w=1024&h=1024&rs=1&pid=ImgDetMain', 
                    sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u', 
                    mediaType: 1, 
                    renderLargerThumbnail: true 
                }
            }, 
            mentions: [m.sender] 
        }, { quoted: fkontak });
    }
};

handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|uptime|botstat(us)?)$/i;
export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
