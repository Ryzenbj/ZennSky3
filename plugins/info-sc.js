/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 

Nih Link Sc Ori Nya Dibawah :
https://youtu.be/AXPzjQ5jxx8

Sc Recodenya ?
_*PM Me↓*_
wa.me/6282148864989

_*Jangan Lupa Di Subscribe Channelnya Ya*_`
conn.sendBut(m.chat, esce, wm3, 'Thanks ᴀ ɴ ᴅ ϟ ツ', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
