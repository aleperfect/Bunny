let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:ACTIVENSE‼️* ${pesan}`
let teks = `🛍️ *𝑽𝒆𝒏𝒕𝒂𝒔 𝑩𝒖𝒏𝒏𝒚*
https://chat.whatsapp.com/HRiBA6p8H3D5ZHcargNsvD\n\n🟩 ${oi}\n\n🟩 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `🐰💜 @${mem.id.split('@')[0]}\n`}
teks += `𝐁𝐮𝐧𝐧𝐲 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|bunny|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler