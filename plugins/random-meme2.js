import hispamemes from 'hispamemes'
let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
conn.sendFile(m.chat, meme, 'error.jpg', `😂😂🤣`, m, fake,)
}
handler.command = ['meme2', 'memes2'] 
handler.level = 2
handler.register = true
export default handler
