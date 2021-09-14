const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://images.app.goo.gl/FCsND9QwDga7WkDV8";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is JaiN VJ*
*Creator number : Wa.me///+916282809372
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/ameer-kallumthodi/pikachu*
*Audio commads :   https://github.com/VJXBotX/Ludo-Mwol/tree/master/uploads*
*Sticker commads : https://github.com/VJXBotX/Ludo-Mwol/tree/master/sticker*
`}) 

}));
