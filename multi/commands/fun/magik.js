const Discord = require('discord.js')

module.exports = {
  name: "magik",
  category: "fun",
  description: "Magik command.",
  run: async(bot, message, args) => {
  let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({dynamic: true, format: 'png', size: 1024}) : message.author.avatarURL({dynamic: true, format: 'png', size: 1024});
  const deepembed = new Discord.MessageEmbed()
  .setTitle('Magik')
  .setURL(`https://api.alexflipnote.dev/filter/magik?image=` + avatar)
  .setImage(`https://api.alexflipnote.dev/filter/magik?image=` + avatar)
  .setColor('RANDOM')
  message.channel.send(deepembed)
  }
}
