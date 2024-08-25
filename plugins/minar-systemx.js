let handler = async (m, { conn, isPrems }) => {
    // Configuración del mensaje de contacto
    const contactInfo = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

    // Datos del usuario
    let user = global.db.data.users[m.sender]
    let isPremium = user.premium

    // Mensaje de minería
    let miningMessage = pickRandom([
        '🚀 ¡Impresionante! Has logrado minar con éxito y obtienes',
        '✨ ¡Fantástico! Has extraído con éxito y ahora tienes',
        '🌟 ¡Enhorabuena, minero(a)! Has conseguido',
        '🎉 ¡Gran trabajo! Tus esfuerzos mineros han sido recompensados con',
        '💎 ¡Excelente hallazgo! Has minado y ahora cuentas con',
        '🤑 ¡Increíble! Has aumentado tus recursos con',
        '🏆 ¡Felicidades! La minería te ha dado',
        '🎊 ¡Súper! Gracias a tu habilidad minera obtienes',
        '💰 ¡Estás en racha! Has minado y ganado',
        '🔥 ¡Gran minería! Tu recompensa ahora es',
        '🚀 ¡Fantástico hallazgo minero! Has recibido',
        '🎯 ¡Objetivo alcanzado! Has minado y recibido',
        '🎉 ¡Felicidades! La minería te premia con',
        '🔍 ¡Descubrimiento exitoso! Ahora obtienes',
        '💥 ¡Qué éxito! Tus esfuerzos mineros te han dado'
    ])

    // Datos de recompensas
    let baseReward = pickRandom([1, 2, 3, 4, 5]) * 1
    let premiumReward = pickRandom([3, 4, 6, 7, 9, 11]) * 1

    let coalReward = pickRandom([4, 5, 8, 10, 12]) * 1
    let coalPremiumReward = pickRandom([9, 14, 15, 17, 20]) * 1

    let goldReward = pickRandom([1, 0, 2, 3, 0, 0, 0]) * 1
    let goldPremiumReward = pickRandom([2, 4, 5, 1, 1, 7, 8]) * 1

    // Recompensas finales
    const rewards = {
        string: isPremium ? premiumReward : baseReward,
        coal: isPremium ? coalPremiumReward : coalReward,
        emas: isPremium ? goldPremiumReward : goldReward
    }

    // Experiencia
    let experience = pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430]) * 1
    let premiumExperience = pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000]) * 1

    // Tiempo para el próximo minado
    let cooldown = 600000 // 10 minutos
    let nextAvailableMiningTime = user.lastmiming + cooldown
    if (new Date - user.lastmiming < cooldown) {
        return await conn.reply(m.chat, `Acabas de minar hace poco, por favor intenta nuevamente en ${msToTime(nextAvailableMiningTime - new Date())} ${global.rpgshopp.emoticon('exp')}`, m, {
            contextInfo: {
                'forwardingScore': 0,
                'isForwarded': false,
                externalAdReply: {
                    showAdAttribution: false,
                    title: wm,
                    body: `MINAR | SISTEMA X`,
                    mediaType: 3,
                    sourceUrl: global.md,
                    thumbnail: imagen1
                }
            }
        })
    }

    // Actualización de experiencia y recompensas
    user.exp += isPremium ? premiumExperience : experience
    let rewardMessage = ''
    for (let item of Object.keys(rewards)) {
        if (!(item in user)) continue
        user[item] += rewards[item]
        rewardMessage += `+${rewards[item]} ${global.rpgshop.emoticon(item)}\n`
    }

    // Enviar respuesta
    await conn.reply(m.chat, `*\`MINAR | SISTEMA X\`*\n${miningMessage}\n${experience} XP`, m, {
        contextInfo: {
            'forwardingScore': 200,
            'isForwarded': false,
            externalAdReply: {
                showAdAttribution: false,
                title: wm,
                body: `MINAR | SISTEMA X`,
                mediaType: 3,
                sourceUrl: global.md,
                thumbnail: imagen1
            }
        }
    })
    user.lastmiming = new Date() * 1
}

handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine', 'minarxp', 'minarexp', 'minarexperiencia']
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " m y " + seconds + " s "
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
