// C O D I G O   C R E A D O   P O R   P A O L O   X
import { promises as fs } from 'fs';
import { join as pathJoin } from 'path';
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';

// Diccionario de categorías
let categories = {
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
  'advanced': 'AVANZADO'
};

// Estructura básica del menú
const defaultMenu = {
  before: ``.trimStart(),
  header: '',
  body: '',
  footer: '',
  after: ''
};

// Función principal para generar y enviar el menú
let generateMenu = async (message, { conn, usedPrefix, __dirname }) => {
  try {
    // Leer datos del archivo package.json
    let packageData = JSON.parse(await fs.readFile(pathJoin(__dirname, '../package.json')).catch(() => ({}))) || {};
    
    // Obtener datos del usuario
    let { exp, star, level } = global.db.data.users[message.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);
    
    // Obtener nombre del usuario
    let userName = await conn.getName(message.sender);

    // Calcular tiempos y fechas
    let currentDate = new Date(new Date + 3600000);
    let locale = 'es';
    let dayName = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(currentDate / 84600000) % 5];
    let weekDay = currentDate.toLocaleDateString(locale, { weekday: 'long' });
    let fullDate = currentDate.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let islamicDate = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(currentDate);
    let time = currentDate.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' });

    // Obtener tiempos de actividad
    let uptime = process.uptime() * 1000;
    let processUptime;
    if (process.send) {
      process.send('uptime');
      processUptime = await new Promise(resolve => {
        process.once('message', resolve);
        setTimeout(resolve, 1000);
      }) * 1000;
    }

    // Formatear tiempos
    let formattedUptime = formatTime(processUptime);
    let formattedProcessUptime = formatTime(uptime);

    // Obtener información del sistema
    let totalUsers = Object.keys(global.db.data.users).length;
    let registeredUsers = Object.values(global.db.data.users).filter(user => user.registered).length;
    let enabledPlugins = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => ({
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      star: plugin.star,
      premium: plugin.premium,
      enabled: !plugin.disabled
    }));

    // Actualizar categorías
    for (let plugin of enabledPlugins) {
      if (plugin && 'tags' in plugin) {
        for (let tag of plugin.tags) {
          if (!(tag in categories) && tag) categories[tag] = tag;
        }
      }
    }

    // Crear el menú
    conn.menu = conn.menu || {};
    let menuBefore = conn.menu.before || defaultMenu.before;
    let menuHeader = conn.menu.header || defaultMenu.header;
    let menuBody = conn.menu.body || defaultMenu.body;
    let menuFooter = conn.menu.footer || defaultMenu.footer;
    let menuAfter = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after;
    
    let menuText = [
      menuBefore,
      ...Object.keys(categories).map(categoryKey => {
        return menuHeader.replace(/%category/g, categories[categoryKey]) + '\n' + 
        [
          ...enabledPlugins.filter(plugin => plugin.tags && plugin.tags.includes(categoryKey) && plugin.help).map(plugin => {
            return plugin.help.map(command => {
              return menuBody.replace(/%cmd/g, plugin.prefix ? command : '%p' + command)
                .replace(/%isstar/g, plugin.star ? '˄' : '')
                .replace(/%isPremium/g, plugin.premium ? '˄' : '')
                .trim();
            }).join('\n');
          }),
          menuFooter
        ].join('\n');
      }),
      menuAfter
    ].join('\n');

    let menuTextFormatted = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? menuText : '';
    let replacements = {
      '%': '%',
      p: usedPrefix,
      uptime: formattedProcessUptime,
      muptime: formattedUptime,
      taguser: '@' + message.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: await conn.getName(conn.user.jid),
      npmname: packageData.name,
      version: packageData.version,
      npmdesc: packageData.description,
      npmmain: packageData.main,
      author: packageData.author.name,
      license: packageData.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: packageData.homepage ? packageData.homepage.url || packageData.homepage : '[unknown github url]',
      level: level,
      star: star,
      name: userName,
      weton: dayName,
      week: weekDay,
      date: fullDate,
      dateIslamic: islamicDate,
      time: time,
      totalreg: totalUsers,
      rtotalreg: registeredUsers,
      readmore: readMorePlaceholder
    };

    menuTextFormatted = menuTextFormatted.replace(new RegExp(`%(${Object.keys(replacements).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, key) => '' + replacements[key]);

    // Enviar mensaje y lista de opciones
    let videoUrl = 'https://drive.google.com/uc?export=download&id=1QaxZig8Bk0LrKwU76d66PujcVpIakoai';
    let listMessage = [
      {
        title: '',
        rows: [
          { header: "📚ＭＥＮＵ ＣＯＭＰＬＥＴＯ", title: "", id: `.allmenu`, description: `𝙼𝚞𝚎𝚜𝚝𝚛𝚎𝚖𝚎 𝚝𝚘𝚍𝑜𝚜 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
          { header: "SudBot", title: "", id: `.serbot --code`, description: `𝚀𝚞𝚒𝚎𝚛𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛𝚜𝚎 𝚎𝚗 𝚂𝚞𝚍𝙱𝚘𝚝 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
          { header: "🚀ＶＥＬＯＣＩＤＡＤ", title: "", id: `.ping`, description: `𝚅𝚎𝚕𝚘𝚌𝚒𝚍𝚨𝚍 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
          { header: "⏰ＵＰＴＩＭＥ", title: "", id: `.estado`, description: `𝚃𝚒𝚎𝚖𝚙𝚘 𝚊𝚌𝚝𝚒𝚟𝚘 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
          { header: "🌐ＩＤＩＯＭＡ", title: "", id: `.idioma`, description: `𝙴𝚕𝚎𝚐𝚎𝚗 𝚒𝚍𝚒𝚘𝚖𝚎\n` },
          { header: "✅ＳＴＡＦＦ ＭＩＺＵＫＩ | ＢＯＴ", title: "", id: `.creador`, description: `𝚂𝚝𝚊𝚏𝚏 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝` }
        ]
      }
    ];

    await conn.sendMessage(message.chat, { video: { url: videoUrl }, caption: menuTextFormatted.trim(), mentions: [message.sender] });
    await conn.sendList(message.chat, '', null, `𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗`, listMessage, { mentions: [message.sender] });

  } catch (error) {
    console.error('Error en el handler:', error);
    conn.reply(message.chat, '❎ Lo sentimos, el menú tiene un error.', message);
  }
};

// Configuración del comando
generateMenu.help = ['menu'];
generateMenu.tags = ['main'];
generateMenu.command = ['menu', 'help', 'menú'];
generateMenu.register = true;

export default generateMenu;

// Función para formatear tiempo en formato HH:MM:SS
const readMorePlaceholder = String.fromCharCode(8206).repeat(4001);

function formatTime(ms) {
  let hours = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let minutes = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let seconds = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [hours, minutes, seconds].map(unit => unit.toString().padStart(2, '0')).join(':');
}
