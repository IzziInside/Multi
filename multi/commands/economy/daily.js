const db = require('quick.db');
const Discord = require('discord.js');

let cooldown = new Set();

module.exports = {
  name: "daily",
  category: "economy",
  description: "Daily random money.",
  run: async(bot, message, args) => {
   if(cooldown.has(message.author.id)) {
    const timecool = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Tento příkaz má cooldown, vrať se až za 24 hodin pro svý peníze!**')
    .setColor('RED')
    message.channel.send(timecool)
  } else {
    var num = Math.floor(Math.random() * 50) + 20;
    db.add(`balance_${message.author.id}_${message.guild.id}`, num)
    let balance = db.fetch(`balance_${message.author.id}_${message.guild.id}`)
    const balanceembed = new Discord.MessageEmbed()
    .setTitle('Daily')
    .setDescription(`
<:check:771020834876686346> **Právě jsi obdržel peníze! Získal jsi ${num}$**`)
    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, format: 'png'})}`)
    .setColor('GREEN')
    message.channel.send(balanceembed);


    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, 86400000)
  }
 }
}
