// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `✉𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐭𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞, 𝐞𝐧 𝐜𝐚𝐬𝐨 𝐧𝐨 𝐥𝐚 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐞𝐬 𝐮𝐬𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐦𝐲𝐧𝐬 𝐩𝐚𝐫𝐚 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞.`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `✉ ${fg} 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚 𝐪𝐮𝐞 𝐭𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞 𝐬𝐞𝐚 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐞𝐧 𝐜𝐚𝐬𝐨 𝐧𝐨 𝐥𝐚 𝐫𝐞𝐜𝐮𝐞𝐫𝐝𝐞𝐬 𝐮𝐬𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐦𝐲𝐧𝐬 𝐩𝐚𝐫𝐚 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐬𝐞𝐫𝐢𝐞.`
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 4
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2
user.registered = false
m.reply(`✉ ${eg} 𝐭𝐞 𝐛𝐨𝐫𝐫𝐞 𝐝𝐞 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐲𝐚 𝐧𝐨 𝐩𝐨𝐝𝐫𝐚𝐬 𝐮𝐬𝐚𝐫 𝐦𝐢𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐡𝐚𝐬𝐭𝐚 𝐪𝐮𝐞 𝐭𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐞𝐬 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
