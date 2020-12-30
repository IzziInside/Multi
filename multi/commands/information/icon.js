const Discord = require('discord.js');

module.exports = {
  name: "icon",
  category: "information",
  description: "Icon command.",
  run: async(bot, message, args) => {
  const icon = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name}`)
  .setImage(`${message.guild.iconURL()}`)
  .setURL(`${message.guild.iconURL()}`)
  .setColor('RANDOM')
  message.channel.send(icon)
  }
}
