// Ｄ Ｅ Ｖ Ｅ Ｌ Ｏ Ｐ Ｅ Ｒ    Ｐ Ａ Ｏ Ｌ Ｏ    Ｘ

function contactHandler(message) {
  const ownersList = global.owner.filter(([id, isCreator]) => id && isCreator);
  const formattedContacts = ownersList.map(([id, name]) => [id, name]);

  this.sendContact(message.chat, formattedContacts, message);
}

contactHandler.help = ['owner'];
contactHandler.tags = ['main'];
contactHandler.command = ['owner', 'creator', 'creador', 'dueño'];

export default contactHandler;
