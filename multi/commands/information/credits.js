const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "credits",
  category: "information",
  description: "Credit command.",
  run: async(bot, message, args) => {
   const botinf = new Discord.MessageEmbed()
   .setAuthor('Multi', bot.user.displayAvatarURL({dynamic: true}))
   .addField('Administrátor', `<@!273813194861051907>`)
   .addField('Developeři', `<@!312651352494964736> <@!556478969755467778>`)
   .addField(`Senior Moderátoři`, `N/A`)
   .addField(`Moderátoři`, `N/A`)
   .addField('Testeři', `N/A`)
   .addField('Překladatelé', 'N/A')
   .setColor('ORANGE')
   message.channel.send(botinf)
  }
}
