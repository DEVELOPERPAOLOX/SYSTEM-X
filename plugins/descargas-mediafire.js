import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let limit = 200
  if (!args[0]) return conn.reply(m.chat, `🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐚𝐜𝐨𝐦𝐩𝐚ñ𝐚𝐝𝐨 𝐝𝐞 𝐥𝐚 𝐮𝐫𝐥 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫.`, m, fake,)
  if (!args[0].match(/mediafire/gi)) return conn.reply(m.chat, `❎𝐋𝐚 𝐮𝐫𝐥 𝐧𝐨 𝐞𝐬 𝐝𝐞 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.`, m, fake,).then(_ => m.react('✖️'))
  
  await m.react('🕓')
  
  try {
    let res = await mediafiredl(args[0])
    let { url, filename, ext, aploud, filesizeH } = res
    let caption = `┏・\`𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 | 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗\`
┣・✅𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐀𝐑𝐂𝐇𝐈𝐕𝐎:
┣・${filename}
┣・🗃𝐏𝐄𝐒𝐎 𝐀𝐂𝐓𝐔𝐀𝐋:
┣・${filesizeH}
┣・📁𝐓𝐈𝐏𝐎 𝐃𝐄𝐋 𝐀𝐑𝐂𝐇𝐈𝐕𝐎:
┣・${ext}
┣・📅𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐒𝐔𝐁𝐈𝐃𝐀:
┗・${aploud}
    `.trim()

    if (parseFloat(filesizeH.split('MB')[0]) >= limit) {
      return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m, fake,).then(_ => m.react('✖️'))
    }

    await conn.reply(m.chat, caption, m)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    await m.react('✅')
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, `❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.`, m, fake,).then(_ => m.react('✖️'))
  }
}

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.star = 1
handler.register = true 

export default handler
