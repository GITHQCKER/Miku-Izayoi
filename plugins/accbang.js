let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'No'
  if (isAdmin) throw 'You are already be Admin !'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.tags = ['group']
handler.owner = true
handler.botAdmin = false
module.exports = handler
