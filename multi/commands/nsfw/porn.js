const Discord = require('discord.js')
const superagent = require('snekfetch');
 
module.exports = {
  name:  "porn",
  category: "nsfw",
  description: "Porn command",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš presunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  const { body: 
    {
      image_url: url, title: title
    } 
  } = await superagent.get('https://api.ksoft.si/images/random-nsfw').set('Authorization', `Bearer 6fc21a9c82623c296b1b3f852c2cf2be0107a679`)
  const porn = new Discord.MessageEmbed()
  .setTitle(title)
  .setImage(url)
  .setURL(url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://api.ksoft.si/`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(porn)
 }
}