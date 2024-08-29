import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (message, { connection, parameters, command, prefix }) => {
  if (!parameters[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${prefix + command} con mi prima`;
  try {
    const results = await fetchPornhubData(parameters[0]);
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
      responseText = '*Sin resultados*';
    }
    message.reply(responseText);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
  }
};
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
    console.error('Error durante la búsqueda:', error);
    return { items: [] };
  }
}
