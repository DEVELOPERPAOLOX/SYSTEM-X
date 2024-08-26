// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 5000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `❎𝐘𝐚 𝐜𝐡𝐚𝐦𝐛𝐞𝐚𝐬𝐭𝐞 𝐝𝐞𝐦𝐚𝐬𝐢𝐚𝐝𝐨, 𝐝𝐞𝐬𝐜𝐚𝐧𝐬𝐚 𝐲 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐞𝐧 ${msToTime(time - new Date())}`
 
await delay(1 * 1000)
m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabajar']
handler.fail = null
handler.exp = 0
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.work = ["𝐀𝐲𝐮𝐝𝐚𝐬𝐭𝐞 𝐚 𝐦𝐨𝐝𝐞𝐫𝐚𝐫 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐝𝐞 𝐒𝐲𝐬𝐭𝐞𝐦 𝐗 𝐲 𝐫𝐞𝐜𝐢𝐛𝐢𝐬𝐭𝐞", 
"𝐓𝐫𝐚𝐛𝐚𝐣𝐚𝐬 𝐝𝐮𝐫𝐚𝐧𝐭𝐞 𝐭𝐨𝐝𝐨 𝐞𝐥 𝐝í𝐚 𝐞𝐧 𝐥𝐚 𝐞𝐦𝐩𝐫𝐞𝐬𝐚 𝐲 𝐨𝐛𝐭𝐢𝐞𝐧𝐞𝐬", 
"𝐀𝐲𝐮𝐝𝐚𝐬 𝐚 𝐚𝐥𝐠𝐮𝐢𝐞𝐧 𝐚 𝐜𝐚𝐫𝐠𝐚𝐫 𝐮𝐧𝐚 𝐜𝐚𝐣𝐚 𝐞𝐧 𝐬𝐮 𝐚𝐮𝐭𝐨 𝐲 𝐭𝐞 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐧 𝐜𝐨𝐧", 
"𝐓𝐫𝐚𝐛𝐚𝐣𝐚𝐬𝐭𝐞 𝐡𝐨𝐫𝐚𝐬 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬 𝐞𝐧 𝐥𝐚 𝐨𝐟𝐢𝐜𝐢𝐧𝐚 𝐲 𝐨𝐛𝐭𝐢𝐞𝐧𝐞𝐬", 
"𝐓𝐞 𝐜𝐨𝐠𝐢𝐬𝐭𝐞 𝐚 𝐦𝐢 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐃𝐢𝐚𝐧𝐚 𝐲 𝐠𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐭𝐮 𝐠𝐫𝐚𝐧 𝐟𝐨𝐥𝐥𝐚𝐝𝐚 𝐫𝐞𝐜𝐢𝐛𝐢𝐬𝐭𝐞", 
"𝐃𝐮𝐞 𝐜𝐨𝐦𝐨 𝐬𝐢 𝐜𝐡𝐚𝐦𝐛𝐞𝐚𝐫𝐚𝐬 𝐲 𝐩𝐨𝐫 𝐞𝐬𝐨 𝐫𝐞𝐜𝐢𝐛𝐢𝐬𝐭𝐞", 
"𝐓𝐞 𝐝𝐞𝐣𝐚𝐬𝐭𝐞 𝐟𝐨𝐥𝐥𝐚𝐫 𝐩𝐨𝐫 𝐦𝐢 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐏𝐚𝐨𝐥𝐨, 𝐠𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐩𝐨𝐧𝐞𝐫𝐭𝐞 𝐞𝐧 𝟒 𝐲 𝐠𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐞𝐬𝐨, 𝐏𝐚𝐨𝐥𝐨 𝐭𝐞 𝐩𝐫𝐞𝐦𝐢𝐚 𝐜𝐨𝐧"
]
