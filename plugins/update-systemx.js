// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '\`ＵＰＤＡＴＥ | ＳＹＳＴＥＭ Ｘ\`'
if (messager.includes('Updating')) messager = '\`ＵＰＤＡＴＥ | ＳＹＳＴＥＭ Ｘ\`\n\n> 𝙲𝚊𝚖𝚋𝚒𝚘𝚜 𝚑𝚎𝚌𝚑𝚘𝚜:\n' + stdout.toString()
conn.reply(m.chat, messager, m)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `🚩 *Se han hecho cambios locales en archivos del bot que entran en conflicto con las actualizaciones del repositorio. Para actualizar, reinstala el bot o realiza las actualizaciones manualmente*\n\nArchivos en conflicto:\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '🚩 *Ocurrió un fallo. Por favor, inténtalo de nuevo más tarde*'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m, fake, )
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true

export default handler
