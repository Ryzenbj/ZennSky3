let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.reward === 1) throw `Kamu sudah mengeclaim hadiah reward Shiro Bot 4.0! Tunggu hadiah nya next update ya!`
    if (user.reward === 0) {
        await conn.sendMessage(m.chat, await(await fetch(thumbfoto)).buffer(), `Terimakasih sudah menggunakan Haruno Bot, hingga sekarang Shiro Bot sudah berjalan selama 1 bulan lebih.\nBerikut hadiah mu:

Limit = 100
EXP = 20.000

Tunggu update selanjutnya ya!`.trim(), watermark, 'Profile', '.my')
        user.reward += 1
        user.limit += 100
        user.exp += 20000
    }
}
handler.help = ['reward']
handler.tags = ['rpg']

handler.command = /^(reward)$/i
handler.premium = false
handler.register = true
handler.limit = false
module.exports = handler