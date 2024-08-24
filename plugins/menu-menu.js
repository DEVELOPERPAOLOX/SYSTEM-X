// C O D I G O   C R E A D O   P O R   P A O L O   X
import { promises as fsPromises } from 'fs';
import { join as joinPath } from 'path';
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';

const categories = {
    main: 'INFO',
    game: 'JUEGOS',
    serbot: 'SUB BOTS',
    rpg: 'ECONOMÍA',
    rg: 'REGISTRO',
    downloader: 'DESCARGAS',
    marker: 'LOGO - MAKER',
    nable: 'ACTIVADORES',
    group: 'GRUPOS',
    search: 'BUSCADOR',
    img: 'IMÁGENES',
    tools: 'HERRAMIENTAS',
    fun: 'DIVERCIÓN',
    audio: 'EFECTO DE AUDIOS',
    sticker: 'STICKERS',
    nsfw: 'NSFW',
    owner: 'CREADOR',
    advanced: 'AVANZADO'
};

const defaultMenuConfig = {
    before: ``.trimStart(),
    header: '',
    body: '',
    footer: '',
    after: ''
};

const handleMenu = async (message, { conn, usedPrefix, __dirname }) => {
    try {
        // Load package info
        const packageInfo = JSON.parse(await fsPromises.readFile(joinPath(__dirname, '../package.json')).catch(() => ({}))) || {};
        const { exp: userExp, star: userStar, level: userLevel } = global.db.data.users[message.sender];
        const { min: minExp, xp: xpRangeMax, max: maxExp } = xpRange(userLevel, global.multiplier);

        // Get current user and date info
        const userName = await conn.getName(message.sender);
        const currentDate = new Date(new Date() + 3600000); // Adjust for timezone
        const language = 'es';
        const dayNames = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'];
        const currentDayName = dayNames[Math.floor(currentDate / 84600000) % 5];
        const weekdayName = currentDate.toLocaleDateString(language, { weekday: 'long' });
        const fullDate = currentDate.toLocaleDateString(language, { day: 'numeric', month: 'long', year: 'numeric' });
        const islamicDate = Intl.DateTimeFormat(`${language}-TN-u-ca-islamic`, { day: 'numeric', month: 'long', year: 'numeric' }).format(currentDate);
        const timeString = currentDate.toLocaleTimeString(language, { hour: 'numeric', minute: 'numeric', second: 'numeric' });

        // Calculate uptime
        const uptimeMillis = process.uptime() * 1000;
        let processUptimeMillis;
        if (process.send) {
            process.send('uptime');
            processUptimeMillis = await new Promise(resolve => {
                process.once('message', resolve);
                setTimeout(resolve, 1000);
            }) * 1000;
        }
        const formattedProcessUptime = formatDuration(processUptimeMillis);
        const formattedUptime = formatDuration(uptimeMillis);

        // Get user and plugin data
        const totalUsers = Object.keys(global.db.data.users).length;
        const registeredUsers = Object.values(global.db.data.users).filter(user => user.registered).length;
        const activePlugins = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => ({
            help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
            tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
            prefix: 'customPrefix' in plugin,
            star: plugin.star,
            premium: plugin.premium,
            enabled: !plugin.disabled,
        }));

        // Update category names if necessary
        for (const plugin of activePlugins) {
            if (plugin.tags) {
                for (const tag of plugin.tags) {
                    if (!(tag in categories) && tag) {
                        categories[tag] = tag;
                    }
                }
            }
        }

        // Generate menu
        conn.menu = conn.menu || {};
        const menuConfig = {
            before: conn.menu.before || defaultMenuConfig.before,
            header: conn.menu.header || defaultMenuConfig.header,
            body: conn.menu.body || defaultMenuConfig.body,
            footer: conn.menu.footer || defaultMenuConfig.footer,
            after: conn.menu.after || (conn.user.jid === global.conn.user.jid ? '' : '') + defaultMenuConfig.after
        };

        const menuContent = [
            menuConfig.before,
            ...Object.keys(categories).map(category => {
                const categoryHeader = menuConfig.header.replace(/%category/g, categories[category]);
                const categoryBody = [
                    ...activePlugins
                        .filter(plugin => plugin.tags && plugin.tags.includes(category) && plugin.help)
                        .map(plugin => plugin.help.map(help => menuConfig.body
                            .replace(/%cmd/g, plugin.prefix ? help : '%p' + help)
                            .replace(/%isstar/g, plugin.star ? '˄' : '')
                            .replace(/%isPremium/g, plugin.premium ? '˄' : '')
                            .trim()
                        ).join('\n'))
                ].join('\n');
                return [categoryHeader, categoryBody, menuConfig.footer].join('\n');
            }),
            menuConfig.after
        ].join('\n');

        let formattedMenu = typeof conn.menu === 'string' ? conn.menu : typeof conn.menu === 'object' ? menuContent : '';

        // Replace placeholders in menu
        const replacements = {
            '%': '%',
            p: usedPrefix,
            uptime: formattedUptime,
            muptime: formattedProcessUptime,
            taguser: '@' + message.sender.split("@s.whatsapp.net")[0],
            wasp: '@0',
            me: await conn.getName(conn.user.jid),
            npmname: packageInfo.name,
            version: packageInfo.version,
            npmdesc: packageInfo.description,
            npmmain: packageInfo.main,
            author: packageInfo.author.name,
            license: packageInfo.license,
            exp: userExp - minExp,
            maxexp: xpRangeMax,
            totalexp: userExp,
            xp4levelup: maxExp - userExp,
            github: packageInfo.homepage ? packageInfo.homepage.url || packageInfo.homepage : '[unknown github url]',
            level: userLevel,
            star: userStar,
            name: userName,
            weton: currentDayName,
            week: weekdayName,
            date: fullDate,
            dateIslamic: islamicDate,
            time: timeString,
            totalreg: totalUsers,
            rtotalreg: registeredUsers,
            readmore: String.fromCharCode(8206).repeat(4001)
        };

        formattedMenu = formattedMenu.replace(new RegExp(`%(${Object.keys(replacements).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, key) => '' + replacements[key]);

        // Send message
        const videoUrl = 'https://drive.google.com/uc?export=download&id=1QaxZig8Bk0LrKwU76d66PujcVpIakoai';
        const listItems = [
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

        await conn.sendMessage(message.chat, { video: { url: videoUrl }, caption: formattedMenu.trim(), mentions: [message.sender] });
        await conn.sendList(message.chat, '', null, `𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗`, listItems, { mentions: [message.sender] });
    } catch (error) {
        console.error('Error en el handler:', error);
        conn.reply(message.chat, '❎ Lo sentimos, el menú tiene un error.', message);
    }
};

handleMenu.help = ['menu'];
handleMenu.tags = ['main'];
handleMenu.command = ['menu', 'help', 'menú'];
handleMenu.register = true;

export default handleMenu;

const formatDuration = (duration) => {
    const hours = isNaN(duration) ? '--' : Math.floor(duration / 3600000);
    const minutes = isNaN(duration) ? '--' : Math.floor(duration / 60000) % 60;
    const seconds = isNaN(duration) ? '--' : Math.floor(duration / 1000) % 60;
    return [hours, minutes, seconds].map(unit => unit.toString().padStart(2, '0')).join(':');
};
