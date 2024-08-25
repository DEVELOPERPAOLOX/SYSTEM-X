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
        const texto1 = `\`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`\n
            ✩ *Título ∙* ${vid.title}\n
            ✩ *Duración ∙* ${vid.timestamp}\n
            ✩ *Visitas ∙* ${vid.views}\n
            ✩ *Autor ∙* ${vid.author.name}\n
            ✩ *Publicado ∙* ${vid.ago}\n
            ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`.trim();
        
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
        if (!text) return conn.reply(m.chat, `*🚩 Ingresa el título de un video o música de YouTube.*`, m);
        try {
            const res = await yts(text);
            const vid = res.videos[0];
            const q = '128kbps';
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(() => m.react('✖️'));
            
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
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*\n\n` + error, m).then(() => m.react('✖️'));
            console.error(error);
        }
    }

    if (command == "mp4") {
        if (!text) return conn.reply(m.chat, `*🚩 Ingresa el título de un video o música de YouTube.*`, m);
        await m.react('🕓');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '360p';
        const texto1 = `Y O U T U B E 乂 M U S I C\n
            ✩ *Título ∙* ${vid.title}\n
            ✩ *Duración ∙* ${vid.timestamp}\n
            ✩ *Visitas ∙* ${vid.views}\n
            ✩ *Autor ∙* ${vid.author.name}\n
            ✩ *Publicado ∙* ${vid.ago}\n
            ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(() => m.react('✖️'));
            
            await conn.sendMessage(m.chat, {
                video: { url: dl_url },
                mimetype: 'video/mp4',
                fileName: `${vid.title}.mp4`,
                caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`,
                quoted: m
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(() => m.react('✖️'));
            console.error(error);
        }
    }

    if (command == "mp3doc") {
        if (!text) return conn.reply(m.chat, `*🚩 Ingresa el título de un video o música de YouTube.*`, m);
        await m.react('🕓');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '128kbps';
        const texto1 = `Y O U T U B E 乂 D O C\n
            ✩ *Título ∙* ${vid.title}\n
            ✩ *Duración ∙* ${vid.timestamp}\n
            ✩ *Visitas ∙* ${vid.views}\n
            ✩ *Autor ∙* ${vid.author.name}\n
            ✩ *Publicado ∙* ${vid.ago}\n
            ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(() => m.react('✖️'));
            
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
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(() => m.react('✖️'));
            console.error(error);
        }
    }

    if (command == "mp4doc") {
        if (!text) return conn.reply(m.chat, `*🚩 Ingresa el título de un video o música de YouTube.*`, m);
        await m.react('🕓');
        let res = await yts(text);
        let vid = res.videos[0];
        let q = '360p';
        const texto1 = `Y O U T U B E 乂 M U S I C\n
            ✩ *Título ∙* ${vid.title}\n
            ✩ *Duración ∙* ${vid.timestamp}\n
            ✩ *Visitas ∙* ${vid.views}\n
            ✩ *Autor ∙* ${vid.author.name}\n
            ✩ *Publicado ∙* ${vid.ago}\n
            ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`;

        try {
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(() => m.react('✖️'));
            
            await conn.sendMessage(m.chat, {
                document: { url: dl_url },
                mimetype: "video/mp4",
                fileName: `${vid.title}.mp4`,
                caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`,
                quoted: m
            });
            await m.react('✅');
        } catch (error) {
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(() => m.react('✖️'));
            console.error(error);
        }
    }
}

handler.help = ['play', 'mp3', 'mp4', 'mp3doc', 'mp4doc'];
handler.tags = ['downloader'];
handler.command = /^(play|mp3|mp4|mp3doc|mp4doc)$/i;
handler.limit = 2;

export default handler;
