const Discord = require('discord.js');

module.exports = {
  name: "howhorny",
  category: "fun",
  description: "howhorny command.",
  run: async(bot, message, args) => {
  let member = message.mentions.users.first() || message.author;
  const howgay = Math.floor(Math.random() * 100) + 1
  const gaycalculator = new Discord.MessageEmbed()
  .setDescription(`<:horny:771441823306350593>  **${member.tag} je na ${howgay}% horny!** <:horny:771441823306350593>`)
  .setColor('RANDOM')
  message.channel.send(gaycalculator);
  }
}
