let { areJidsSameUser } = (await import(global.baileys)).default
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗𝐅𝐔𝐓𝐔𝐑𝐀 𝐏𝐀𝐑𝐄𝐉𝐀:\n${toM(a)} 💞 ${toM(b)}\n\n💌𝐌𝐒𝐉 𝐃𝐄 𝐀𝐌𝐎𝐑:\n*_${await ktnmbk.getRandom()}_*`
await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.reply(m.chat, `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐩𝐚𝐫𝐞𝐣𝐚 + @𝐮𝐬𝐮𝐚𝐫𝐢𝐨`, fkontak,  m, fake,)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.reply(m.chat, `𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, fkontak,  m, fake,)

if(user === m.sender) return await conn.reply(m.chat, `𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼`, fkontak,  m, fake,)
	
if(user === conn.user.jid) return await conn.reply(m.chat, `𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼`, fkontak,  m, fake,)

if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `𝐋𝐨 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐩𝐞𝐫𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐟𝐨𝐫𝐦𝐚𝐫 𝐩𝐚𝐫𝐞𝐣𝐚 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨, 𝐲𝐚 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬.`, fkontak,  m, fake,)
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.reply(m.chat, `❎𝐄𝐬𝐭𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐲𝐚 𝐞𝐬𝐭𝐚 𝐞𝐧 𝐮𝐧𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧. *${await conn.getName(spac)}*\n\n𝐄𝐧 𝐜𝐚𝐬𝐨 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐚𝐜𝐚𝐛𝐚𝐫 𝐭𝐮 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: *${usedPrefix}terminar @𝐮𝐬𝐮𝐚𝐫𝐢𝐨`,  m, fake,, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}}) 
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `❎𝐍𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐟𝐨𝐫𝐦𝐚𝐫 𝐩𝐚𝐫𝐞𝐣𝐚 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐲𝐚 𝐪𝐮𝐞 𝐚𝐜𝐭𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐞𝐬𝐭𝐚 𝐞𝐧 𝐮𝐧𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧.\n𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐜𝐨𝐧 𝐨𝐭𝐫𝐨 𝐮𝐬𝐮𝐚𝐫𝐢𝐨.`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\n❎𝐑𝐞𝐜𝐢𝐞𝐧𝐭𝐞𝐦𝐞𝐧𝐭𝐞 𝐚𝐜𝐚𝐛𝐚𝐬 𝐝𝐞 𝐢𝐧𝐯𝐢𝐭𝐚𝐫 𝐚 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐚 𝐮𝐧𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧.\n𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧𝐚 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚.`, m, fake, , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `💗𝐎𝐟𝐢𝐜𝐢𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐚𝐡𝐨𝐫𝐚 𝐞𝐬𝐭𝐚𝐧 𝐞𝐧 𝐮𝐧𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧. @${user.split('@')[0]}\n𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐩𝐚𝐫𝐚 𝐞𝐬𝐭𝐚 𝐩𝐚𝐫𝐞𝐣𝐚 𝐪𝐮𝐞 𝐞𝐬𝐭𝐚 𝐞𝐧𝐚𝐦𝐨𝐫𝐚𝐝𝐚.`, m, fake, , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.reply(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n\`🧸𝐃𝐄𝐂𝐋𝐀𝐑𝐀𝐃𝐎𝐑(𝐀):\` *@${toUser}*\n\`💗𝐃𝐄𝐒𝐓𝐈𝐍𝐀𝐓𝐀𝐑𝐈𝐎(𝐀):\` *@${who.split`@`[0]}*\n\n❤️𝐒𝐢 𝐝𝐞𝐬𝐞𝐚𝐬 𝐚𝐜𝐞𝐩𝐭𝐚𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐞:\n*➠ ${usedPrefix}aceptar @${toUser}*\n\n💔𝐒𝐢 𝐝𝐞𝐬𝐞𝐚𝐬 𝐫𝐞𝐜𝐡𝐚𝐳𝐚𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐞:\n*➠ ${usedPrefix}rechazar @${toUser}*`, m, fake, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
}}}

handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true
handler.register = true
export default handler

let ktnmbk = [
"\`💌𝐌𝐒𝐉 𝐃𝐄 𝐀𝐌𝐎𝐑:\`\n𝐃𝐞𝐬𝐝𝐞 𝐞𝐥 𝐩𝐫𝐢𝐦𝐞𝐫 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐪𝐮𝐞 𝐧𝐮𝐞𝐬𝐭𝐫𝐨𝐬 𝐜𝐚𝐦𝐢𝐧𝐨𝐬 𝐬𝐞 𝐜𝐫𝐮𝐳𝐚𝐫𝐨𝐧, 𝐬𝐞𝐧𝐭í 𝐪𝐮𝐞 𝐡𝐚𝐛í𝐚 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨 𝐚𝐥𝐠𝐨 𝐯𝐞𝐫𝐝𝐚𝐝𝐞𝐫𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐬𝐩𝐞𝐜𝐢𝐚𝐥. 𝐓𝐮𝐬 𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬, 𝐭𝐮 𝐫𝐢𝐬𝐚, 𝐜𝐚𝐝𝐚 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐝𝐨 𝐡𝐚 𝐡𝐞𝐜𝐡𝐨 𝐪𝐮𝐞 𝐦𝐢 𝐜𝐨𝐫𝐚𝐳ó𝐧 𝐥𝐚𝐭𝐢𝐞𝐫𝐚 𝐜𝐨𝐧 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐧𝐬𝐢𝐝𝐚𝐝 𝐪𝐮𝐞 𝐧𝐮𝐧𝐜𝐚 𝐡𝐚𝐛í𝐚 𝐜𝐨𝐧𝐨𝐜𝐢𝐝𝐨.\n\n𝐐𝐮𝐢𝐞𝐫𝐨 𝐪𝐮𝐞 𝐬𝐞𝐩𝐚𝐬 𝐪𝐮𝐞 𝐜𝐚𝐝𝐚 𝐝𝐢𝐚 𝐜𝐨𝐧𝐭𝐢𝐠𝐨 𝐞𝐬 𝐮𝐧 𝐫𝐞𝐠𝐚𝐥𝐨. 𝐌𝐢 𝐯𝐢𝐝𝐚 𝐡𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐝𝐨 𝐩𝐚𝐫𝐚 𝐦𝐞𝐣𝐨𝐫 𝐝𝐞𝐬𝐝𝐞 𝐪𝐮𝐞 𝐭𝐞 𝐜𝐨𝐧𝐨𝐜𝐢, 𝐲 𝐦𝐞 𝐝𝐨𝐲 𝐜𝐮𝐞𝐧𝐭𝐚 𝐝𝐞 𝐪𝐮𝐞 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐫 𝐮𝐧 𝐟𝐮𝐭𝐮𝐫𝐨 𝐬𝐢𝐧 𝐭𝐢 𝐚 𝐦𝐢 𝐥𝐚𝐝𝐨.\n\n𝐇𝐨𝐲, 𝐦𝐞 𝐚𝐭𝐫𝐞𝐯𝐨 𝐚 𝐝𝐚𝐫 𝐮𝐧 𝐩𝐚𝐬𝐨 𝐦á𝐬 𝐲 𝐝𝐞𝐜𝐥𝐚𝐫𝐚𝐫 𝐪𝐮𝐞 𝐦𝐢 𝐚𝐦𝐨𝐫 𝐩𝐨𝐫 𝐭𝐢 𝐜𝐫𝐞𝐜𝐞 𝐜𝐨𝐧 𝐜𝐚𝐝𝐚 𝐝í𝐚 𝐪𝐮𝐞 𝐩𝐚𝐬𝐚. 𝐄𝐫𝐞𝐬 𝐦𝐢 𝐢𝐧𝐬𝐩𝐢𝐫𝐚𝐜𝐢ó𝐧, 𝐦𝐢 𝐫𝐞𝐟𝐮𝐠𝐢𝐨, 𝐦𝐢 𝐭𝐨𝐝𝐨. ¿𝐓𝐞 𝐠𝐮𝐬𝐭𝐚𝐫í𝐚 𝐡𝐚𝐜𝐞𝐫𝐦𝐞 𝐞𝐥 𝐡𝐨𝐧𝐨𝐫 𝐝𝐞 𝐬𝐞𝐫 𝐦𝐢 𝐩𝐚𝐫𝐞𝐣𝐚 𝐲 𝐜𝐚𝐦𝐢𝐧𝐚𝐫 𝐣𝐮𝐧𝐭𝐨𝐬 𝐩𝐨𝐫 𝐞𝐬𝐭𝐞 𝐡𝐞𝐫𝐦𝐨𝐬𝐨 𝐯𝐢𝐚𝐣𝐞 𝐥𝐥𝐚𝐦𝐚𝐝𝐨 𝐯𝐢𝐝𝐚?",
"\`💌𝐌𝐒𝐉 𝐃𝐄 𝐀𝐌𝐎𝐑:\`\n𝐃𝐞𝐬𝐝𝐞 𝐪𝐮𝐞 𝐞𝐧𝐭𝐫𝐚𝐬𝐭𝐞 𝐞𝐧 𝐦𝐢 𝐯𝐢𝐝𝐚, 𝐭𝐨𝐝𝐨 𝐡𝐚 𝐜𝐚𝐦𝐛𝐢𝐚𝐝𝐨 𝐝𝐞 𝐮𝐧𝐚 𝐦𝐚𝐧𝐞𝐫𝐚 𝐪𝐮𝐞 𝐧𝐮𝐧𝐜𝐚 𝐢𝐦𝐚𝐠𝐢𝐧𝐞. 𝐂𝐚𝐝𝐚 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐜𝐢ó𝐧, 𝐜𝐚𝐝𝐚 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐝𝐨, 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐮𝐧 𝐩𝐚𝐬𝐨 𝐦𝐚𝐬 𝐡𝐚𝐜𝐢𝐚 𝐚𝐥𝐠𝐨 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐨 𝐲 𝐬𝐢𝐠𝐧𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐯𝐨.\n\n𝐇𝐨𝐲 𝐪𝐮𝐢𝐞𝐫𝐨 𝐬𝐞𝐫 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐡𝐨𝐧𝐞𝐬𝐭𝐨/𝐚 𝐜𝐨𝐧𝐭𝐢𝐠𝐨. 𝐋𝐨 𝐪𝐮𝐞 𝐬𝐢𝐞𝐧𝐭𝐨 𝐩𝐨𝐫 𝐭𝐢 𝐞𝐬 𝐦á𝐬 𝐪𝐮𝐞 𝐚𝐝𝐦𝐢𝐫𝐚𝐜𝐢ó𝐧; 𝐞𝐬 𝐮𝐧𝐚 𝐜𝐨𝐧𝐞𝐱𝐢ó𝐧 𝐪𝐮𝐞 𝐯𝐚 𝐦á𝐬 𝐚𝐥𝐥á 𝐝𝐞 𝐥𝐨 𝐪𝐮𝐞 𝐥𝐚𝐬 𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐞𝐱𝐩𝐫𝐞𝐬𝐚𝐫. 𝐄𝐬𝐭𝐨𝐲 𝐝𝐢𝐬𝐩𝐮𝐞𝐬𝐭𝐨/𝐚 𝐚 𝐜𝐨𝐦𝐩𝐫𝐨𝐦𝐞𝐭𝐞𝐫𝐦𝐞 𝐲 𝐚 𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐢𝐫 𝐚𝐥𝐠𝐨 𝐫𝐞𝐚𝐥 𝐲 𝐝𝐮𝐫𝐚𝐝𝐞𝐫𝐨 𝐜𝐨𝐧𝐭𝐢𝐠𝐨.\n\n𝐌𝐞 𝐞𝐧𝐜𝐚𝐧𝐭𝐚𝐫í𝐚 𝐬𝐚𝐛𝐞𝐫 𝐬𝐢 𝐬𝐢𝐞𝐧𝐭𝐞𝐬 𝐥𝐨 𝐦𝐢𝐬𝐦𝐨. ¿𝐓𝐞 𝐠𝐮𝐬𝐭𝐚𝐫í𝐚 𝐬𝐞𝐫 𝐦𝐢 𝐩𝐚𝐫𝐞𝐣𝐚 𝐲 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫 𝐣𝐮𝐧𝐭𝐨𝐬 𝐭𝐨𝐝𝐨 𝐥𝐨 𝐪𝐮𝐞 𝐞𝐥 𝐟𝐮𝐭𝐮𝐫𝐨 𝐭𝐢𝐞𝐧𝐞 𝐫𝐞𝐬𝐞𝐫𝐯𝐚𝐝𝐨 𝐩𝐚𝐫𝐚 𝐧𝐨𝐬𝐨𝐭𝐫𝐨𝐬? 𝐍𝐨 𝐡𝐚𝐲 𝐧𝐚𝐝𝐚 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐦á𝐬 𝐪𝐮𝐞 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐦𝐢 𝐯𝐢𝐝𝐚 𝐜𝐨𝐧𝐭𝐢𝐠𝐨."
]
