// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

const _0x5b36 = ['fromMe', 'media/menu.mp3', 'vcard', 'contextInfo', 'message', 'msg', 'mentionedJid', 'reply', 'chat', 'sendMessage', 'buffer', 'getName', 'replace', 'replaceAll', 'split', 'join', 'getRandom', 'date', 'text', 'contextInfo', 'externalAdReply', 'thumbnail', 'sourceUrl', 'mediaType', 'renderLargerThumbnail', 'forwardingScore', 'mentionedJid', 'name', 'command', 'sendFile', 'string', 'readMore', 'catch', 'log', 'toLocaleDateString', 'toLocaleTimeString', 'Intl', 'DateTimeFormat', 'u-ca-islamic', 'get', 'hour', 'minute', 'second', 'numeric', 'month', 'year', 'day', 'week', 'exp', 'level', 'role', 'locale', 'min', 'xp', 'max', 'totalexp', 'maxexp', 'xp4levelup', 'role', 'dateIslamic', 'totalreg', 'rtotalreg', 'replace', 'text', 'who', 'mentionedJid', 'taguser', 'image', 'await', 'json', 'catch', 'config', 'try', 'log', 'function', 'console', 'method', 'export', 'import', 'fs', 'promises', 'path', 'fetch', 'github', 'npmname', 'npmdesc', 'version', 'pm', 'default', 'string', 'true', 'false', 'split', 'map', 'sort', 'join', 'padStart', 'repeat', 'padEnd', 'filter', 'length', 'Object', 'keys', 'values', 'find', 'setTimeout', 'then', 'catch', 'number', 'parse', 'resolve', 'promise', 'once', 'send', 'Promise', 'await', 'process', 'catch', 'message', 'text', 'function', 'user', 'string', 'date', 'code'];

function _0x2675(_0x1b02b4, _0x1873a7) {
    return _0x5b36[_0x1b02b4 - _0x1873a7];
}

function _0x49cf(_0x1b02b4) {
    return _0x5b36[_0x1b02b4];
}

import fs from _0x49cf(0x0);
import fetch from _0x49cf(0x1);
import { xpRange } from _0x49cf(0x2);
const { levelling } = _0x49cf(0x2);
import PhoneNumber from _0x49cf(0x3);
import { promises } from _0x49cf(0x4);
import { join } from _0x49cf(0x5);

let handler = async (_0x1234, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
        let vn = _0x49cf(0x6);
        let _package = JSON.parse(await promises.readFile(join(__dirname, _0x49cf(0x7))).catch(_ => ({}))) || {};
        let { exp, limit, level, role } = global.db.data.users[_0x1234.sender];
        let { min, xp, max } = xpRange(level, global.multiplier);
        let name = await conn[_0x49cf(0x8)](_0x1234.sender);
        let d = new Date(new Date() + 3600000);
        let locale = _0x49cf(0x9);
        let weton = [_0x49cf(0xa), _0x49cf(0xb), _0x49cf(0xc), _0x49cf(0xd), _0x49cf(0xe)][Math.floor(d / 84600000) % 5];
        let week = d.toLocaleDateString(locale, { weekday: _0x49cf(0xf) });
        let date = d.toLocaleDateString(locale, { day: _0x49cf(0x10), month: _0x49cf(0x11), year: _0x49cf(0x12) });
        let dateIslamic = Intl[_0x49cf(0x13)](locale + '-TN-u-ca-islamic', { day: _0x49cf(0x10), month: _0x49cf(0x11), year: _0x49cf(0x12) }).format(d);
        let time = d.toLocaleTimeString(locale, { hour: _0x49cf(0x14), minute: _0x49cf(0x15), second: _0x49cf(0x16) });
        let _uptime = process.uptime() * 1000;
        let _muptime;
        if (process.send) {
            process.send(_0x49cf(0x17));
            _muptime = await new Promise(resolve => {
                process.once(_0x49cf(0x18), resolve);
                setTimeout(resolve, 1000);
            }) * 1000;
        }
        let { money, joincount } = global.db.data.users[_0x1234.sender];
        let user = global.db.data.users[_0x1234.sender];
        let muptime = clockString(_muptime);
        let uptime = clockString(_uptime);
        let totalreg = Object.keys(global.db.data.users).length;
        let rtotalreg = Object.values(global.db.data.users).filter(user => user[_0x49cf(0x19)] === _0x49cf(0x1a)).length;
        let replace = {
            '%': '%',
            p: _p, uptime, muptime,
            me: conn[_0x49cf(0x8)](conn.user.jid),
            npmname: _package.name,
            npmdesc: _package.description,
            version: _package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp,
            github: _package.homepage ? _package.homepage.url || _package.homepage : _0x49cf(0x1b),
            level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
            readmore: readMore
        };
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, name) => '' + replace[name]);
        let who = _0x1234.mentionedJid && _0x1234.mentionedJid[0] ? _0x1234.mentionedJid[0] : _0x1234.fromMe ? conn.user.jid : _0x1234.sender;
        let mentionedJid = [who];
        let username = conn[_0x49cf(0x8)](who);
        let taguser = '@' + _0x1234.sender.split("@s.whatsapp.net")[0];
        let pp = _0x49cf(0x1c);
        let img = await (await fetch(_0x49cf(0x1d))).buffer();
        await conn[_0x49cf(0x1e)](_0x1234.chat, {
            text: `${_0x49cf(0x1f)} @${_0x1234.sender.split(_0x49cf(0x20))[0]}\n${_0x49cf(0x21)}`,
            contextInfo: {
                mentionedJid: [_0x1234.sender],
            }
        }, { quoted: _0x1234 });
        let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${_0x1234.sender.split('@')[0]}:${_0x1234.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" };

        let menu = `${_0x49cf(0x22)}

${_0x49cf(0x23)}
┃➔ *👑𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧:* 𝐏𝐚𝐨𝐥𝐨 𝐱 𝐃𝐢𝐚𝐧𝐚
┃➔ *☑𝙑𝙚𝙧𝙨𝙞𝙤𝙣:* 1.0.0
┃➔ *⏰𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤:* ${uptime}
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x24)}
┃➔ ✅ ${usedPrefix}enable
┃➔ ❌ ${usedPrefix}disable
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x25)}
┃➔ 🚫 ${usedPrefix}kick
┃➔ 🏠 ${usedPrefix}grupo
┃➔ ⬆️ ${usedPrefix}promote
┃➔ ⬇️ ${usedPrefix}demote
┃➔ 🔗 ${usedPrefix}link
┃➔ 📢 ${usedPrefix}invocar
┃➔ 👋 ${usedPrefix}setwelcome
┃➔ 👋 ${usedPrefix}setbye
┃➔ 🕵️ ${usedPrefix}hidetag
┃➔ 🏷️ ${usedPrefix}tag
┃➔ 👻 ${usedPrefix}fantasmas
┃➔ 👻🚫 ${usedPrefix}kickfantasmas
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x26)}
┃➔ 📖 ${usedPrefix}pokedex
┃➔ 👨🏼 ${usedPrefix}prostituto <@tag>
┃➔ 👩🏼 ${usedPrefix}prostituta <@tag>
┃➔ 🏳️‍🌈 ${usedPrefix}gay2 <@tag>
┃➔ 👩‍❤️‍👩 ${usedPrefix}lesbiana <@tag>
┃➔ 💦 ${usedPrefix}pajero <@tag>
┃➔ 💦 ${usedPrefix}pajera <@tag>
┃➔ 😈 ${usedPrefix}puto <@tag>
┃➔ 💋 ${usedPrefix}puta <@tag>
┃➔ ✋ ${usedPrefix}manco <@tag>
┃➔ ✋ ${usedPrefix}manca <@tag>
┃➔ 🐀 ${usedPrefix}rata <@tag>
┃➔ 👦🏿 ${usedPrefix}negro <@tag>
┃➔ 👩🏿‍🦰 ${usedPrefix}negra <@tag>
┃➔ 🤢 ${usedPrefix}fea <@tag>
┃➔ 🤢 ${usedPrefix}feo <@tag>
┃➔ 🍑 ${usedPrefix}sinpoto <@tag>
┃➔ 🍒 ${usedPrefix}sintetas <@tag>
┃➔ 🍆 ${usedPrefix}sinpito <@tag>
┃➔ 👨‍👩‍👧‍👦 ${usedPrefix}adoptada <@tag>
┃➔ 👨‍👩‍👧‍👦 ${usedPrefix}adoptado <@tag>
┃➔ 🤖 ${usedPrefix}simisimi
┃➔ ❓ ${usedPrefix}pregunta
┃➔ 📅 ${usedPrefix}cuando
┃➔ 💋 ${usedPrefix}ship5
┃➔ 🫂 ${usedPrefix}abrazo
┃➔ 💋 ${usedPrefix}ship2
┃➔ 🎰 ${usedPrefix}ruleta
┃➔ ♌ ${usedPrefix}zodiac
┃➔ 😡 ${usedPrefix}odio
┃➔ 💋 ${usedPrefix}ship
┃➔ 🎟️ ${usedPrefix}sorteo
┃➔ 💑 ${usedPrefix}minovia
┃➔ 💑 ${usedPrefix}minovio
┃➔ 😏 ${usedPrefix}kchero
┃➔ 😎 ${usedPrefix}kchero
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x27)}
┃➔ ▶️ ${usedPrefix}play
┃➔ ▶️ ${usedPrefix}play.1
┃➔ ▶️ ${usedPrefix}play2.2
┃➔ 🎮 ${usedPrefix}ytv.2
┃➔ 🎮 ${usedPrefix}yta.2
┃➔ 🎧 ${usedPrefix}playlist
┃➔ 🎧 ${usedPrefix}spotify
┃➔ 🎧 ${usedPrefix}spotifydl
┃➔ 🎤 ${usedPrefix}tiktok
┃➔ 🎤 ${usedPrefix}instagram
┃➔ 🎤 ${usedPrefix}mediafire
┃➔ 🎤 ${usedPrefix}gdrive
┃➔ 🎤 ${usedPrefix}twitter
┃➔ 🎮 ${usedPrefix}yta
┃➔ 🎮 ${usedPrefix}ytv
┃➔ 🎮 ${usedPrefix}imagen
┃➔ ⏯️ ${usedPrefix}iaimagen
┃➔ ⏯️ ${usedPrefix}pinteres
┃➔ 🎧 ${usedPrefix}igstory
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x28)}
┃➔ 🕵️‍♂️ ${usedPrefix}xnxxsearch
┃➔ 📂 ${usedPrefix}tiktoksearch
┃➔ 🌐 ${usedPrefix}google
┃➔ 🔎 ${usedPrefix}letra
┃➔ 🗂️ ${usedPrefix}wikipedia
┃➔ 🌐 ${usedPrefix}ytsearch
┃➔ 🕵️‍♂️ ${usedPrefix}playstore
┃➔ 🔎 ${usedPrefix}mercadolibre
┃➔ 📂 ${usedPrefix}pornhubsearch
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x29)}
┃➔ 🔇 ${usedPrefix}mute
┃➔ 🎷 ${usedPrefix}trad
┃➔ 🧮 ${usedPrefix}calc
┃➔ 🗑️ ${usedPrefix}del
┃➔ 🎶 ${usedPrefix}whatmusic
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x2a)}
┃➔ 🔫 ${usedPrefix}crimen
┃➔ 📝 ${usedPrefix}reg
┃➔ ⛏️ ${usedPrefix}minar
┃➔ 🪓 ${usedPrefix}buy
┃➔ 💎 ${usedPrefix}work
┃➔ 🏗️ ${usedPrefix}mendigar
╰━━━━━━━━━━━━━━╯

${_0x49cf(0x2b)}
┃➔ 🛠️ ${usedPrefix}s
┃➔ 🏷️ ${usedPrefix}emojimix
┃➔ ⚙️ ${usedPrefix}attp
┃➔ 🔩 ${usedPrefix}qc
╰━━━━━━━━━━━━━━╯`.trim();

        await conn[_0x49cf(0x1e)](_0x1234.chat, {
            text: menu,
            contextInfo: {
                mentionedJid: [_0x1234.sender],
                forwardingScore: 9,
                externalAdReply: {
                    title: 'ＳＹＳＴＥＭ  Ｘ',
                    thumbnail: img,
                    sourceUrl: _0x49cf(0x2c),
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: _0x1234 });

        await _0x1234.react('✅');
    } catch (e) {
        console.log(`❗❗ ${_0x49cf(0x2d)} ${usedPrefix + command} ❗❗`);
        console.log(e);
    }
}

handler.help = [_0x49cf(0x2e), _0x49cf(0x2f), '?'];
handler.tags = [_0x49cf(0x30)];
handler.command = new RegExp(`^(allmenu|allmenu\\?)$`, 'i');
handler.exp = 50;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
