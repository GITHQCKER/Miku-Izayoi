let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TELKOMSEL:* [0813-1323-7349]
┣➥ *DANA:* [0813-1355-9753]
┣➥ *OVO:* [0813-1323-7349]
┣➥ *GO-PAY:* [0813-1355-9753]
┣➥ *SAWERIA:* [https://saweria.co/MikuIzayoi]
┣➥ *Q-RIS:* [MINTA KE OWNER]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281313237349*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler
