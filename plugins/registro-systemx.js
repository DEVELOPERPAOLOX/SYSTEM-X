// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✉𝐘𝐚 𝐭𝐞 𝐭𝐞𝐧𝐠𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬, 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐮𝐧𝐫𝐞𝐠 𝐞𝐧 𝐜𝐚𝐬𝐨 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐛𝐨𝐫𝐫𝐚𝐫 𝐭𝐮 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨.`
  if (!Reg.test(text)) throw `𝐔𝐬𝐚𝐬𝐭𝐞 𝐦𝐚𝐬 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫.\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✉𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬 𝐜𝐨𝐥𝐨𝐜𝐚𝐫 𝐭𝐮 𝐧𝐨𝐦𝐛𝐫𝐞 𝐩𝐚𝐫𝐚 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.'
  if (!age) throw '✉𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬 𝐜𝐨𝐥𝐨𝐜𝐚𝐫 𝐭𝐮 𝐞𝐝𝐚𝐝 𝐩𝐚𝐫𝐚 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.'
  if (name.length >= 30) throw '✉𝐄𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐪𝐮𝐞 𝐜𝐨𝐥𝐨𝐜𝐚𝐬𝐭𝐞 𝐞𝐬 𝐦𝐮𝐲 𝐞𝐱𝐭𝐞𝐧𝐬𝐨.' 
  age = parseInt(age)
  if (age > 100) throw '✉𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐮𝐧(𝐚) 𝐚𝐛𝐮𝐞𝐥𝐢𝐭𝐨 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.'
  if (age < 5) throw '✉𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐮𝐧(𝐚) 𝐛𝐞𝐛𝐞 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 900
global.db.data.users[m.sender].limit += 50
global.db.data.users[m.sender].exp += 500
global.db.data.users[m.sender].joincount += 20
  let sn = createHash('md5').update(m.sender).digest('hex')
  await conn.reply(m.chat,  `*\`╭━〔 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 〕━╮\`*
┃➔ *👤𝐔𝐒𝐔𝐀𝐑𝐈𝐎:* ${name}
┃➔ *✅𝐄𝐃𝐀𝐃:* ${age}
╰━━━━━━━━━━━━━━╯
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*\`╭━〔 𝐑𝐄𝐍𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀𝐒 〕━╮\`*
┃➔ 450 𝐄𝐗𝐏𝐄𝐑𝐈𝐄𝐍𝐂𝐈𝐀 📚
┃➔ 2570 𝐒𝐘𝐒𝐓𝐄𝐌𝐂𝐎𝐈𝐍𝐒𝐗 🏴
┃➔ 670 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 💎
╰━━━━━━━━━━━━━━╯`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: 'ＲＥＧＩＳＴＲＯ',  body: 'ＳＹＳＴＥＭ Ｘ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: [md, nn, nna, fb].getRandom()}}})
await m.reply(`${sn}`)}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler
