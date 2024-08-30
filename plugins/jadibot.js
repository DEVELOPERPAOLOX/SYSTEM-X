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
let rtx = lenguajeGB['smsIniJadi']() 
let rtx2 = lenguajeGB['smsIniJadi2']() 

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `🔵 *Yo soy subbot para hacerte subbot* *Ingresa al siguiente link!*: Wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}\n`, fkontak)
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./IgnaJadiBot/'+ id)){
fs.mkdirSync('./IgnaJadiBot/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./IgnaJadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./IgnaJadiBot/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./IgnaJadiBot/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./IgnaJadiBot/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./IgnaJadiBot/'+ id)){
fs.mkdirSync('./IgnaJadiBot/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./IgnaJadiBot/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./IgnaJadiBot/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
//browser: Browsers.ubuntu('Chrome')
browser: mcode ? ['Ubuntu', 'Edge', '20.0.4'] : ['IgnaBot-MD', 'Edge', '2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'IgnaBot-MD',
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

return await conn.reply(m.chat, '✨️ 𝙲𝚎𝚛𝚛𝚊𝚗𝚍𝚘 :𝚌', m)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log('🟡 la conexion del subbot se ha remplazado, se ha abierto una nueva session, cierre la session primero del subbot')
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, '✨️ *𝙻𝚊 𝚌𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚜𝚎 𝚑𝚊 𝚌𝚎𝚛𝚛𝚊𝚍𝚘, 𝚝𝚎𝚗𝚍𝚛𝚊𝚜 𝚚𝚞𝚎 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚛𝚜𝚎 𝚞𝚜𝚊𝚗𝚍𝚘:*\n!deletesesion (𝙿𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚕𝚘𝚜 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚢 𝚙𝚘𝚍𝚎𝚛 𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚜𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚛 𝚗𝚞𝚎𝚟𝚘 𝚌𝚘𝚍𝚒𝚐𝚘 𝚚𝚛 𝚘 𝚌𝚘𝚍𝚒𝚐𝚘 𝚍𝚎 𝚎𝚖𝚙𝚊𝚛𝚎𝚓𝚊𝚖𝚒𝚎𝚗𝚝𝚘 𝚙𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚕𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝', m)
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, '🐈 *𝙻𝚊 𝚌𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚜𝚎 𝚌𝚎𝚛𝚛𝚘 𝚜𝚎 𝚒𝚗𝚝𝚎𝚗𝚝𝚊𝚛𝚊 𝚛𝚎𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚛 :𝙳*', m)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log('🌻 𝙲𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚙𝚎𝚛𝚍𝚒𝚍𝚊 𝚌𝚘𝚗 𝚎𝚕 𝚜𝚎𝚛𝚟𝚒𝚍𝚘𝚛, 𝚛𝚎𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚗𝚍𝚘 𝚕𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝 :𝚅')
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, '🥵 𝙻𝚊 𝚌𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚜𝚎 𝚑𝚊 𝚌𝚎𝚛𝚛𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚛𝚊 𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚛𝚜𝚎 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎', m)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('🎋 𝚃𝚒𝚎𝚖𝚙𝚘 𝚍𝚎 𝚌𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚊𝚐𝚘𝚝𝚊𝚍𝚘, 𝚛𝚎𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚗𝚍𝚘 𝚕𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝....')
} else {
console.log('🌈 𝚁𝚊𝚣𝚘𝚗 𝚍𝚎 𝚍𝚎𝚜𝚌𝚘𝚗𝚎𝚡𝚒𝚘𝚗 𝚍𝚎𝚜𝚌𝚘𝚗𝚘𝚌𝚒𝚍𝚊: ${reason || ""} >> ${connection || ""}')
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `⚪️ Conectado` : `🔵 𝙻𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊, 𝚞𝚜𝚎 𝚜𝚞 (𝙸𝙳) 𝚙𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚕𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝`}, { quoted: m })
await parentw.sendMessage(m.chat, {text : `😝 conectado espere un momento...`}, { quoted: m })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./IgnaJadiBot/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: m })    

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
console.log(conn.chats, `🟡 Leyendo mensajes...`, conn.ev)
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
handler.command = /^(SUDSYSTEMX|sudsystemx)/i
handler.register = false
handler.private = false

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}
