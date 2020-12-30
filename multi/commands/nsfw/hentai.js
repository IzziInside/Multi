const { get } = require('snekfetch')
const superagent = require('superagent')
const Discord = require('discord.js')

module.exports = {
  name: "hentai",
  category: "nsfw",
  description: "Hentai command.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  if(args[0] === 'gif') {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/Random_hentai_gif")
    const hentaigifembed = new Discord.MessageEmbed()
    .setDescription(`**[Klikni zde pro obrázek](${body.url})**`)
    .setImage(body.url)
    .setColor('RANDOM')
    .setFooter(`Požadováno od ${message.author.tag} | API: https://nekos.life/api/v2/img/ • Tags: gif`, message.author.displayAvatarURL({format: 'png', format: 'gif'}))
    .setTimestamp();
    message.channel.send(hentaigifembed)
 } else {
  if(args[0] === 'feet') {
     const { body } = await superagent.get("https://nekos.life/api/v2/img/feet")
     const hentaifeet = new Discord.MessageEmbed()
     .setDescription(`**[Klikni zde pro obrázek](${body.url})**`)
     .setImage(body.url)
     .setColor('RANDOM')
     .setFooter(`Požadováno od ${message.author.tag} | API: https://nekos.life/api/v2/img/ • Tags: feet`, message.author.displayAvatarURL({format: 'png', format: 'gif'}))
     .setTimestamp();
     message.channel.send(hentaifeet)
 } else {
   if(args[0] === 'thighs') {
    const { body } = await get("https://nekobot.xyz/api/image?type=hthigh")
    const thighsembed = new Discord.MessageEmbed()
    .setDescription(`**[Klikni zde pro obrázek](${body.message})**`)
    .setImage(body.message)
    .setColor('RANDOM')
    .setFooter(`Požadováno od ${message.author.tag} | API: https://nekobot.xyz/api • Tags: thighs`, message.author.displayAvatarURL({format: 'png', format: 'gif'}))
    .setTimestamp();
    message.channel.send(thighsembed)
   } else {
 const { body } = await get("https://nekobot.xyz/api/image?type=hentai")
 const hentaiembed = new Discord.MessageEmbed()
 .setDescription(`**[Klikni zde pro obrázek](${body.message})**`)
 .setImage(body.message)
 .setColor('RANDOM')
 .setFooter(`Požadováno od ${message.author.tag} | API: https://nekobot.xyz/api`, message.author.displayAvatarURL({format: 'png', format: 'gif'}))
 .setTimestamp();
 message.channel.send(hentaiembed)
    }
   }
  }
 }
}
