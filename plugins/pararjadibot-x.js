let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `🚨 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥 𝐝𝐞 𝐒𝐲𝐬𝐭𝐞𝐦 𝐗.`, m, fake,)
else {
await conn.reply(m.chat, `✅ 𝐂𝐞𝐫𝐫𝐚𝐬𝐭𝐞 𝐥𝐚 𝐬𝐞𝐬𝐢𝐨𝐧 𝐝𝐞 𝐒𝐮𝐝𝐁𝐨𝐭 𝐗 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨.`, m, fake,)
conn.ws.close()
}}
handler.command = /^(berhenti|stop|detener)$/i
  
export default handler
