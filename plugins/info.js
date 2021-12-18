let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Created By :
┃• Izayoi Miku Developer
┃
┃> Bot Component :
┃• JavaScript via NodeJS
┃• FFmpeg
┃• ImageMagick
┃
┃> Thanks To :
┃• Izayoi Miku Developer
┃• DarrenM
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TELKOMSEL:* [081313559753]
┣➥ *Dana:* [081313559753]
┣➥ *Gopay:* [081313237349]
┣➥ *Saweria:* [https://saweria.co/MikuIzayoi]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? https://wa.me/6281313237349*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
