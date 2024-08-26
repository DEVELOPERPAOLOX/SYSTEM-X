import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'INFO',
  'game': 'JUEGOS',
  'serbot': 'SUB BOTS',
  'rpg': 'ECONOMÍA',
  'rg': 'REGISTRO',
  'downloader': 'DESCARGAS',
  'marker': 'LOGO - MAKER',
  'nable': 'ACTIVADORES',
  'group': 'GRUPOS',
  'search': 'BUSCADOR',
  'img': 'IMÁGENES',
  'tools': 'HERRAMIENTAS',
  'fun': 'DIVERCIÓN',
  'audio': 'EFECTO DE AUDIOS', 
  'sticker': 'STICKERS',
  'nsfw': 'NSFW',
  'owner': 'CREADOR',
  'advanced': 'AVANZADO',
}

const defaultMenu = {
  before: ``.trimStart(),
  header: '`',
  body: '',
  footer: '',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
 try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, star, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        star: plugin.star,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isstar/g, menu.star ? '˄' : '')
                .replace(/%isPremium/g, menu.premium ? '˄' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, star, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = 'https://th.bing.com/th/id/OIG3.cLOJAQj8neUVXa2OXGEU?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    let pp2 = 'https://th.bing.com/th/id/OIG3.cLOJAQj8neUVXa2OXGEU?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    let pp3 = 'https://th.bing.com/th/id/OIG3.cLOJAQj8neUVXa2OXGEU?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    let pp4 = 'https://th.bing.com/th/id/OIG3.cLOJAQj8neUVXa2OXGEU?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    m.react('✅')
   
  //  conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: m })
let listSections = []    
listSections.push({
title: '',
rows: [{ header: "𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀", title: "", id: `.enable welcome`, description: `𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀` }, { header: "𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 𝐃𝐄 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒", title: "", id: `.enable detect`, description: `𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 𝐃𝐄 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒` },
{ header: "𝐒𝐔𝐁𝐈𝐑 𝐄𝐋 𝐍𝐈𝐕𝐄𝐋 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄", title: "", id: `.enable autolevelup`, description: `𝐒𝐔𝐁𝐈𝐑 𝐄𝐋 𝐍𝐈𝐕𝐄𝐋 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄` },
{ header: "𝐀𝐆𝐑𝐄𝐆𝐀𝐑 𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒", title: "", id: `.enable restrict`, description: `𝐀𝐆𝐑𝐄𝐆𝐀𝐑 𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒` },
{ header: "𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐑 𝐀 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐍 𝐋𝐋𝐀𝐌𝐀𝐃𝐀𝐒", title: "", id: `.enable antiCall`, description: `𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐑 𝐀 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐍 𝐋𝐋𝐀𝐌𝐀𝐃𝐀𝐒` },
{ header: "𝐁𝐀𝐍𝐄𝐀𝐑 𝐀𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐐𝐔𝐄 𝐇𝐀𝐆𝐀 𝐒𝐏𝐀𝐌 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒", title: "", id: `.enable antiSpam`, description: `𝐁𝐀𝐍𝐄𝐀𝐑 𝐀𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐐𝐔𝐄 𝐇𝐀𝐆𝐀 𝐒𝐏𝐀𝐌 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒` },
{ header: "𝐓𝐎𝐃𝐎𝐒 𝐏𝐔𝐄𝐃𝐀𝐍 𝐔𝐒𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗", title: "", id: `.enable self`, description: `𝐓𝐎𝐃𝐎𝐒 𝐏𝐔𝐄𝐃𝐀𝐍 𝐔𝐒𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗` },
{ header: "𝐒𝐎𝐋𝐎 𝐋𝐎𝐒 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐔𝐄𝐃𝐀𝐍 𝐔𝐒𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗", title: "", id: `.enable modoadmin`, description: `𝐒𝐎𝐋𝐎 𝐋𝐎𝐒 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐔𝐄𝐃𝐀𝐍 𝐔𝐒𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗` },
{ header: "𝐋𝐄𝐂𝐓𝐔𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀", title: "", id: `.enable autoread`, description: `𝐋𝐄𝐂𝐓𝐔𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀` },
{ header: "𝐒𝐘𝐒𝐓𝐄𝐌 𝐗 𝐏𝐎𝐑 𝐓𝐈𝐄𝐌𝐏𝐎 𝐋𝐈𝐌𝐈𝐓𝐀𝐃𝐎", title: "", id: `.enable temporal`, description: `𝐒𝐘𝐒𝐓𝐄𝐌 𝐗 𝐏𝐎𝐑 𝐓𝐈𝐄𝐌𝐏𝐎 𝐋𝐈𝐌𝐈𝐓𝐀𝐃𝐎` },
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", title: "", id: `.enable stickers`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜.` },
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄", title: "", id: `.enable autosticker`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚍𝚎 𝚏𝚘𝚛𝚖𝚊 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊.` },
{ header: "𝐑𝐄𝐀𝐂𝐂𝐈𝐎𝐍𝐀𝐑 𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄", title: "", id: `.enable reaction`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚛𝚎𝚊𝚌𝚌𝚒𝚘𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜 𝚍𝚎 𝚏𝚘𝚛𝚖𝚊 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊.` },
{ header: "𝐄𝐍𝐕𝐈𝐀𝐑 𝐀𝐔𝐃𝐈𝐎𝐒 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄", title: "", id: `.enable audios`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚗𝚟𝚒𝚊𝚛 𝚊𝚞𝚍𝚒𝚘𝚜 𝚍𝚎 𝚖𝚊𝚗𝚎𝚛𝚊 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊.` },
{ header: "𝐄𝐍𝐕𝐈𝐀𝐑 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀𝐒 𝐏𝐎𝐑 𝐏𝐀𝐋𝐀𝐁𝐑𝐀𝐒 𝐎𝐁𝐒𝐂𝐄𝐍𝐀𝐒", title: "", id: `.enable antitoxic`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚗𝚟𝚒𝚊𝚛 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚙𝚊𝚕𝚊𝚋𝚛𝚊𝚜 𝚘𝚋𝚜𝚌𝚎𝚗𝚊𝚜.` },
{ header: "𝐋𝐀𝐒 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒 𝐗𝟏 𝐕𝐄𝐒 𝐒𝐄 𝐑𝐄𝐄𝐍𝐕𝐈𝐀𝐍 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐍𝐎𝐑𝐌𝐀𝐋", title: "", id: `.enable antiver`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚛𝚎𝚎𝚗𝚟𝚒𝚊𝚛 𝚕𝚊𝚜 𝚒𝚖𝚊𝚐𝚎𝚗𝚎𝚜 𝚡𝟷 𝚟𝚎𝚜.` },
{ header: "𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐃𝐎𝐒 𝐒𝐄 𝐑𝐄𝐄𝐍𝐕𝐈𝐀𝐍", title: "", id: `.enable delete`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚛𝚎𝚎𝚗𝚟𝚒𝚊𝚛 𝚕𝚘𝚜 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘𝚜.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐍𝐔𝐌𝐄𝐑𝐎𝐒 𝐅𝐀𝐋𝐒𝐎𝐒 𝐎 𝐕𝐈𝐑𝐓𝐔𝐀𝐋𝐄𝐒", title: "", id: `.enable antifake`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚗𝚞𝚖𝚎𝚛𝚘𝚜 𝚏𝚊𝚕𝚜𝚘𝚜 𝚘 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏", title: "", id: `.enable antiLink`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐇𝐓𝐓𝐏𝐒", title: "", id: `.enable antiLink2`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝙷𝚝𝚝𝚙𝚜.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐓𝐈𝐊𝐓𝐎𝐊", title: "", id: `.enable antiTiktok`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝚃𝚒𝚔𝚝𝚘𝚔.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄", title: "", id: `.enable antiYoutube`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝚈𝚘𝚞𝚝𝚞𝚋𝚎.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌", title: "", id: `.enable antiTelegram`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊", title: "", id: `.enable antiFacebook`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐓𝐖𝐈𝐓𝐓𝐄𝐑", title: "", id: `.enable antiTwitter`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝚃𝚠𝚒𝚝𝚝𝚎𝚛.` },
{ header: "𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐄𝐍 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌", title: "", id: `.enable antiInstagram`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚎𝚗 𝚎𝚗𝚕𝚊𝚌𝚎𝚜 𝚍𝚎 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖.` },
{ header: "𝐌𝐈𝐙𝐔𝐊𝐈 𝐁𝐎𝐓 𝐒𝐎𝐋𝐎 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄 𝐄𝐍 𝐂𝐇𝐀𝐓𝐒 𝐆𝐑𝐔𝐏𝐀𝐋𝐄𝐒", title: "", id: `.enable gconly`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝 𝚜𝚘𝚕𝚘 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚎 𝚎𝚗 𝚌𝚑𝚊𝚝𝚜 𝚐𝚛𝚞𝚙𝚊𝚕𝚎𝚜.` },
{ header: "𝐌𝐈𝐙𝐔𝐊𝐈 𝐁𝐎𝐓 𝐒𝐎𝐋𝐎 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄 𝐄𝐍 𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒", title: "", id: `.enabñe pconly`, description: `𝙰𝚌𝚝𝚒𝚟𝚊𝚛 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝 𝚜𝚘𝚕𝚘 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚎 𝚎𝚗 𝚌𝚑𝚊𝚝𝚜 𝚙𝚛𝚒𝚟𝚊𝚍𝚘𝚜.` }
]})
await conn.sendList(m.chat, '> 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐏𝐀𝐑𝐀 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐀𝐋𝐆𝐔𝐍𝐀𝐒 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 𝐃𝐄 𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓✅', null, `𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐌𝐈𝐙𝐔𝐊𝐈 𝐁𝐎𝐓`, listSections, { mentions: [m.sender]}, {quoted: m})
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['enable3']
handler.tags = ['enable3']
handler.command = ['enable3', 'enable3', 'enable3'] 
handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
