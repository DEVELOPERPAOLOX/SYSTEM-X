// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

let handler = msg => msg;

// Manejo de eventos para actualizar el perfil
handler.all = async function (msg) {
  // Acceso a la configuración global
  let settings = global.db.data.settings[this.user.jid];

  // Calcular el tiempo de actividad
  let uptimeMillis = process.uptime() * 1000;
  let idleTimeMillis;

  // Verificar si se puede obtener el tiempo de inactividad
  if (process.send) {
    process.send('uptime');
    idleTimeMillis = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 2000);
    }) * 1000;
  }

  // Formatear el tiempo de actividad
  let formattedUptime = formatTime(uptimeMillis);

  // Crear el mensaje de estado del perfil
  let statusMessage = `🤖SYSTEM X ⣿ ✅ONLINE SERVER ⣿ ⏰ACTIVE FOR ${formattedUptime}`;

  // Actualizar el estado del perfil
  await this.updateProfileStatus(statusMessage).catch(() => {});

  // Actualizar la configuración de estado
  settings.status = Date.now();
};

export default handler;

// Función para formatear el tiempo en días, horas, minutos y segundos
function formatTime(milliseconds) {
  let days = isNaN(milliseconds) ? '--' : Math.floor(milliseconds / 86400000);
  let hours = isNaN(milliseconds) ? '--' : Math.floor(milliseconds / 3600000) % 24;
  let minutes = isNaN(milliseconds) ? '--' : Math.floor(milliseconds / 60000) % 60;
  let seconds = isNaN(milliseconds) ? '--' : Math.floor(milliseconds / 1000) % 60;

  return [days, ' » ', hours, ' ・ ', minutes, ' ・ ', seconds]
    .map(value => value.toString().padStart(2, '0'))
    .join('');
}
