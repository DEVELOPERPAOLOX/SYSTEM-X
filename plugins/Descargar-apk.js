import { search, download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) {
    throw `*Formato incorrecto*\nEjemplo:\n${usedPrefix + command} Pokemon Go`;
  }
  
  try {
    // Realiza la búsqueda
    const searchResult = await search(text);
    if (!searchResult.length) {
      return await conn.sendMessage(m.chat, { text: '*No se encontraron resultados.*' }, { quoted: m });
    }
    
    // Obtiene los datos de descarga
    const data = await download(searchResult[0].id);
    
    // Verifica el tamaño del archivo
    if (data.size.includes('GB') || parseFloat(data.size.replace(' MB', '')) > 300) {
      return await conn.sendMessage(m.chat, { text: '*El archivo es demasiado pesado por lo que no se enviará.*' }, { quoted: m });
    }
    
    // Envía el mensaje con el archivo APK
    await conn.sendMessage(m.chat, {
      document: { url: data.dllink },
      mimetype: 'application/vnd.android.package-archive',
      fileName: data.name + '.apk',
      caption: null
    }, { quoted: m });
    
  } catch (error) {
    console.error(error);  // Imprime el error en la consola para depuración
    await conn.sendMessage(m.chat, { text: `*Hubo un error al procesar la solicitud: ${error.message}*` }, { quoted: m });
  }
};

handler.command = /^(apkmod|modapk|dapk2|aptoide|apk)$/i;
handler.register = true;
handler.limit = 1;

export default handler;
