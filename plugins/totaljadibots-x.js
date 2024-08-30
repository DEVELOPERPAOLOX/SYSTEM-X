async function handler(m, { conn, usedPrefix }) {
  const connectedUsers = new Set()
  const addedNumbers = new Set()
  global.conns
    .filter(conn => conn.user && conn.state !== 'close')
    .forEach(user => {
      const userJid = user.user.jid.replace(/[^0-9]/g, '');
      if (!addedNumbers.has(userJid)) {
        addedNumbers.add(userJid);
        const userName = user.user.name || "𝐒𝐘𝐒𝐓𝐄𝐌 𝐗"
        connectedUsers.add(`\`ＬＩＳＴＡ ＤＥ ＳＵＤＢＯＴＳ Ｘ：:\`\n\nWa.me/${userJid}?text=${usedPrefix}menu (${userName})`)
      }
    })
  const connectedUserCount = connectedUsers.size
  if (connectedUserCount > 0) {
    const userList = [...connectedUsers].join(`\n`)
    await m.reply(userList)
  } else {
    await m.reply('')
  }
}
handler.command = ['totalsudbotsx', 'bots']
handler.help = ['bots']
handler.tags = ['serbot']
export default handler
