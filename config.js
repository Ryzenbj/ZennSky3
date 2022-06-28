//=============『 Utama 』================== //
global.owner = ['6289510598381'] 
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = 'YogzKyz ツ'
global.numberowner = '6289510598381'
global.instagram = 'https://instagram.com/karfuanyogich'
global.github = 'https://github.com/YogzKyz'
global.dana = '089510598381'
global.pulsa = '089510598381'
global.gopay = '089510598381'

//=============『 Info Bot 』=================//
global.namebot = 'ZennSky'
global.gc = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl'
global.web = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '_*Sewa Payment*_\n_*Gopay = 089510598381*_\n_*Dana = 089510598381*_\n_*Contact me :*_\nwa.me/6289510598381'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/2bd9bfefaf2241e8cadd4.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/2bd9bfefaf2241e8cadd4.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v 
global.zenzkey = '3599828239' //ganti jadi apikey lu kalau expired
global.wm = 'ZennSky'
global.watermark = wm
global.wm2 = '                     「 ZennSky-Botz あ⁩ 」'
global.wm3 = '⫹⫺ YogzKyz ツ'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/2bd9bfefaf2241e8cadd4.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*Please wait, Your request is being processed...*_'
global.eror = '_*Server Error*_'
global.benar = 'Right ✅\n'
global.salah = 'Wrong ❌\n'
global.stiker_wait = 'Stickers in progress'
global.packname = 'ZennSky-Botz'
global.author = '© YogzKyz ツ'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'MIMINETBOT',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'QAEL9szd',
  'https://api.lolhuman.xyz': 'Papah-Chan',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 150 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
