const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "shibe",
  category: "animals",
  description: "Shibe command.",
  run: async(bot, message, args) => {
  const { body } = await superagent.get('http://shibe.online/api/shibes?count=1&urls=true')
  const shibe = new Discord.MessageEmbed()
  .setTitle('Shibe')
  .setImage(body[0])
  .setURL(body[0])
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: http://shibe.online/api/`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  message.channel.send({embed: shibe})
  }
}
