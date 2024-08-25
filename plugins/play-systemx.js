// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
import fg from 'api-dylux';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import yts from 'yt-search';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4",
        "mp3doc",
        "mp4doc"
    ];
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ");
    
    if (command == "play" || command == 'play2') {
        if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m);
        await m.react('🎧');
        var res = await yts(text);
        var vid = res.videos[0];
        var q = '128kbps';
        const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`\n
            ┣・✅ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`\n
            ┣・${vid.title}\n
            ┣・✅ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.timestamp}\n
            ┣・✅ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`\n
            ┣・${vid.views}\n
            ┣・✅ \`𝐀𝐔𝐓𝐎𝐑:\`\n
            ┣・${vid.author.name}\n
            ┣・✅ \`𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.ago}\n
            ┣・✅ \`𝐔𝐑𝐋:\`\n
            ┗・${'https://youtu.be/' + vid.videoId}\n`.trim();
        
        await conn.sendMessage(m.chat, {
            text: texto1,
            footer: wm,
            image: { url: res.videos[0].thumbnail },
            buttons: [
                { buttonId: `${usedPrefix}mp3 ${text}`, buttonText: { displayText: '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐀𝐔𝐃𝐈𝐎🎵' }, type: 1 },
                { buttonId: `${usedPrefix}mp4 ${text}`, buttonText: { displayText: '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐕𝐈𝐃𝐄𝐎📽' }, type: 1 }
            ],
            headerType: 4
        });
    }
    
    if (command == "mp3") {
        if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m);
        try {
            const res = await yts(text);
            const vid = res.videos[0];
            const q = '128kbps';
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m).then(() => m.react('❎'));
            
            await conn.sendMessage(m.chat, {
                audio: { url: dl_url },
                mimetype: "audio/mp4",
                fileName: vid.title + '.mp3',
                quoted: m,
                contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': true,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: `${vid.title}`,
                        body: `${vid.author.name}`,
                        mediaType: 2,
                        sourceUrl: `${vid.url}`,
                        thumbnail: await (await fetch(vid.thumbnail)).buffer()
                    }
                }
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.\n\n` + error, m).then(() => m.react('❎'));
            console.error(error);
        }
    }

    if (command == "mp4") {
        if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m);
        await m.react('🎧');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '360p';
        const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`\n
            ┣・✅ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`\n
            ┣・${vid.title}\n
            ┣・✅ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.timestamp}\n
            ┣・✅ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`\n
            ┣・${vid.views}\n
            ┣・✅ \`𝐀𝐔𝐓𝐎𝐑:\`\n
            ┣・${vid.author.name}\n
            ┣・✅ \`𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.ago}\n
            ┣・✅ \`𝐔𝐑𝐋:\`\n
            ┗・${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m).then(() => m.react('❎'));
            
            await conn.sendMessage(m.chat, {
                video: { url: dl_url },
                mimetype: 'video/mp4',
                fileName: `${vid.title}.mp4`,
                caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`,
                quoted: m
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.`, m).then(() => m.react('❎'));
            console.error(error);
        }
    }

    if (command == "mp3doc") {
        if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m);
        await m.react('🎧');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '128kbps';
        const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`\n
            ┣・✅ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`\n
            ┣・${vid.title}\n
            ┣・✅ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.timestamp}\n
            ┣・✅ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`\n
            ┣・${vid.views}\n
            ┣・✅ \`𝐀𝐔𝐓𝐎𝐑:\`\n
            ┣・${vid.author.name}\n
            ┣・✅ \`𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.ago}\n
            ┣・✅ \`𝐔𝐑𝐋:\`\n
            ┗・${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m).then(() => m.react('❎'));
            
            await conn.sendMessage(m.chat, {
                document: { url: dl_url },
                mimetype: "audio/mpeg",
                fileName: vid.title + '.mp3',
                quoted: m,
                contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': true,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: `${vid.title}`,
                        body: `${vid.author.name}`,
                        mediaType: 2,
                        sourceUrl: `${vid.url}`,
                        thumbnail: await (await fetch(vid.thumbnail)).buffer()
                    }
                }
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.`, m).then(() => m.react('❎'));
            console.error(error);
        }
    }

    if (command == "mp4doc") {
        if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m);
        await m.react('🎧');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '360p';
        const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`\n
            ┣・✅ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`\n
            ┣・${vid.title}\n
            ┣・✅ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.timestamp}\n
            ┣・✅ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`\n
            ┣・${vid.views}\n
            ┣・✅ \`𝐀𝐔𝐓𝐎𝐑:\`\n
            ┣・${vid.author.name}\n
            ┣・✅ \`𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍:\`\n
            ┣・${vid.ago}\n
            ┣・✅ \`𝐔𝐑𝐋:\`\n
            ┗・${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m).then(() => m.react('❎'));
            
            await conn.sendMessage(m.chat, {
                document: { url: dl_url },
                mimetype: "video/mp4",
                fileName: `${vid.title}.mp4`,
                caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`,
                quoted: m
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.`, m).then(() => m.react('❎'));
            console.error(error);
        }
    }
}

handler.help = ['play', 'mp3', 'mp4', 'mp3doc', 'mp4doc'];
handler.tags = ['downloader'];
handler.command = /^(play|mp3|mp4|mp3doc|mp4doc)$/i;
handler.limit = 2;

export default handler;
