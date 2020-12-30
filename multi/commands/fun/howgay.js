const Discord = require('discord.js');

module.exports = {
  name: "howgay",
  category: "fun",
  description: "howgay command.",
  run: async(bot, message, args) => {
  let member = message.mentions.users.first() || message.author;
  const howgay = Math.floor(Math.random() * 100) + 1
  const gaycalculator = new Discord.MessageEmbed()
  .setDescription(`:rainbow_flag:  **${member.tag} je na ${howgay}% gay! :rainbow_flag:**`)
  .setColor('RANDOM')
  message.channel.send(gaycalculator);
  }
}
