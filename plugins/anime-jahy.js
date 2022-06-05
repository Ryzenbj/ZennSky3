let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/jahy?apikey=MIMINETBOT`
  conn.sendButtonImg(m.chat, res, wm2, 'NEXT', 'Jahy', '.jahy', m)
}
handler.help = ['jahy'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(jahy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

