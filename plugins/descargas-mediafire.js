import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let limit = 200
  if (!args[0]) return conn.reply(m.chat, `*🈴 Escribe la URL de un archivo de Mediafire que deseas descargar.*`, m)
  if (!args[0].match(/mediafire/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de Mediafire.`, m).then(_ => m.react('✖️'))
  
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
      return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(_ => m.react('✖️'))
    }

    await conn.reply(m.chat, caption, m)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    await m.react('✅')
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, `Hubo un error al procesar la solicitud. Verifica la URL o intenta de nuevo más tarde.`, m).then(_ => m.react('✖️'))
  }
}

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.star = 1
handler.register = true 

export default handler
