import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `Ya eatas registrado pdj 😎`
  if (!Reg.test(text)) throw `𝐔𝐬𝐨 𝐃𝐞𝐥 𝐂𝐨𝐦𝐚𝐧𝐝𝐨: ${usedPrefix + command} nombre.edad\n💻 Nota: ${usedPrefix + command} ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🚩 El nombre no puede estar vacio'
  if (!age) throw '🚩 La edad en necesaria'
  if (name.length >= 30) throw '💫 El nombre es muy largo' 
  age = parseInt(age)
  if (age > 100) throw '😊 Un abuelo quiere ser la bot'
  if (age < 5) throw '✏️ la bebé juega con WhatsApp'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 900
global.db.data.users[m.sender].limit += 50
global.db.data.users[m.sender].exp += 500
global.db.data.users[m.sender].joincount += 20
  let sn = createHash('md5').update(m.sender).digest('hex')
  await conn.reply(m.chat,  `*\`ＢＡＳＥ ＤＥ ＤＡＴＯＳ\`*

*\`╭━〔 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 〕━╮\`*
┃➔ *𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* ${name}
┃➔ *𝙀𝙙𝙖𝙙:* ${age} años
╰━━━━━━━━━━━━━━━━━╯
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*\`╭━〔 𝐑𝐄𝐍𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀𝐒: 〕━╮\`*
┃➔ 450 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 📚
┃➔ 25 𝙏𝙤𝙠𝙚𝙣𝙨 🏴
┃➔ 60 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎
╰━━━━━━━━━━━━━━━━━╯`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: 'ＭＩＺＵＫＩ | ＢＯＴ',  body: 'ᴅᴇᴠᴇʟᴏᴘᴇʀ: ʙᴇɴᴊᴀᴍɪɴ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: [md, nn, nna, fb].getRandom()}}})
await m.reply(`${sn}`)}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler
