import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let limit = 200
if (!args[0]) return conn.reply(m.chat, `*🈴 Escribe la URL de un archivo de Mediafire que deseas descargar.*`, m)
if (!args[0].match(/mediafire/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de Mediafire.`, m).then(_ => m.react('✖️'))
await m.react('🕓')
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*📓 Nombre ∙* ${filename}\n
*📁 Peso ∙* ${filesizeH}\n
*📄 Tipo ∙* ${ext}\n
*🕐 Subido ∙* ${aploud}\n

*↻ Espera soy lenta. . .*
`.trim()
if (filesizeH.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
await conn.reply(m.chat, caption, m)
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
await m.react('✅')
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
//handler.premium = true 
handler.star = 1
handler.register = true 
export default handler
