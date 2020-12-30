const Discord = require('discord.js');
const db = require('quick.db');

var cooldown = new Set();

module.exports = {
  name: "rep",
  category: "economy",
  description: "Rep command.",
  run: async(bot, message, args) => {
  let member = message.mentions.users.first();
  if(!member) {
    const membererr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Aby si někomu mohl dát reputaci, musíš někoho označit!**')
    .setColor('RED')
    return message.channel.send(membererr);
  }
  if(member.bot) {
    const botmembererr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Nemůžeš dát reputaci botovi, označ uživatele!**')
    .setColor('RED')
    return message.channel.send(botmembererr);
  }
  if(message.mentions.users.first() == message.author.id) {
    const authorerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Nemůžeš dát reputaci sám sobě!**')
    .setColor('RED')
    return message.channel.send(authorerr);
  }
  if(cooldown.has(message.author.id)) {
     const cooldownerr = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription('<:crossx:771020834718351370> **Tento příkaz má cooldown za 24 hodin můžeš dát někomu další reputaci.**')
     .setColor('RED')
     message.channel.send(cooldownerr)
   } else {
   let reputation = db.fetch(`rep_${member.id}`)
   db.add(`rep_${member.id}`, 1)
   const repembed = new Discord.MessageEmbed()
   .setDescription(`<:check:771020834876686346> **Úspěšně si dal reputaci uživatelovi ${member.tag}**`)
   .setColor('GREEN')
   message.channel.send(repembed);
   cooldown.add(message.author.id)
  } setTimeout(() => {
      cooldown.delete(message.author.id)
  }, 86400000)
  }
}
