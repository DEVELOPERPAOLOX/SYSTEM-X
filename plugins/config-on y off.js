import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (message, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => {
    // Configuración de contacto para mensajes
    let contactInfo = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Hello"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${message.sender.split('@')[0]}:${message.sender.split('@')[0]}\nitem1.X-ABLabel:Phone\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    let chatData = global.db.data.chats[message.chat];
    let userData = global.db.data.users[message.sender];
    let botSettings = global.db.data.settings[conn.user.jid] || {};
    let userJid = `${message.sender.split("@")[0]}@s.whatsapp.net`;

    // Generación de títulos, nombres y descripciones
    let titles = [
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaOw() + ' ' + `${botSettings.restrict ? '✅' : '❌'}`,
        lenguajeGB.smsParaOw() + ' ' + `${botSettings.antiCall ? '✅' : '❌'}`,
        lenguajeGB.smsParaOw() + ' ' + `${botSettings.antiSpam ? '✅' : '❌'}`,
        lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`,
        lenguajeGB.smsParaOw() + ' ' + `${botSettings.temporal ? '✅' : '❌'}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.stickers ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.autosticker ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.audios ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.modohorny ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.antiver ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdYOw() + ' ' + `${message.isGroup ? chatData.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaAdmins() + ' ' + `${message.isGroup ? chatData.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,
        lenguajeGB.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,
        lenguajeGB.smsParaOw() + ' ' + `${global.opts['gconly'] ? '✅' : '❌'}`,
    ];

    let names = [
        lenguajeGB.smsWel1(), lenguajeGB.smsDete1(), lenguajeGB.smsANivel1(), lenguajeGB.smsRestri1(), lenguajeGB.smsLlamar1(),
        lenguajeGB.smsAntiSp1(), lenguajeGB.smsModP1(), lenguajeGB.smsModAd1(), lenguajeGB.smsLect1(), lenguajeGB.smsTempo1(),
        lenguajeGB.smsStik1(), lenguajeGB.smsStickA1(), lenguajeGB.smsReacc1(), lenguajeGB.smsAudi1(), lenguajeGB.smsModHor1(),
        lenguajeGB.smsAntitoc1(), lenguajeGB.smsModOb1(), lenguajeGB.smsAntiEli1(), lenguajeGB.smsAntiInt1(), lenguajeGB.smsAntiE1(),
        lenguajeGB.smsAntiEE1(), lenguajeGB.smsAntiTT1(), lenguajeGB.smsAntiYT1(), lenguajeGB.smsAntiTEL1(), lenguajeGB.smsAntiFB1(),
        lenguajeGB.smsAntiIG1(), lenguajeGB.smsAntiTW1(), lenguajeGB.smsSOLOP1(), lenguajeGB.smsSOLOG1()
    ];

    let descriptions = [
        lenguajeGB.smsWel2(), lenguajeGB.smsDete2(), lenguajeGB.smsANivel2(), lenguajeGB.smsRestri2(), lenguajeGB.smsLlamar2(),
        lenguajeGB.smsAntiSp2(), lenguajeGB.smsModP2(), lenguajeGB.smsModAd2(), lenguajeGB.smsLect2(), lenguajeGB.smsTempo2(),
        lenguajeGB.smsStik2(), lenguajeGB.smsStickA2(), lenguajeGB.smsReacc2(), lenguajeGB.smsAudi2(), lenguajeGB.smsModHor2(),
        lenguajeGB.smsAntitoc2(), lenguajeGB.smsModOb2(), lenguajeGB.smsAntiEli2(), lenguajeGB.smsAntiInt2(), lenguajeGB.smsAntiE2(),
        lenguajeGB.smsAntiEE2(), lenguajeGB.smsAntiTT2(), lenguajeGB.smsAntiYT2(), lenguajeGB.smsAntiTEL2(), lenguajeGB.smsAntiFB2(),
        lenguajeGB.smsAntiIG2(), lenguajeGB.smsAntiTW2(), lenguajeGB.smsSOLOP2(), lenguajeGB.smsSOLOG2()
    ];

    let commands = [
        "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal",
        "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake",
        "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook", "antinstagram", "antitwitter",
        "pconly", "gconly"
    ];

    let sections = Object.keys(titles).map(index => ({
        title: titles[index],
        rows: [{
            title: `${names[index]} : ${command} ${commands[index]}`,
            description: `${1 + index}. ${descriptions[index]}`,
            rowId: `${usedPrefix}${command} ${commands[index]}`,
        }]
    }));

    let userName = await conn.getName(message.sender);
    let responseMessage = {
        text: `${lenguajeGB.smsOpMenu()} ${userName} ${lenguajeGB.smsConfi1()} ${lenguajeGB.smsConfi2()}`,
        footer: `Usuario: ${userName}`,
        buttonText: lenguajeGB.smsBoton(),
        sections: sections,
        contact: contactInfo
    };

    await conn.sendMessage(message.chat, responseMessage, { quoted: message });
};

handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler;
