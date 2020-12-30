const Discord = require('discord.js')
const config = require("../../utils/fakty.json");

module.exports = {
  name: "fact",
  category: "fun",
  description: "Fact command.",
  run: async(bot, message, args) => {
  const facts = config[Math.floor(Math.random() * config.length)]
  const embedfact = new Discord.MessageEmbed()
  .setTitle('Fakt')
  .setDescription(facts)
  .setColor('RANDOM')
  .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(embedfact)
 }
}
