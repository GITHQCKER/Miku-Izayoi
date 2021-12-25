let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `🔰 -----[ 「 *IKLAN HERMAN BOTZ* 」 ]----- 🔰

──────────────────────────────

◯ *LIST CREATE & RENT BOT :*

◯ *RENT : RP 50.000,00 / MONTH*

◯ *CREATE : RP 250.000,00 / MONTH*

◯ *PAYMENT VIA :*

◯ *DANA*

◯ *OVO*

◯ *GOPAY*

◯ *Q-RIS*

◯ *TELKOMSEL*

──────────────────────────────
◯ *ADVANTAGES OF RENTING BOT :*

◯ *1. ADD BOT TO GROUP*

◯ *2. USE PREMIUM COMMAND*

◯ *ADVANTAGES OF CREATING BOT :*

◯ *1. USE OWNER COMMAND*

◯ *2. USE YOUR OWN NAME BOT*

◯ *3. ADD BOT TO GROUP*

◯ *4. BE THE OWNER OF BOT*

──────────────────────────────
◯ *OWNER CONTACT*

◯ *OWNER WHATSAPP LINK :*

◯ *wa.me/6281313237349*

──────────────────────────────

🔰 ---[「 *POWERED BY MIKU IZAYOI* 」]--- 🔰` 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan'] 
handler.tags = ['info'] 
handler.command = /^(iklan)$/i

module.exports = handler
