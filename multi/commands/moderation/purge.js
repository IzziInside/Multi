const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "purge",
  category: "moderation",
  description: "Purge command.",
  run: async(bot, message, args) => {
  if(!message.member.hasPermission(["MANAGE_MESSAGES"])) {
    const errperm = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**\n\n⚠ **Pro tento příkaz budeš potřebovat pravomoc: ``MANAGE_MESSAGES``**')
    .setColor('RED')
    return message.channel.send(errperm)
  }
  if(!args[0]) {
    const argserr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje číslo: \`\`${config.PREFIX}purge [1-100]\`\`**`)
    .setColor('RED')
    message.channel.send(argserr)
  }
  if(isNaN(args[0])) {
    const numerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš zadat číslo, ne písmeno!**`)
    .setColor('RED')
    message.channel.send(numerr)
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const messagedelete = new Discord.MessageEmbed()
    .setDescription(`<:check:771020834876686346> **Odstranilo se ${args[0]} zpráv!**`)
    .setColor('GREEN')
    message.channel.send(messagedelete)
    })
  }
}
