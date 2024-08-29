import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (message, { connection, parameters, command, prefix }) => {
  if (!Array.isArray(parameters) || parameters.length === 0) {
    throw `👋🏻𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!\n🚀𝐕𝐮𝐞𝐥𝐯𝐞 𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐞𝐫𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨.\n✅𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix}pornhubsearch + 𝐭𝐢𝐭𝐮𝐥𝐨`;
  }

  try {
    const results = await fetchPornhubData(parameters.join(' ')); // Unir los parámetros para permitir búsquedas con múltiples palabras
    let responseText = results.items.map(item => 
      `┏・\`ＰＯＲＮＨＵＢ | ＳＹＳＴＥＭ Ｘ\`
┣・𝐓𝐈𝐓𝐔𝐋𝐎:
┣・${item.title}
┣・𝐕𝐈𝐄𝐖𝐒:
┣・${item.views}
┣・𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:
┣・${item.duration}
┣・𝐔𝐑𝐋:
┗・${item.url}`).join('\n\n');

    if (results.items.length === 0) {
      responseText = '❎𝐍𝐨 𝐞𝐱𝐢𝐬𝐭𝐞𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐭𝐢𝐭𝐮𝐥𝐨. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐨𝐭𝐫𝐨 𝐭𝐢𝐭𝐮𝐥𝐨.';
    }

    message.reply(responseText);
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐞𝐧 𝐥𝐚 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐭𝐢𝐭𝐮𝐥𝐨. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.', error);
  }
};

// Ajusta el regex para que coincida con ambos comandos
handler.command = /^(phsearch|pornhubsearch)$/i;
export default handler;

async function fetchPornhubData(query) {
  try {
    const { data } = await axios.get(`https://www.pornhub.com/video/search?search=${query}`);
    const $ = cheerio.load(data);
    const items = [];
    $('ul#videoSearchResult > li.pcVideoListItem').each((index, element) => {
      const title = $(element).find('a').attr('title');
      const duration = $(element).find('var.duration').text().trim();
      const views = $(element).find('var.views').text().trim();
      const url = 'https://www.pornhub.com' + $(element).find('a').attr('href');
      items.push({ title, duration, views, url });
    });
    return { items };
  } catch (error) {
    console.error('❎𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐞𝐧 𝐥𝐚 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐭𝐢𝐭𝐮𝐥𝐨. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.', error);
    return { items: [] };
  }
}
