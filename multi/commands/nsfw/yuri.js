const { get } = require('snekfetch');
const Discord = require('discord.js')

module.exports = {
  name: "yuri",
  category: "nsfw",
  description: "Yuri command.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  const { body } = await get('https://nekos.life/api/v2/img/yuri')
  const yuriembed = new Discord.MessageEmbed()
  .setDescription(`**[Klikni zde pro obrázek](${body.url})**`)
  .setImage(body.url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://nekos.life/api/v2/img/`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(yuriembed)
  }
}
