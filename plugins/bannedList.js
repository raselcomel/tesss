let handler = async (m, { jid, conn, usedPrefix, command, isOwner }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `
╭─「 Daftar Chat Terbanned 」
│✇ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│• ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
╰────


╭─「 Daftar Pengguna Terbanned 」
│✇ Total : ${users.length} Pengguna${users ? '\n' + users.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│• ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
╰────
`.trim()
    conn.sendButton(m.chat, caption, wm, await(await fetch(fla + `${command}`)).buffer(), [[`Menu`, `${usedPrefix}menu`]], m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^list?ban(ned)?|ban(ned)?list?|daftarban(ned)?$/i

handler.owner = false
handler.exp = 10
module.exports = handler
