let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['🚀 ¡𝐈𝐧𝐜𝐫𝐞𝐢𝐛𝐥𝐞! 𝐇𝐚𝐬 𝐥𝐨𝐠𝐫𝐚𝐝𝐨 𝐦𝐢𝐧𝐚𝐫 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐲 𝐨𝐛𝐭𝐢𝐞𝐧𝐞𝐬',
'✨ ¡𝐈𝐦𝐩𝐫𝐞𝐬𝐢𝐨𝐧𝐚𝐧𝐭𝐞! 𝐇𝐚𝐬 𝐞𝐱𝐭𝐫𝐚𝐢𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐲 𝐚𝐡𝐨𝐫𝐚 𝐭𝐢𝐞𝐧𝐞𝐬',
'🌟 ¡𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬, 𝐦𝐢𝐧𝐞𝐫𝐨(𝐚)! 𝐇𝐚𝐬 𝐜𝐨𝐧𝐬𝐞𝐠𝐮𝐢𝐝𝐨',
'🎉 ¡𝐄𝐱𝐜𝐞𝐥𝐞𝐧𝐭𝐞 𝐭𝐫𝐚𝐛𝐚𝐣𝐨! 𝐓𝐮𝐬 𝐞𝐬𝐟𝐮𝐞𝐫𝐳𝐨𝐬 𝐝𝐞 𝐦𝐢𝐧𝐞𝐫𝐢𝐚 𝐭𝐞 𝐡𝐚𝐧 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐝𝐨 𝐜𝐨𝐧',
'💎 ¡𝐆𝐫𝐚𝐧 𝐡𝐚𝐥𝐥𝐚𝐳𝐠𝐨! 𝐇𝐚𝐬 𝐦𝐢𝐧𝐚𝐝𝐨 𝐲 𝐚𝐡𝐨𝐫𝐚 𝐭𝐢𝐞𝐧𝐞𝐬',
'🤑 ¡𝐀𝐬𝐨𝐦𝐛𝐫𝐨𝐬𝐨! 𝐇𝐚𝐬 𝐚𝐮𝐦𝐞𝐧𝐭𝐚𝐝𝐨 𝐭𝐮𝐬 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬 𝐜𝐨𝐧',
'🏆 ¡𝐄𝐧𝐡𝐨𝐫𝐚𝐛𝐮𝐞𝐧𝐚! 𝐋𝐚 𝐦𝐢𝐧𝐞𝐫𝐢𝐚 𝐭𝐞 𝐡𝐚 𝐝𝐚𝐝𝐨',
'🎊 ¡𝐅𝐚𝐧𝐭𝐚𝐬𝐭𝐢𝐜𝐨! 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐭𝐮 𝐡𝐚𝐛𝐢𝐥𝐢𝐝𝐚𝐝 𝐦𝐢𝐧𝐞𝐫𝐚 𝐨𝐛𝐭𝐢𝐞𝐧𝐞𝐬',
'💰 ¡𝐄𝐬𝐭𝐚𝐬 𝐞𝐧 𝐫𝐚𝐜𝐡𝐚! 𝐇𝐚𝐬 𝐦𝐢𝐧𝐚𝐝𝐨 𝐲 𝐠𝐚𝐧𝐚𝐝𝐨',
'🔥 ¡𝐆𝐫𝐚𝐧 𝐦𝐢𝐧𝐞𝐫𝐢𝐚! 𝐓𝐮 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐞𝐬 𝐚𝐡𝐨𝐫𝐚',
'🚀 ¡𝐆𝐫𝐚𝐧 𝐡𝐚𝐥𝐥𝐚𝐳𝐠𝐨 𝐦𝐢𝐧𝐞𝐫𝐨! 𝐇𝐚𝐬 𝐫𝐞𝐜𝐢𝐛𝐢𝐝𝐨',
'🎯 ¡𝐎𝐛𝐣𝐞𝐭𝐢𝐯𝐨 𝐥𝐨𝐠𝐫𝐚𝐝𝐨! 𝐇𝐚𝐬 𝐦𝐢𝐧𝐚𝐝𝐨 𝐲 𝐫𝐞𝐜𝐢𝐛𝐢𝐝𝐨',
'🎉 ¡𝐄𝐧𝐡𝐨𝐫𝐚𝐛𝐮𝐞𝐧𝐚! 𝐋𝐚 𝐦𝐢𝐧𝐞𝐫𝐢𝐚 𝐭𝐞 𝐩𝐫𝐞𝐦𝐢𝐚 𝐜𝐨𝐧',
'🔍 ¡𝐃𝐞𝐬𝐜𝐮𝐛𝐫𝐢𝐦𝐢𝐞𝐧𝐭𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐨! 𝐎𝐛𝐭𝐢𝐞𝐧𝐞𝐬 𝐚𝐡𝐨𝐫𝐚',
'💥 ¡𝐐𝐮𝐞 𝐞𝐱𝐢𝐭𝐨! 𝐓𝐮𝐬 𝐞𝐬𝐟𝐮𝐞𝐫𝐳𝐨𝐬 𝐦𝐢𝐧𝐞𝐫𝐨𝐬 𝐭𝐞 𝐡𝐚𝐧 𝐝𝐚𝐝𝐨'])}`

let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

let string = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let stringpremium = `${pickRandom([3, 4, 6, 7, 9, 11])}` * 1

let coal = `${pickRandom([4, 5, 8, 10, 12])}` * 1
let coalpremium = `${pickRandom([9, 14, 15, 17, 20])}` * 1

let emas = `${pickRandom([1, 0, 2, 3, 0, 0, 0])}` * 1
let emaspremium = `${pickRandom([2, 4, 5, 1, 1, 7, 8])}` * 1

const recompensas = {	
  string: premium ? stringpremium : string,
  coal: premium ? coalpremium : coal,
  emas: premium ? emaspremium : emas,
}
//let xp = Math.floor(Math.random() * 2000)
let xp = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let exppremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1

let time = user.lastmiming + 600000 //10 min
if (new Date - user.lastmiming < 600000) return await conn.reply(m.chat, `𝐀𝐜𝐚𝐛𝐚𝐬 𝐝𝐞 𝐦𝐢𝐧𝐚𝐫 𝐫𝐞𝐜𝐢𝐞𝐧𝐭𝐞𝐦𝐞𝐧𝐭𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐦𝐢𝐧𝐚𝐫 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 ${msToTime(time - new Date())} ${global.rpgshopp.emoticon('exp')}`, /* fkontak,*/  m, { contextInfo: { 'forwardingScore': 0, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `ＭＩＮＡＲ | ＳＹＳＴＥＭ Ｘ`, mediaType: 3, sourceUrl: global.md, thumbnail: imagen1}}}, { quoted: m })
user.exp += premium ? exppremium : xp  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

/*conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${xp} ${global.rpgshop.emoticon('exp')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`],
['𝙈𝙞𝙣𝙖𝙧 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨 🐈', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `.menu`]
], m,)*/
await conn.reply(m.chat, `*\`ＭＩＮＡＲ | ＳＹＳＴＥＭ Ｘ\`*\n${minar} ${xp} 𝐗𝐏`, /*fkontak,*/  m, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `ＭＩＮＡＲ | ＳＹＳＴＥＭ Ｘ`, mediaType: 3, sourceUrl: global.md, thumbnail: imagen1}}}, { quoted: m })
user.lastmiming = new Date * 1  
}
handler.help = ['inar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
