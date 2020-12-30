const db = require('quick.db');
const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "setwelcome",
  category: "utility",
  description: "setwelcome command.",
  run: async(bot, message, args) => {
  if(!message.member.hasPermission(['ADMINISTRATOR'])) {
    const banerr = new Discord.MessageEmbed()
    .setTitle("Stala se chyba!")
    .setDescription("<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**")
    .setColor("RED");
    return message.channel.send(banerr);
   }
   if(!args[0]) {
     const errorwelcome = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription(`**<:crossx:771020834718351370> Tento příkaz potřebuje argument aby jsi mohl nastavit welcome: \`\`channel [${config.PREFIX}setwelcome channel #kanál]\`\`\n\n⚠ Pokud chcete vymazat welcome napište: \`\`${config.PREFIX}setwelcome delete [#kanál]\`\`**`)
     .setColor('RED')
     return message.channel.send(errorwelcome)
   }
   if(args[0] === 'channel') {
   let channel = message.mentions.channels.first()
   if(!channel) {
       const channelerror = new Discord.MessageEmbed()
       .setTitle('Stala se chyba!')
       .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš označit kanál, aby argument fungoval: \`\`${config.PREFIX}setwelcome channel [#kanál]\`\`\n\n⚠ Pokud chcete vymazat welcome napište: \`\`${config.PREFIX}setwelcome delete [#kanál]\`\`**`)
       .setColor('RED')
       return message.channel.send(channelerror)
   }
   db.set(`welcome_${message.guild.id}`, channel.id)
   const welcomechannel = new Discord.MessageEmbed()
   .setDescription(`<:check:771020834876686346> **Welcome byl úspěšně nastaven v kanále: ${channel}**`)
   .setColor('GREEN')
   message.channel.send(welcomechannel)
  }
  if(args[0] === 'delete' || args[0] === 'remove') {
    let channel = message.mentions.channels.first()
    if(!channel) {
      const channelerror = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš označit kanál, aby argument fungoval:  \`\`${config.PREFIX}setwelcome delete [#kanál]\`\`**`)
      .setColor('RED')
      return message.channel.send(channelerror)
    }
    db.delete(`welcome_${message.guild.id}`, channel.id)
    const welcomechannel = new Discord.MessageEmbed()
    .setDescription(`<:check:771020834876686346> **Welcome byl úspěšně smazán v kanále: ${channel}**`)
    .setColor('GREEN')
    message.channel.send(welcomechannel)
    }
  }
}
