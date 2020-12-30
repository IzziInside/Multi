const db = require('quick.db');
const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "setage",
  category: "economy",
  description: "setage command.",
  run: async(bot, message, args) => {
   if(!args[0]) {
     const argserror = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje číslo: \`\`${config.PREFIX}setage [číslo]\`\`**`)
     .setColor('RED')
     return message.channel.send(argserror)
   }
   if(isNaN(args[0])) {
    const nanerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Pro tento příkaz musíš zadat číslo, ne písmeno!**')
    .setColor('RED')
    return message.channel.send(nanerror)
   }
   if(args[0] > 100) {
     const numbererr = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription('<:crossx:771020834718351370> **Maximální věk je 100 let, zkus zadat nižší věk.**')
     .setColor('RED')
     return message.channel.send(numbererr)
   }
   db.set(`age_${message.author.id}`, args[0])
   const age = new Discord.MessageEmbed()
   .setDescription(`<:check:771020834876686346> **Věk je úspěšně nastavený na: ${args[0]}**`)
   .setColor('GREEN')
   message.channel.send(age)
 }
}
