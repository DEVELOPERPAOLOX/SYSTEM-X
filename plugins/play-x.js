// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
   // if (!lister.includes(feature)) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, fake,)
	  if (command == "play" || command == 'play2') {
            if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`,  m, fake,)
    await m.react('✅')
    var res = await yts(text)
    var vid = res.videos[0]
    var q = '128kbps'
const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`
┣・ 𝐓𝐈𝐓𝐔𝐋𝐎:
┣・${vid.title}
┣・ 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:
┣・${vid.timestamp}
┣・ 𝐕𝐈𝐒𝐈𝐓𝐀𝐒:
┣・${vid.views}
┣・ 𝐀𝐔𝐓𝐎𝐑:
┣・${vid.author.name}
┣・ 𝐅𝐄𝐂𝐇𝐀:
┣・${vid.ago}
┣・ 𝐔𝐑𝐋:
┗・${'https://youtu.be/' + vid.videoId}`.trim()
		
await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
	['𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐀𝐔𝐃𝐈𝐎🎵', `${usedPrefix}mp3 ${text}`],
	['𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐕𝐈𝐃𝐄𝐎📽', `${usedPrefix}mp4 ${text}`]
  ], null, [['𝐂𝐀𝐍𝐀𝐋 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗✅', `${md}`]], m, fake,)
	  }
  
            if (command == "mp3") {
	 if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m, fake,)
		
       try {
    const res = await yts(text)
    const vid = res.videos[0]
    const q = '128kbps'
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m, fake,).then(_ => m.react('❎'))
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m, fake,).then(_ => m.react('❎'))
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.\n\n` + error, m, fake,).then(_ => m.react('❎'))
        console.error(error)
    }}
    }
        
        if (command == "mp4") {
            if (!text) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m, fake,)
    await m.react('✅')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`
┣・ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`
┣・${vid.title}
┣・ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`
┣・${vid.timestamp}
┣・ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`
┣・${vid.views}
┣・ \`𝐀𝐔𝐓𝐎𝐑:\`
┣・${vid.author.name}
┣・ \`𝐅𝐄𝐂𝐇𝐀:\`
┣・${vid.ago}
┣・ \`𝐔𝐑𝐋:\`
┗・${'https://youtu.be/' + vid.videoId}`
	/*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
       */
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`,  m, fake,).then(_ => m.react('❎'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m, fake,)
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`, m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m, fake,)
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.`, m, fake,).then(_ => m.react('❎'))
        console.error(error)
    }}}
    
    if (command == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`,  m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`
┣・ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`
┣・${vid.title}
┣・ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`
┣・${vid.timestamp}
┣・ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`
┣・${vid.views}
┣・ \`𝐀𝐔𝐓𝐎𝐑:\`
┣・${vid.author.name}
┣・ \`𝐅𝐄𝐂𝐇𝐀:\`
┣・${vid.ago}
┣・ \`𝐔𝐑𝐋:\`
┗・${'https://youtu.be/' + vid.videoId}`
	   /* 
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
	    */
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`,  m, fake,).then(_ => m.react('❎'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`,  m, fake,).then(_ => m.react('❎'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.`,  m, fake,).then(_ => m.react('❎'))
        console.error(error)
    }}}
    
    if (command == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞𝐥 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐦𝐮𝐬𝐢𝐜𝐚 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m, fake,)
    await m.react('✅')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `┏・ \`ＰＬＡＹ | ＳＹＳＴＥＭ Ｘ\`
┣・ \`𝐓𝐈𝐓𝐔𝐋𝐎:\`
┣・${vid.title}
┣・ \`𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:\`
┣・${vid.timestamp}
┣・ \`𝐕𝐈𝐒𝐈𝐓𝐀𝐒:\`
┣・${vid.views}
┣・ \`𝐀𝐔𝐓𝐎𝐑:\`
┣・${vid.author.name}
┣・ \`𝐅𝐄𝐂𝐇𝐀:\`
┣・${vid.ago}
┣・ \`𝐔𝐑𝐋:\`
┗・${'https://youtu.be/' + vid.videoId}`
	    /*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
  */
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`,  m, fake,).then(_ => m.react('❎'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`❎𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐨𝐫 𝐞𝐥 𝐦𝐨𝐭𝐢𝐯𝐨 𝐝𝐞 𝐪𝐮𝐞 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐚 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 ${limit} 𝐌𝐁.`,  m, fake,).then(_ => m.react('❎'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`❎𝐒𝐮𝐜𝐞𝐝𝐢𝐨 𝐮𝐧 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.\n\n` + error, m, fake,).then(_ => m.react('❎'))
        console.error(error)
}}}
}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']
handler.register = true 
handler.star = 2
export default handler
