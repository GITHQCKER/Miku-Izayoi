let { WAMessageProto, MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let PhoneNumber = require('awesome-phonenumber')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
const os = require('os')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const groupsIn = groups.filter(v => !v.read_only)
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				} 
let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/c439331e533ff281e8bda.jpg'
}
 let buttons = [
  {buttonId: '.owner', buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'}, type: 1},
   {buttonId: '.rules', buttonText: {displayText: '𝚁𝚄𝙻𝙴𝚂'}, type: 1}
]
const buttonsMessage = {
    contentText: `
    
Halo ${conn.getName(m.sender)}
❤ *Miku Bot Info* ❤
Wa Version : ${conn.user.phone.wa_version}
Bot Number : ${conn.getName(conn.user.jid)}
Prefix : [ Multi Prefix ]
Youtube : https://youtube.com/channel/UCKik_26MSZsgfI1c-l2YO2g
WhatsApp Grup : https://chat.whatsapp.com/IsBsA8Z6CaJGvRxaSDDuWB
Source Code : https://github.com/DarrenM999/Miku-Izayoi
༺═──────────────═༻
*Miku Bot Menu*

*Register*
/daftar <nama|umur>
/register <nama|umur>
/runtime
/tes
/iklan
/rules
/registered
 
*Absent Menu*
/absen
/cekabsen
/hapusabsen
/mulaiabsen [teks]
 
*Exp & Limit Menu*
/peti
/buy<jumlah limit>
/buy <jumlah limit>
/buyall
/cheat (Limit)
/daily
/claim
/dompet
/gift @user <jumlah>
/kerja (Limit)
/leaderboard
/lb
/gift2 @user <limit>
/payexp @user <amount>
/paylimit @user <amount>
/topmoney
/unreg <sn>
/unregister <sn>

*Adventure Menu*
/berburu
/mancing
/adventure
/petualang
/berpetualang
/mulung
/work
/feed [pet type]
/gaji
/gajian
/hunt
/inv
/judi <jumlah>
/leveljob
/levelup
/nebang
/nyampah
/open <crate>
/gacha <crate>
/shop <sell|buy> <args>
/toko <sell|buy> <args>
/shop <sell|buy> <args>
/toko <sell|buy> <args>
/slots
/jackpot
/menanam
/transfer <Args>
/tukarcoin <Jumlah>
/tukarcoin <jumlah>
/tukarall
/tukarxp <Jumlah>
/tukarxp <jumlah>
/tukarsemua
/tukarmoney <Jumlah>
/tukarmoney <jumlah>
/tukarall
/use <item> <jumlah>
/heal
 
*Gift Menu*
/bonus
/hadiah
/buygift
/freegift <kode>
/gift <kode> (Limit)
/runtime
 
*Database Menu*
/addvn <text>
/addmsg <text>
/addvideo <text>
/addaudio <text>
/addimg <text>
/addsticker <text>
/delcmd <text>
/delvn <text>
/delmsg <text>
/delvideo <text>
/delaudio <text>
/delimg <text>
/delsticker <text>
/getvn <text>
/getmsg <text>
/getvideo <text>
/getaudio <text>
/getimg <text>
/getsticker <text>
/infocmd <text>
/listcmd <text>
/listvn
/listmsg
/listvideo
/listaudio
/listimg
/liststicker
/unlockcmd
/lockcmd
/setcmd <text>
 
*Group Menu*
/add 62********** (Limit)
/afk <alasan>
/listbot
/save @mention <ContactName>
/demote @user
/enable <option>
/disable <option>
/getpp @user
/getsider
/group <open/close>
/infogrup
/group *open / close*
/infgc
/infogrup
/kick @user
/kickall
/leave
/keluar
/leavegc
/leavegcall
/leavegroup
/linkgroup
/linkgroup
/listadmin
/here
/listonline
/enable <option>
/disable <option>
/pengumuman [teks]
/announce [teks]
/hidetag [teks]
/promote @user
/pm @user
/resend (Limit)
/revoke
/setdesk <teks>
/setname <nama>
/setpptext
/seticontext
/setpp
/siapa <pertanyaan>?
/siapakah <pertanyaan>?
/simulate <event> [@mention]
/tagall (Limit)
/tagme
/tampar @user (Limit)
/totalpesan
 
*Anime Menu*
/anime <query>
/anime <judul>
/animelink
/baka 
/character <nama>
/ppcouple
/ppcp
/husbu 
/kusonime <judul>
/loli
/manga <judul>
/mangalink
/manhwalink
/megumin
/nekolatest (Limit)
/nekopoi (Limit)
/quoteanime
/randomanime
/waifu 
/wait (caption|reply image)
/wallpaperanime (Limit)
/wibu  (Limit)
 
*Love Menu*
/jodohin
/jodoh <nama>|<nama doi>
/pesankosong (Limit)
 
*Creator Menu*
/advancedglow <teks> (Limit)
/aglitertext (Limit)
/amongus <teks> (Limit)
/attp <teks>
/attp2 (Limit)
/attp3 <teks>
/avengers <teks|teks> (Limit)
/banner <text> (Limit)
/logo <text> (Limit)
/battlefield <teks|teks> (Limit)
/bloodtext <teks> (Limit)
/bplogo <teks> (Limit)
/breakwall <teks> (Limit)
/burningtext (Limit)
/burnpaper <teks> (Limit)
/carbontext <teks> (Limit)
/cloudtext <teks> (Limit)
/coffecup <teks> (Limit)
/coffetext <teks> (Limit)
/s
/sgif
/sticker <teks> (Limit)
/ctrigger <text> (Limit)
/crossfire <teks> (Limit)
/cstahta <teks> (Limit)
/ctrigger <text> (Limit)
/darkneon <teks> (Limit)
/dropwater <teks> (Limit)
/dropwater2 <teks> (Limit)
/editodserti <teks>
/ephoto <effect|teks> (Limit)
/ephoto <effect|teks> (Limit)
/fbplaybutton <teks> (Limit)
/fflogo <teks> (Limit)
/fflogo2 <teks> (Limit)
/ffserti1 <teks> (Limit)
/ffserti2 <teks>
/firetext <teks> (Limit)
/firework <teks> (Limit)
/flametext <teks> (Limit)
/flamming <teks> (Limit)
/football <nama|nomer> (Limit)
/gaminglogo <teks> (Limit)
/haramserti teks
/gayserti <teks>
/getexif
/glitch teks|teks
/glitertext <teks|teks> (Limit)
/glow <teks> (Limit)
/glowtext <teks> (Limit)
/glowtext2 <teks> (Limit)
/gneon <teks>
/goldtext <teks> (Limit)
/gplaybutton <teks> (Limit)
/gradient <teks> (Limit)
/greyscale (reply) (Limit)
/gsuggesti <teks|teks|teks> (Limit)
/gtattp <teks|teks> (Limit)
/harrypotter <teks> (Limit)
/hekerserti <teks>
/hitler (reply) (Limit)
/honey <teks> (Limit)
/horny (caption|reply media) (Limit)
/invert (reply) (Limit)
/joke (reply) (Limit)
/jokerlogo <teks> (Limit)
/kiss
/lionlogo <teks|teks> (Limit)
/logobp <teks>
/lolbanner <teks> (Limit)
/lovecoffe <teks> (Limit)
/naruto <teks> (Limit)
/neon <teks> (Limit)
/neontext <teks> (Limit)
/nexustext <teks|teks|teks> (Limit)
/ninjalogo <teks|teks> (Limit)
/pantaitext <teks> (Limit)
/phcommand <name|pesan>
/phcomment <username|command> (Limit)
/phlogo <text|text>
/photooxy <effect|teks> (Limit)
/picture (reply) (Limit)
/gplaybutton <teks>
/pubglogo teks|teks
/pubglogo <teks|teks> (Limit)
/pubgserti <teks>
/pubgserti2 <teks>
/quotemaker (tulisan)|(name)
/rainbowglow <teks> (Limit)
/rainbowshine <teks> (Limit)
/realisticcloud (Limit)
/run (reply media) (Limit)
/sandw <teks>
/sbburn <teks> (Limit)
/semoji2 <teks>
/semoji3 [tipe] <emoji>
/sepia (reply) (Limit)
/sfire (Limit)
/stickerfire
/shaketext (Limit)
/stikermeme <teks atas>|<teks bawah> (Limit)
/smim <reply imagenya>
/smim2
/smim3
/smooke <teks> (Limit)
/snowtext <teks|teks> (Limit)
/snowtext2 <teks> (Limit)
/circle
/sticker
/stikerline <url> (Limit)
/stikerly <pencarian> (Limit)
/stikermeme <teks atas>|<teks bawah> (Limit)
/stag <reply sticker>
/stickertag <replay sticker>
/stikertag <reply sticker>
/stikertelegram <url> (Limit)
/stickfilter (caption|reply media) (Limit)
/stickmaker (caption|reply media) (Limit)
/stikerline <url> (Limit)
/stikerly <pencarian> (Limit)
/stikertelegram <url> (Limit)
/style <query|teks> (Limit)
/surgaserti <teks>
/tahta <teks> (Limit)
/inu <teks> (Limit)
/telestick <teks>
/text3d <teks>
/text3d2 <teks>
/textburn <teks> (Limit)
/thundertext <teks> (Limit)
/toimg (reply)
/tololserti <teks> (Limit)
/tovideo (reply stiker)
/toxictext <teks> (Limit)
/trigger
/trumpcomment <teks> (Limit)
/ttp <teks>
/ttp2 (Limit)
/ttp3 <teks>
/ttp4 <teks>
/ttp5 <teks>
/ttp6 <teks>
/ttpdark <teks> (Limit)
/ultah <teks> (Limit)
/underwater <teks> (Limit)
/valorant <teks|teks|teks> (Limit)
/wallgravity <teks|teks> (Limit)
/wanted (reply) (Limit)
/warface <teks> (Limit)
/wasted
/water <teks>
/whitecube <teks> (Limit)
/wm <packname>|<author>
/wolflogo <text|text>
/wolfmetal <teks> (Limit)
/wooden <teks> (Limit)
/woodenboard <teks> (Limit)
/woodtext <teks> (Limit)
 
*Fun Menu*
/angka <0-9>
/asahotak
/caklontong
/cantikcek (Limit)
/cari <query>
/casino <jumlah>
/dadu
/dadu2
/dare
/family100
/gantengcek (Limit)
/gaycek (Limit)
/iqtest
/kuis
/math <mode>
/math2
/siapakahaku
/slot  (Limit)
/suit
/tebakanime
/tebakbendera
/tebakgambar
/tebakkata
/tebakkimia
/tebaklagu (Limit)
/tebaktebakan
/tekateki
/tololcek (Limit)
/truth
/twister

*Image Menu*
/8bit (reply) (Limit)
/bintang <teks> (Limit)
/bokehtext <teks> (Limit)
/cewek
/circle (reply) (Limit)
/cod <teks|teks> (Limit)
/ppcouple
/ppcp
/cowok
/cup1 <teks> (Limit)
/darkjokes
/estetik 
/futureneon <teks> (Limit)
/glasses  (Limit)
/helloween <text> (Limit)
/heroml <nama> (Limit)
/image <query> (Limit)
/pinterest <query> (Limit)
/jahy  (Limit)
/kpop <query>
/ktp <nik|prov|kabu|name|ttl|jk|jl|rtrw|lurah|camat|agama|nikah|kerja|warga|until|url> (Limit)
/leavetext <teks> (Limit)
/logomarvel <teks|teks> (Limit)
/makanan
/manga  (Limit)
/marvellogo <text|text>
/mem
/metalicglow <teks> (Limit)
/neon1 <teks> (Limit)
/pinterest <query> (Limit)
/pinterest2 <query> (Limit)
/pussy  (Limit)
/quotesimg <teks> (Limit)
/spiderman <teks|teks> (Limit)
/splaybutton <teks>
/summer <teks> (Limit)
/trash (reply) (Limit)
/wallpaper  (Limit)
/wallpaperq <query> (Limit)
/wpcyberspace
/wpteknologi
/wpprogramming
/wpmuslim
/wppegunungan
/wpmobile  (Limit)
/wpnsfwmobile  (Limit)
/zettairyouiki  (Limit)
/zettairyouiki  (Limit)
 
*Video Menu*
/intromaker
/shaunthesheep
 
*Anonymous Chat Menu*
/start
/leave
/next

*Virus Menu*
/katalog
/lokasi

*Audio Menu*
/bass
/blown
/deep
/earrape
/fast
/fat
/nightcore
/reverse
/robot
/slow
/smooth
/tupai
/bass
/toptt (reply) (Limit)
/tovn (reply) (Limit)
/tovn
/tupai
/bass [vn]
/blown [vn]
/deep [vn]
/earrape [vn]
/fast [vn]
/fat [vn]
/nightcore [vn]
/reverse [vn]
/robot [vn]
/slow [vn]
/smooth [vn]
/tupai [vn]
 
*Sound Menu*
/berat (Limit)
/fast (reply audio) (Limit)
/getvn <query>
/kodebahasa
/listvn
/reverse (reply audio) (Limit)
/slow (reply audio) (Limit)
/tts <lang> <teks>
/vngemas (reply audio) (Limit)
 
*Random Menu*
/bacot
/bucin
/ceritahorror
/fakta
/faktaunik
/galau
/gombal
/hug
/katailham
/pantun
/puisi
/syair
/quotes
/katabijak
/renungan
/up2urp
 
*Horoscope Menu*
/artinama <nama> (Limit)
/cekjodoh <pasangan> (Limit)
/ceksifat <nama>
/masadepan
/nomorhoki <no hp> (Limit)
/tgljadian <nama> (Limit)
/zodiac *2000 12 13*
 
*Education Menu*
/brainly <soal> (Limit)
/belajar <soal> (Limit)
/mtk <soal> (Limit)
/ipa <soal> (Limit)
/ips <soal> (Limit)
/ppkn <soal> (Limit)
/inggris <soal> (Limit)
/pertanyaan <soal> (Limit)
 
*Music Menu*
/whatmusic
 
*Ask Menu*
/apakah <teks>?
/apakah <pertanyaan>
/artimimpi [mimpi]
/benarkah <teks>?
/bisakah <teks>?
/bisakah <pertanyaan>
/howgay siapa?
/howpintar siapa?
/howcantik siapa?
/howganteng siapa?
/howgabut siapa?
/howgila siapa?
/howlesbi siapa?
/howstress siapa?
/howbucin siapa?
/howjones siapa?
/howsadboy siapa?
/howgay siapa?
/howpintar siapa?
/howcantik siapa?
/howganteng siapa?
/howgabut siapa?
/howgila siapa?
/howlesbi siapa?
/howstress siapa?
/howbucin siapa?
/howjones siapa?
/howsadboy siapa?
/kapan <text>?
/kapankah <text>?
/kapan <pertanyaan>
/kapankah <pertanyaan>
/siapa <text>?
/siapakah <text>?
/siapa <pertanyaan>?
/siapakah <pertanyaan>?
/siapa <teks>?
/siapakah <teks>?
 
*Downloader Menu*
/fb <hd/sd|url> (Limit)
/image [gambar] | [jumlah]
/ighighlight <username>
/igstory <username>
/joox <judul> (Limit)
/mediafire <link> (Limit)
/pinterestdl <url>
/pinterestvideo <url> (Limit)
/snackvideo <url> (Limit)
/spotify <url>
/tiktokaudio <url>
/ttaudio <url>
/twittermp4 <url> (Limit)
/twittera <url> (Limit)
/zippyshare <url>
/zippy <url>
 
*News Menu*
/berita
/news
/infobmkg (Limit)
/infogempa (Limit)
 
*Spammer Menu*
/danacinta <no hp> (Limit)
/spamstc
/olx <no hp> (Limit)
/pizzahut <no hp> (Limit)
/suratto <nomor|pesan> (Limit)
/spam <nomor|pesan>
/spamwa <nomor|pesan>
/mmmn <teks> (Limit)
/spamcall <no hp> (Limit)
/spamchat <teks> (Limit)
/spamgmail <@email|pesan> (Limit)
/spam <nomor|pesan>
/spamwa <nomor|pesan>
/spamsms <no hp> (Limit)
 
*Tools Menu*
/aksara <opsi> <teks> (Limit)
/akungratis (Limit)
/freeaccount (Limit)
/alay <teks>
/base64
/binary <teks>
/buatgrup
/calc <angka> (Limit)
/kalk <angka> (Limit)
/calculator <angka> (Limit)
/kalkulator <angka> (Limit)
/caricowok
/carigrup <pencarian>
/caripesan <pesan>|<jumlah>
/caristicker <query> (Limit)
/covidindo
/create <nama|nomor> (Limit)
/cuaca <daerah> (Limit)
/effect_senyum
/hd (caption|reply media)
/enhance (caption|reply media)
/enphoto <efek> <teks>|[teks2]|[teks3]
/film <query> (Limit)
/nonton <query> (Limit)
/filmanime <film> (Limit)
/caripesan <pesan>|<jumlah>
/getsticker
/getstiker
/gimage <query>
/image <query>
/githubsearch <pencarian>
/hackweb <judul|desk|wm|url>
/hadis
/hash <teks>
/halah <teks>
/hilih <teks>
/huluh <teks>
/heleh <teks>
/holoh <teks>
/huruf <teks>
/ifilter (Limit)
/imagetobase64 (caption|reply) (Limit)
/tobraille
/infogempa
/inspect <chat.whatsapp.com>
/ip <alamat ip>
/ipcheck <alamat ip>
/ipcek <alamat ip>
/kodepos <kecamatan> (Limit)
/peta <wilayah> (Limit)
/lokasi <wilayah> (Limit)
/maps <wilayah> (Limit)
/peta <wilayah> (Limit)
/lokasi <wilayah> (Limit)
/maps <wilayah> (Limit)
/skullmask
/memeg<apa|apa>
/mention <teks>
/modapk
/nickff
/nightcore
/ninja <nama>
/nonton <film> (Limit)
/nsfwcek (reply/caption) (Limit)
/ocr (Limit)
/pastebin <opsional> (Limit)
/profile [@user]
/purba <teks>
/qr <teks>
/qrcode <teks>
/readmore <teks>|<teks>
/spoiler <teks>|<teks>
/readqr (Limit)
/repeat <teks> (Limit)
/repeat2 <teks> (Limit)
/reverse <teks>
/save <nama>
/scan [nomor]
/sha256
/sid <link> (Limit)
/short <link> (Limit)
/kecepatan
/ping
/speed
/surah <no surat>
/teruskan <teks>
/textpro <efek> <teks>|[teks2]
/tinyurl <link> (Limit)
/short2 <link> (Limit)
/tomp3 (reply video) (Limit)
/translate <lang> <teks>
/upload (caption|reply media)
/upload2 (caption|reply media)
/virvid
/waktu <daerah>
/yts <pencarian>
/ytsearch <pencarian>
/zodiac *2002 02 25*
 
*Bot Menu*
/jadibot (Limit)
/listjadibot
 
*Premium & VIP Menu*
/cerpen  (Limit)
/getcode
/hack (Limit)
/join <link gc>
/autojoin <link gc>
/spam <nomor|pesan>
/spamwa <nomor|pesan>
/stickernowm
/stickergifnowm
/sgifnowm
/stickerwa <teks> (Limit)
 
*Owner Menu*
/addowner [@user]
/addprem [@user]
/addprems 1 minggu <nomor>
/addprems 30 days <nomor>
/addprems vip<nomor>
/whitelist nomor,nomor
/backup
/balas [nomor] [teks]
/banchat
/ban
/broadcast <teks>
/bc <teks>
/block <@user>
/blocklist
/broadcastgroup <teks>
/bcgc <teks>
/plugins
/cheatiket
/cheatxp
/deletechat
/deletechat group
/mutechat
/mutechat group
/clearall
/debounce
/delowner *@user*
/enable <option>
/disable <option>
/expired <hari>
/alljhbbvu
/mode
/oadd @user
/odemote @user
/okick @user
/oleave
/okeluar
/opengumuman [teks]
/ohidetag [teks]
/opromote @user
/oadmin @user
/o^ @user
/premlist
/resetlimit
/resetprefix
/say <teks>
/sendbug <nomor>
/sendtroli <nomor>
/setbotbio
/setbotname
/setbye <teks>
/setmenu <teks>
/setmenubefore <teks>
/setmenuheader <teks>
/setmenubody <teks>
/setmenufooter <teks>
/setmenuafter <teks>
/setprefix <prefix>
/setwelcome <teks>
/simulate <event> [@mention]
/berhenti
/stop
/unbanchat
/ban
/unblock <@user>
/unwarn @mention
/upsw [text] (Reply Media)
/upsw <teks>
/warn @mention

*Host Menu*
/broadcastjadibot <teks>
/bcbot <teks>
/resetlimit
/restart
/roload
/update2

*Information Menu*
/.apikey
/bannedlist
/boost
/refresh
/bug <laporan>
/report <laporan>
/channel
/del
/delete
/gcbot
/groups
/grouplist
/info
/listdonasi
/mystat
/owner
/creator
/qowner
/partner
/ping
/rank
/request <fitur>
/shoppay
/ping
/speed
/websetapi

Thankyou for using Miku Izayoi WhatsApp Bot
`.trim(),    footerText: 'Miku Izayoi Bot' ,
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage'),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(DATABASE.data.users).length, 
thumbnail: await (await require('node-fetch')(imeg)).buffer(),
    message: `Hai ${conn.getName(m.sender)}\nUptime : ${clockString(process.uptime() * 1000)}`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
   }
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(menu)$/i

module.exports = handler

function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}
