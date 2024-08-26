// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import FormData from "form-data";
import Jimp from "jimp";
const handler = async (m, {conn, usedPrefix, command}) => {
 try {    
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐡𝐝 + 𝐈𝐦𝐚𝐠𝐞𝐧`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `❎𝐄𝐥 𝐟𝐨𝐫𝐦𝐚𝐭𝐨 𝐝𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐧𝐨 𝐞𝐬 𝐜𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐥𝐞, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐥𝐨 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨 𝐜𝐨𝐧 𝐨𝐭𝐫𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧.`;
  m.reply("✅𝐂𝐨𝐧𝐯𝐢𝐫𝐭𝐢𝐞𝐧𝐝𝐨 𝐭𝐮 𝐢𝐦𝐚𝐠𝐞𝐧 𝐞𝐧 𝐇𝐃, 𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨.");
  let img = await q.download?.();
  let pr = await remini(img, "enhance");
  conn.sendMessage(m.chat, {image: pr}, {quoted: m});
 } catch {
  throw "👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐡𝐝 + 𝐈𝐦𝐚𝐠𝐞𝐧";
 }
};
handler.help = ["remini", "hd", "enhance"];
handler.tags = ["ai", "tools"];
handler.command = ["remini", "hd", "enhance"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    );
  });
}
