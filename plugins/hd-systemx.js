import FormData from 'form-data';
import axios from 'axios';
import Jimp from 'jimp'; // Verifica si realmente necesitas esta importación

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    
    if (!mime) {
      return m.reply(`🤍 Envie una imagen o responda a la imagen utilizando el comando: ${usedPrefix + command}`);
    }
    
    if (!/image\/(jpe?g|png)/.test(mime)) {
      return m.reply(`🤍 El formato del archivo (${mime}) no es compatible, envía o responde a una imagen`);
    }

    conn.reply(m.chat, '🤍 Mejorando la calidad de la imagen....', m, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          title: packname,
          body: wm,
          previewType: 0,
          thumbnail: icons,
          sourceUrl: channel
        }
      }
    });

    let img = await q.download?.();
    if (!img) {
      return m.reply("🤍 No se pudo descargar la imagen");
    }

    let pr = await remini(img, "enhance");
    if (pr) {
      conn.sendMessage(m.chat, { image: pr }, { quoted: fkontak });
    } else {
      return m.reply("🤍 No se pudo procesar la imagen");
    }
  } catch (error) {
    console.error("Error en el handler:", error);
    return m.reply("🤍 Ocurrió un error: " + error.message);
  }
};

handler.help = ["remini", "hd", "enhance"];
handler.tags = ["fun"];
handler.command = ["remini", "hd", "enhance"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (!availableOperations.includes(operation)) operation = availableOperations[0];

    const baseUrl = `https://inferenceengine.vyro.ai/${operation}.vyro`;

    const formData = new FormData();
    formData.append("image", imageData, { filename: "enhance_image_body.jpg", contentType: "image/jpeg" });
    formData.append("model_version", 1);

    try {
      const response = await axios.post(baseUrl, formData, {
        headers: {
          ...formData.getHeaders(),
          "User-Agent": "okhttp/4.9.3",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
        responseType: 'arraybuffer'
      });

      if (response.status === 200) {
        resolve(Buffer.from(response.data));
      } else {
        reject(new Error(`API Error: ${response.status} ${response.statusText}`));
      }
    } catch (error) {
      console.error("Error en remini:", error);
      reject(new Error(`Error al enviar la solicitud a la API: ${error.message}`));
    }
  });
}
