const db = require('quick.db');
const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "setbio",
  category: "economy",
  description: "Setbio command.",
  run: async(bot, message, args) => {
   const bioargs = args.join(" ")
   if(!bioargs) {
     const argserror = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje popisek: \`\`${config.PREFIX}setbio [popisek]\`\`**`)
     .setColor('RED')
     return message.channel.send(argserror)
   }
   db.set(`bio_${message.author.id}`, bioargs)
   const bio = new Discord.MessageEmbed()
   .setDescription(`<:check:771020834876686346> **Popisek je úspěšně nastavený na: ${bioargs}**`)
   .setColor('GREEN')
   message.channel.send(bio)
 }
}
