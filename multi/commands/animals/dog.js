const superagent = require('superagent');
const Discord = require('discord.js');

module.exports = {
  name: "dog",
  category: "animals",
  description: "Dog command.",
  run: async(bot, message, args) => {
  const { body } = await superagent.get('https://random.dog/woof.json')
  const dog = new Discord.MessageEmbed()
  .setTitle('Dog')
  .setURL(body.url)
  .setImage(body.url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://random.dog`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  message.channel.send(dog)
  }
}
