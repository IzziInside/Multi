const Discord = require('discord.js')
const snekfetch = require('snekfetch');

module.exports = {
    name: "ass",
    category: "nsfw",
    description: "Sends random picture of ass.",
    run: async (bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
   const id = [Math.floor(Math.random() * 5000)]
   const r = await snekfetch.get(`http://api.obutts.ru/butts_preview/${id}`)
   const preview = r.body[0]['PREVIEW'.toLowerCase()]
   const image = `http://media.obutts.ru/${preview}`
  const assembed = new Discord.MessageEmbed()
  .setDescription(`**[Klikni zde pro obrázek](${image})**`)
  .setImage(image)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | API: http://media.obutts.ru/`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(assembed)
   }
}
