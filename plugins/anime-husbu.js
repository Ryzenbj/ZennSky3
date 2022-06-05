let handler = async (m, { conn }) => {
let hyzer = 'https://api.xteam.xyz/randomimage/husbu2?APIKEY=MIMINETBOT'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'HUSBU', '.husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler