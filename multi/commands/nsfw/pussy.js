const Discord = require('discord.js')
const { get } = require('snekfetch');

module.exports = {
  name: "pussy",
  category: "nsfw",
  description: "Pussy command.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  const { body } = await get('https://nekobot.xyz/api/image?type=pussy')
  const pussyembed = new Discord.MessageEmbed()
  .setDescription(`**[Klikni zde pro obrázek](${body.message})**`)
  .setImage(body.message)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://nekobot.xyz/api`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(pussyembed)
  }
}
