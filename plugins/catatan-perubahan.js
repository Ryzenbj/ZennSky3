let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Minggu, 5 Juni 2022 : V. 3.0\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ Update Tampilan\n\n◇ Perbaiki Berapa Bug Seperti Wm Stiker, Untuk Gif Masih Eror \n\n◇ Total Fitur saat ini: ??\n\n© 𝚁 𝙴 ϟ 𝙽 ツ', 'Ok 𝚁 𝙴 ϟ 𝙽 ツ :3', 'Ok')
handler.help = ['notes']
handler.tags = ['main']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler