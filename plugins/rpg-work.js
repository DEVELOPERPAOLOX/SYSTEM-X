// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

const handler = async (m, { conn, isPrems }) => {
    const result = Math.floor(Math.random() * 5000);
    const nextAvailableTime = global.db.data.users[m.sender].lastwork + 600000;
    if (new Date() - global.db.data.users[m.sender].lastwork < 600000) {
        throw `❎ Ya completaste tu tarea recientemente, descansa y vuelve a intentarlo en ${msToTime(nextAvailableTime - new Date())}`;
    }

    await delay(1000);
    m.reply(`${pickRandom(global.workMessages)} *${result} XP*`);
    global.db.data.users[m.sender].lastwork = new Date().getTime();
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = ['work', 'trabajar'];
handler.fail = null;
handler.exp = 0;
handler.register = true;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100, 10);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return `${pad(hours)} h ${pad(minutes)} m ${pad(seconds)} s`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function pickRandom(array) {
    return array[Math.floor(array.length * Math.random())];
}

global.workMessages = [
    "Ayudaste a moderar el grupo de System X y recibiste",
    "Trabajaste todo el día en la empresa y obtuviste",
    "Ayudaste a alguien a cargar una caja en su auto y te recompensaron con",
    "Trabajaste horas adicionales en la oficina y obtuviste",
    "Te asignaron una tarea y gracias a tu gran desempeño recibiste",
    "A pesar de algunas complicaciones, recibiste",
    "Te dieron una tarea adicional y por eso recibiste",
];
