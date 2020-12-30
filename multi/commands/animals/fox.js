const superagent = require('superagent');
const Discord = require('discord.js');

module.exports = {
  name: "fox",
  category: "animals",
  description: "Fox command.",
  run: async(bot, message, args) => {
  const { body } = await superagent.get('https://randomfox.ca/floof/')
  const fox = new Discord.MessageEmbed()
  .setTitle('Fox')
  .setURL(body.image)
  .setImage(body.image)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://randomfox.ca/floof/`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  message.channel.send(fox)
  }
}
