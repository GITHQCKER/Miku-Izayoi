let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `GitHub : https://github.com/DarrenM999/Miku-Izayoi 
`.trim(), m)

}
handler.help = ['channel']
handler.tags = ['info']
handler.command = /^(channel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
