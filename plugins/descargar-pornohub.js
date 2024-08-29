// Adaptación realizada por [TuNombre]

import cheerio from 'cheerio';
import axios from 'axios';

const manejarBusqueda = async (mensaje, { conexion, argumentos, comando, prefijo }) => {
  if (!argumentos[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${prefijo + comando} ejemplo de búsqueda`;
  
  try {
    const resultados = await obtenerDatos(argumentos[0]);
    let respuesta = resultados.items.map((item) => 
      `
• *Título:* ${item.titulo}
• *Duración:* ${item.duracion}
• *Vistas:* ${item.vistas}
• *Enlace:* ${item.enlace}
---------------------------------------------------\n`).join('\n\n');
    
    if (resultados.items.length === 0) {
      respuesta = '*No se encontraron resultados*';
    }
    
    mensaje.reply(respuesta);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
  }
};

manejarBusqueda.comando = /^(buscarContenido|contenidoBusqueda)$/i;
export default manejarBusqueda;

async function obtenerDatos(query) {
  try {
    const respuesta = await axios.get(`https://www.pornhub.com/video/search?search=${query}`);
    const html = respuesta.data;
    const $ = cheerio.load(html);
    const items = [];
    
    $('ul#videoSearchResult > li.pcVideoListItem').each(function() {
      const titulo = $(this).find('a').attr('title');
      const duracion = $(this).find('var.duration').text().trim();
      const vistas = $(this).find('var.views').text().trim();
      const enlace = 'https://www.pornhub.com' + $(this).find('a').attr('href');
      
      items.push({ titulo, duracion, vistas, enlace });
    });
    
    return { items };
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return { items: [] };
  }
}
