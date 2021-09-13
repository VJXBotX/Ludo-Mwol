const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "PicsArt_08-15-03.05.52.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My Creator Is JaiN VJ*
*Creator number : wa.me/916282809372?text=Hi%20JaiN%20VJ.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/VJXBotX/Ludo-Mwol*
*Audio commads :   https://github.com/VJXBotX/Ludo-Mwol/tree/master/uploads*
*Sticker commads : https://github.com/VJXBotX/Ludo-Mwol/tree/master/uploads*
`}) 

}));
