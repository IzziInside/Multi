const Discord = require('discord.js')

module.exports = {
  name: "avatar",
  category: "information",
  description: "Sends user avatar into the server.",
  run: async(bot, message, args) => {
  let member = message.mentions.users.first() || message.author;
  const avatar = new Discord.MessageEmbed()
  .setTitle(`${member.tag}`)
  .setURL(member.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
  .setImage(member.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
  .setColor('RANDOM')
  message.channel.send(avatar)
  }
}
