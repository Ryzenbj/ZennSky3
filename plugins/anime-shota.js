let handler = async (m, { conn }) => {
let hyzer = 'https://api.xteam.xyz/randomimage/shota?APIKEY=MIMINETBOT'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'SHOTA', '.shota', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i

module.exports = handler