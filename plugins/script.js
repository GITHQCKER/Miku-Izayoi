let handler  = async (m, { conn, usedPrefix: _p }) => {
let event= `
╭─❒ SCRIPT
│◦➛Base : Miku Izayoi Developer
│◦➛Recode : *©Miku Bot*
│◦➛GitHub : https://github.com/DarrenM999/Miku-Izayoi
└──────[ Contact ]──────❒
  │◦➛Script  : wa.me/6281313237349
  └──────────────────❒`
 buttons = [
{buttonId: `menu`, buttonText: {displayText: 'BACK➡️'}, type: 1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI💰'},type:1},
{buttonId: `owner`, buttonText: {displayText: 'OWNER👤'}, type: 1}
]

  conn.fakeReply(m.chat, event, '0@s.whatsapp.net', '*HERMAN BOTZ*')
}
handler.help = ['sc']
handler.tags = ['hadiah']
handler.command = /^(sc)$/i

handler.fail = null 

module.exports = handler
