import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) {
    return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐲𝐭𝐚 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞 𝐥𝐚 𝐔𝐑𝐋 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m)
  }
  
  if (!args[0].match(/youtu/gi)) {
    return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'))
  }

  let q = '128kbps'
  
  await m.react('🕓')
  
  try {
    const yt = await fg.yta(args[0])
    let { title, dl_url, size } = yt
    let vid = (await yts(text)).all[0]
    let { thumbnail, url } = vid
    
    if (size.split('MB')[0] >= limit) {
      return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
    }
    
    await conn.sendMessage(m.chat, {
      text: `\`✅𝐓𝐈𝐓𝐔𝐋𝐎:\` ${title}\n\`🚀𝐓𝐀𝐌𝐀Ñ𝐎:\` ${size}`,
      contextInfo: { 
        mentionedJid: [m.sender],
      }
    }, { quoted: m })
    
    await conn.sendMessage(m.chat, { 
      audio: { url: dl_url }, 
      mimetype: "audio/mp4", 
      fileName: title + '.mp3', 
      quoted: m, 
      contextInfo: {
        'forwardingScore': 200,
        'isForwarded': true,
        externalAdReply: {
          showAdAttribution: false,
          title: `${title}`,
          body: `${vid.author.name}`,
          mediaType: 2, 
          sourceUrl: `${url}`,
          thumbnail: await (await fetch(vid.thumbnail)).buffer()
        }
      }
    }, { quoted: m })
    
    await m.react('✅')
    
  } catch (error) {
    try {
      let yt = await fg.ytmp3(args[0])
      let { title, size, dl_url } = yt
      let vid = (await yts(text)).all[0]
      let { thumbnail, url } = vid
      
      if (size.split('MB')[0] >= limit) {
        return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
      }
      
      await conn.sendMessage(m.chat, {
        text: `🍭 *Título ∙* ${title}\n\n⚖️ *Tamaño ∙* ${size}\n\n*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .* .`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
      
      await conn.sendMessage(m.chat, { 
        audio: { url: dl_url }, 
        mimetype: "audio/mp4", 
        fileName: title + '.mp3', 
        quoted: m, 
        contextInfo: {
          'forwardingScore': 200,
          'isForwarded': true,
          externalAdReply: {
            showAdAttribution: false,
            title: `${title}`,
            body: `${vid.author.name}`,
            mediaType: 2, 
            sourceUrl: `${url}`,
            thumbnail: await (await fetch(vid.thumbnail)).buffer()
          }
        }
      }, { quoted: m })
      
      await m.react('✅')
      
    } catch (error) {
      await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
      console.error(error)
    }
  }
}

handler.help = ['ytmp3 <url yt>']
handler.tags = ['downloader']
handler.command = /^(fgmp3|dlmp3|getaud|yt(a|mp3))$/i
handler.star = 2
handler.register = true 
export default handler
