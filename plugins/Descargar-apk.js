import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) {
    throw `*Formato incorrecto*\nEjemplo:\n${usedPrefix + command} Pokemon Go`;
  }
  
  try {
    // Realiza la búsqueda en una fuente alternativa
    const searchUrl = `https://www.example.com/search?q=${encodeURIComponent(text)}`;
    const { data } = await axios.get(searchUrl);
    const $ = cheerio.load(data);
    
    // Encuentra el enlace de descarga (ajusta el selector según la estructura del sitio)
    const apkLink = $('a.apk-download-link').attr('href');
    if (!apkLink) {
      return await conn.sendMessage(m.chat, { text: '*No se encontraron resultados.*' }, { quoted: m });
    }
    
    // Obtén el nombre del archivo y el tamaño (ajusta según el sitio)
    const fileName = 'downloaded-app.apk';  // Establece un nombre predeterminado o extrae del sitio
    const fileSize = '100 MB';  // Obtén el tamaño del archivo (ajusta según el sitio)
    
    // Verifica el tamaño del archivo
    if (fileSize.includes('GB') || parseFloat(fileSize.replace(' MB', '')) > 300) {
      return await conn.sendMessage(m.chat, { text: '*El archivo es demasiado pesado por lo que no se enviará.*' }, { quoted: m });
    }
    
    // Envía el mensaje con el archivo APK
    await conn.sendMessage(m.chat, {
      document: { url: apkLink },
      mimetype: 'application/vnd.android.package-archive',
      fileName: fileName,
      caption: null
    }, { quoted: m });
    
  } catch (error) {
    console.error(error);  // Imprime el error en la consola para depuración
    let errorMessage = '*Hubo un error al procesar la solicitud.*';
    
    // Añade más detalles sobre el error si es posible
    if (error.message.includes('Cannot find package')) {
      errorMessage = '*Error: Paquete faltante o configuración incorrecta.*';
    }
    
    await conn.sendMessage(m.chat, { text: errorMessage }, { quoted: m });
  }
};

handler.command = /^(apkmod|modapk|dapk2|aptoide|apk)$/i;
handler.register = true;
handler.limit = 1;

export default handler;
