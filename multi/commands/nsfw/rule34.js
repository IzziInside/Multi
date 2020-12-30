const Booru = require('booru')
const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "rule34",
  category: "nsfw",
  description: "Rule34 command.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  if(message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE') || message.content.toUpperCase().includes('BABY') || message.content.toUpperCase().includes('BLOOD') || message.content.toUpperCase().includes('KIDS') || message.content.toUpperCase().includes('CHILD') || message.content.toUpperCase().includes('SHOTACON') || message.content.toUpperCase().includes('MURDER') || message.content.toUpperCase().includes('DEATH') || message.content.toUpperCase().includes('SHOTA')) {
    const err = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Štítek porušuje Zásady Komunity nelze používat v žádných kanálech.**')
    .setColor('RED')
    return message.channel.send(err)
  }
  const search = args.join(" ")
  if(!search) {
    const errsearch = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:709001978931576882> **Nezadal si štítek pro tento příkaz: \`\`${config.PREFIX}rule34 [štítek]\`\`**`)
    .setColor('RED')
    return message.channel.send(errsearch)
  }
  Booru.search('r34', [search], {limit: 1, random: true})
  .then(Booru.commonfy)
  .then(images => {
  for (let image of images) {
  const ruleembed = new Discord.MessageEmbed()
  .setDescription(`**[Score: ${image.common.score}](${image.common.file_url})**`)
  .setImage(image.common.file_url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: https://rule34.xxx/ • Štítek: ${search}`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(ruleembed)
     }
  }).catch(err => {
    if(err.name === 'booruError') {
      const errorbooru = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription(`<:crossx:709001978931576882> **Tento štítek \`\`${search}\`\` neexistuje musíte zadat platný štítek!**`)
      .setColor('RED')
      return message.channel.send(errorbooru)
    } else {
      const errorbooru = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription(`<:crossx:709001978931576882> **Tento štítek \`\`${search}\`\` neexistuje musíte zadat platný štítek!**`)
      .setColor('RED')
      return message.channel.send(errorbooru)
    }
  })
 }
}
