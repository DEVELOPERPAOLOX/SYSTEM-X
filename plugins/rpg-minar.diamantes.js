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
let minar = `${pickRandom(['⛏️ 𝐋𝐚 𝐞𝐱𝐭𝐫𝐚𝐜𝐜𝐢ó𝐧 𝐭𝐞 𝐡𝐚 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐝𝐨 𝐜𝐨𝐧',
'👾 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐭𝐮 𝐞𝐱𝐭𝐫𝐚𝐜𝐜𝐢ó𝐧, 𝐭𝐮𝐬 𝐢𝐧𝐠𝐫𝐞𝐬𝐨𝐬 𝐚𝐮𝐦𝐞𝐧𝐭𝐚𝐧',
'¡𝐈𝐧𝐜𝐫𝐞í𝐛𝐥𝐞!! 𝐄𝐫𝐞𝐬 𝐮𝐧(𝐚) 𝐠𝐫𝐚𝐧 𝐞𝐱𝐭𝐫𝐚𝐜𝐭𝐨𝐫(𝐚) ⛏️ 𝐇𝐚𝐬 𝐜𝐨𝐧𝐬𝐞𝐠𝐮𝐢𝐝𝐨'])}`

let pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6'

let kyubi = `${pickRandom([0, 1, 3, 1, 2])}` * 1
let kyubipremium = `${pickRandom([2, 3, 5, 9, 10, 7])}` * 1

let diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1
let diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1

let tiketcoin = `${pickRandom([1, 0, 0, 1, 0, 0, 2])}` * 1
let tiketcoinpremium = `${pickRandom([2, 3, 4, 5, 2, 3, 3])}` * 1

const recompensas = {	
  kyubi: premium ? kyubipremium : kyubi,
  diamond: premium ? diamondpremium : diamond,
  tiketcoin: premium ? tiketcoinpremium : tiketcoin,
}
//let xp = Math.floor(Math.random() * 2000)
let limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1
let limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1

let time = user.lastdiamantes + 900000 //15 min
if (new Date - user.lastdiamantes < 900000) return await conn.reply(m.chat, `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞  𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐧 ${msToTime(time - new Date())} 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐚𝐬 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐚𝐫 𝐦𝐢𝐧𝐚𝐧𝐝𝐨. ${global.rpgshopp.emoticon('limit')}⛏️`, fkontak,  m, fake,)
user.limit += premium ? limitpremium : limit  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `*${premium ? '\`ＲＥＣＯＭＰＥＮＳＡ ＰＲＥＭＩＵＭ\`' : '\`ＲＥＣＯＭＰＥＮＳＡ ＧＲＡＴＵＩＴＡ\`'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*\n\n\`ＲＥＣＯＭＰＥＮＳＡ ＥＸＴＲＡ\`\n\n\`ＰＲＥＭＩＵＭ\` ⇢ ${premium ? '𝐒𝐈✅' : '𝐍𝐎❌'}`
await conn.sendFile(m.chat, pp, 'gata.jpg', gat, fkontak)

user.lastdiamantes = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
handler.register = true
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
