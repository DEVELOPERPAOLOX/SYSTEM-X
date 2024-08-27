import { search, download } from 'aptoide-scraper'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `*Formato incorrecto*\nEjemplo:\n${usedPrefix + command} Pokemon Go`
try {
const searchResult = await search(text)
const data = await download(searchResult[0].id)
if (data.size.includes('GB') || parseFloat(data.size.replace(' MB', '')) > 300) {
return await conn.sendMessage(m.chat, { text: '*El archivo es demasiado pesado por lo que no se enviará.*' }, { quoted: m })
}
await conn.sendMessage(m.chat, { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null }, { quoted: m })
} catch {
}}
handler.command = /^(apkmod|modapk|dapk2|aptoide|apk)$/i
handler.register = true
handler.limit = 1
export default handler
