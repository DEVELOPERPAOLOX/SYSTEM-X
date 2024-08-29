// Ｃ Ｏ Ｄ Ｉ Ｇ Ｏ   Ａ Ｄ Ａ Ｐ Ｔ Ａ Ｄ Ｏ   Ｐ Ｏ Ｒ   Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ   Ｐ Ａ Ｏ Ｌ Ｏ   Ｘ

import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐩𝐨𝐫𝐧𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡 + 𝐭𝐢𝐭𝐮𝐥𝐨`;
try {
let searchResults = await searchPornhub(args[0]);
let teks = searchResults.result.map((v, i) => 
`┏・\`ＰＯＲＮＨＵＢ | ＳＹＳＴＥＭ Ｘ\`
┣・𝐓𝐈𝐓𝐔𝐋𝐎:
┣・${v.title}
┣・𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:
┣・${v.duration}
┣・𝐔𝐑𝐋:
┗・${v.url}\n`).join('\n\n');
if (searchResults.result.length === 0) {
teks = '❎𝐍𝐨 𝐞𝐱𝐢𝐬𝐭𝐞𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐭𝐢𝐭𝐮𝐥𝐨. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐨𝐭𝐫𝐨 𝐭𝐢𝐭𝐮𝐥𝐨.';
}
m.reply(teks);
} catch (e) {
}};
handler.command = /^(phsearch|pornhubsearch)$/i;
export default handler;
async function searchPornhub(search) {
  try {
    const response = await axios.get(`https://www.pornhub.com/video/search?search=${search}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const result = [];
    $('ul#videoSearchResult > li.pcVideoListItem').each(function(a, b) {
      const _title = $(b).find('a').attr('title');
      const _duration = $(b).find('var.duration').text().trim();
      const _views = $(b).find('var.views').text().trim();
      const _url = 'https://www.pornhub.com' + $(b).find('a').attr('href');
      const hasil = { title: _title, duration: _duration, views: _views, url: _url };
      result.push(hasil);
    });
    
    return { result };
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐞𝐧 𝐥𝐚 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐭𝐢𝐭𝐮𝐥𝐨. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.', error);
    return { result: [] };
  }
}
