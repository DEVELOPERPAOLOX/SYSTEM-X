// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
var handler = async (m, { conn, command }) => {
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let estado = `*\`𝐔𝐏𝐓𝐈𝐌𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗:\`*
> ⏰ ${uptime}`.trim();

    // URL de imagen y URL de fuente
    let imageUrl = 'https://th.bing.com/th/id/OIG3.gykYEWN8QAgNYfwhtTvi?w=1024&h=1024&rs=1&pid=ImgDetMain';
    let sourceUrl = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u';

    await conn.sendMessage(m.chat, { 
        text: estado, 
        contextInfo: { 
            externalAdReply: { 
                title: 'ＵＰＴＩＭＥ',
                body: 'ＳＹＳＴＥＭ Ｘ',
                thumbnailUrl: imageUrl, 
                sourceUrl: sourceUrl, 
                mediaType: 1, 
                renderLargerThumbnail: true 
            }
        }, 
        mentions: [m.sender] 
    });
};

handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|uptime|botstat(us)?)$/i;
export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
