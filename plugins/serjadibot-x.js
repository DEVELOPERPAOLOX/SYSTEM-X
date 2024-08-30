const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, Browsers} = (await import('@whiskeysockets/baileys'))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = ''
let drm2 = ''
let rtx = '\`ＶＩＮＣＵＬＡＣＩＯＮ ＳＵＤＢＯＴ Ｘ\`\n> 𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐨𝐭𝐫𝐨 𝐜𝐞𝐥𝐮𝐥𝐚𝐫 𝐨 𝐭𝐮 𝐏𝐂 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐞𝐬𝐜𝐚𝐧𝐞𝐚𝐫 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐐𝐑 𝐲 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫𝐭𝐞 𝐞𝐧 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗.\n\n✅\`𝐏𝐀𝐒𝐎𝐒 𝐀 𝐒𝐄𝐆𝐔𝐈𝐑:\`\n1️⃣ 𝐀𝐜𝐜𝐞𝐝𝐞 𝐚 𝐥𝐨𝐬 𝐭𝐫𝐞𝐬 𝐩𝐮𝐧𝐭𝐨𝐬 𝐞𝐧 𝐥𝐚 𝐞𝐬𝐪𝐮𝐢𝐧𝐚 𝐬𝐮𝐩𝐞𝐫𝐢𝐨𝐫 𝐝𝐞𝐫𝐞𝐜𝐡𝐚.\n2️⃣ 𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐥𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 "𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐯𝐢𝐧𝐜𝐮𝐥𝐚𝐝𝐨𝐬".\n3️⃣ 𝐄𝐬𝐜𝐚𝐧𝐞𝐚 𝐞𝐥 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐪𝐮𝐞 𝐭𝐞 𝐚𝐜𝐚𝐛𝐨 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫.\n\n🚨 \`¡𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 𝐞𝐬𝐭𝐞 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐭𝐢𝐞𝐧𝐞 𝐮𝐧𝐚 𝐯𝐚𝐥𝐢𝐝𝐞𝐳 𝐝𝐞 𝟒𝟓 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬!\`'
let rtx2 = '\`ＶＩＮＣＵＬＡＣＩＯＮ ＳＵＤＢＯＴ Ｘ\`\n> 𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐨𝐭𝐫𝐨 𝐜𝐞𝐥𝐮𝐥𝐚𝐫 𝐨 𝐭𝐮 𝐏𝐂 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐞𝐬𝐜𝐚𝐧𝐞𝐚𝐫 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐐𝐑 𝐲 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫𝐭𝐞 𝐞𝐧 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗.\n\n✅\`𝐏𝐀𝐒𝐎𝐒 𝐀 𝐒𝐄𝐆𝐔𝐈𝐑:\`\n1️⃣ 𝐀𝐜𝐜𝐞𝐝𝐞 𝐚 𝐥𝐨𝐬 𝐭𝐫𝐞𝐬 𝐩𝐮𝐧𝐭𝐨𝐬 𝐞𝐧 𝐥𝐚 𝐞𝐬𝐪𝐮𝐢𝐧𝐚 𝐬𝐮𝐩𝐞𝐫𝐢𝐨𝐫 𝐝𝐞𝐫𝐞𝐜𝐡𝐚.\n2️⃣ 𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐥𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 "𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐯𝐢𝐧𝐜𝐮𝐥𝐚𝐝𝐨𝐬".\n3️⃣ 𝐄𝐬𝐜𝐚𝐧𝐞𝐚 𝐞𝐥 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐪𝐮𝐞 𝐭𝐞 𝐚𝐜𝐚𝐛𝐨 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫.\n\n🚨 \`¡𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 𝐞𝐬𝐭𝐞 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐭𝐢𝐞𝐧𝐞 𝐮𝐧𝐚 𝐯𝐚𝐥𝐢𝐝𝐞𝐳 𝐝𝐞 𝟒𝟓 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬!\`'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐬𝐞𝐫𝐬𝐲𝐬𝐭𝐞𝐦𝐱 𝐩𝐞𝐫𝐨 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥:\nhttps://chat.whatsapp.com/FN4oKVv58fo8hf0t1txT7i`, fkontak)
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./JadiBot/'+ id)){
fs.mkdirSync('./JadiBot/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./JadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./JadiBot/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./JadiBot/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./JadiBot/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./JadiBot/'+ id)){
fs.mkdirSync('./JadiBot/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./IgnaJadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./JadiBot/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
//browser: Browsers.ubuntu('Chrome')
browser: mcode ? ['Ubuntu', 'Edge', '20.0.4'] : ['𝐒𝐮𝐝𝐁𝐨𝐭 | 𝐒𝐲𝐬𝐭𝐞𝐦 𝐗', 'Edge', '2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: '𝐒𝐮𝐝𝐁𝐨𝐭 | 𝐒𝐲𝐬𝐭𝐞𝐦 𝐗',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: m})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: m })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./JadiBot/' + id + '/creds.json')

return await conn.reply(m.chat, '⚒️ 𝐂𝐞𝐫𝐫𝐚𝐧𝐝𝐨 𝐥𝐚 𝐬𝐞𝐬𝐢𝐨𝐧 𝐝𝐞 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗...', m, fake,)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log('𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐝𝐞𝐥 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐚; 𝐬𝐞 𝐡𝐚 𝐢𝐧𝐢𝐜𝐢𝐚𝐝𝐨 𝐮𝐧𝐚 𝐧𝐮𝐞𝐯𝐚 𝐬𝐞𝐬𝐢𝐨𝐧. 𝐏𝐫𝐢𝐦𝐞𝐫𝐨, 𝐜𝐢𝐞𝐫𝐫𝐚 𝐥𝐚 𝐬𝐞𝐬𝐢𝐨𝐧 𝐚𝐜𝐭𝐮𝐚𝐥 𝐝𝐞𝐥 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗.')
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, '✅ 𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐜𝐞𝐫𝐫𝐚𝐝𝐚. 𝐏𝐚𝐫𝐚 𝐫𝐞𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫𝐭𝐞, 𝐮𝐭𝐢𝐥𝐢𝐳𝐚 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:\n.𝐝𝐞𝐥𝐞𝐭𝐞𝐬𝐞𝐬𝐢𝐨𝐧 (𝐏𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐥𝐨𝐬 𝐝𝐚𝐭𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢𝐨𝐧 𝐲 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐫 𝐮𝐧 𝐧𝐮𝐞𝐯𝐨 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐨 𝐜𝐨𝐝𝐢𝐠𝐨 𝐝𝐞 𝐞𝐦𝐩𝐚𝐫𝐞𝐣𝐚𝐦𝐢𝐞𝐧𝐭𝐨 𝐩𝐚𝐫𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐥 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗).', m, fake,)
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, '🚨 𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐜𝐞𝐫𝐫𝐚𝐝𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚𝐧𝐝𝐨 𝐫𝐞𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫...', m, fake,)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log('🚨 𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐜𝐞𝐫𝐫𝐚𝐝𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚𝐧𝐝𝐨 𝐫𝐞𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫...')
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, '🚨 𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐜𝐞𝐫𝐫𝐚𝐝𝐚; 𝐝𝐞𝐛𝐞𝐫𝐚𝐬 𝐫𝐞𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.', m, fake,)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('🚨 𝐋𝐚 𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐜𝐞𝐫𝐫𝐚𝐝𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚𝐧𝐝𝐨 𝐫𝐞𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫...')
} else {
console.log('🚨 𝐑𝐚𝐳𝐨𝐧 𝐝𝐞 𝐥𝐚 𝐝𝐞𝐬𝐜𝐨𝐧𝐞𝐱𝐢𝐨𝐧: 𝐝𝐞𝐬𝐜𝐨𝐧𝐨𝐜𝐢𝐝𝐚. ${reason || ""} >> ${connection || ""}')
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `✅ 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎` : `🚨 𝐄𝐥 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗 𝐞𝐬𝐭𝐚 𝐚𝐜𝐭𝐢𝐯𝐨. 𝐔𝐬𝐚 𝐬𝐮 (𝐈𝐃) 𝐩𝐚𝐫𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐥 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗.`}, { quoted: m })
await parentw.sendMessage(m.chat, {text : `✅ 𝐂𝐨𝐧𝐞𝐜𝐭𝐚𝐧𝐝𝐨, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...`}, { quoted: m })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./JadiBot/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: m })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.welcome = lenguajeGB['smsWelcome']() 
conn.bye = lenguajeGB['smsBye']() 
conn.spromote = lenguajeGB['smsSpromote']() 
conn.sdemote = lenguajeGB['smsSdemote']() 
conn.sDesc = lenguajeGB['smsSdesc']() 
conn.sSubject = lenguajeGB['smsSsubject']() 
conn.sIcon = lenguajeGB['smsSicon']() 
conn.sRevoke = lenguajeGB['smsSrevoke']() 

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `🚨 𝐃𝐞𝐭𝐞𝐜𝐭𝐚𝐧𝐝𝐨 𝐥𝐨𝐬 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬...`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`jadibot`, `SERSYSTEMX`, `sersystemx`, `SUDSYSTEMX`, `sudsystemx`]
handler.tags = [`jadibot`]
handler.command = /^(SUDSYSTEMX|sudsystemx|SERSYSTEM|sersystemx)/i
handler.register = false
handler.private = false

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}
