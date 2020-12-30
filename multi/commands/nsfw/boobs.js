const Discord = require('discord.js')
const snekfetch = require('snekfetch')

module.exports = {
  name: "boobs",
  category: "nsfw",
  description: "Multi sends a random NSFW picture.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  const { body } = await snekfetch.get('https://www.reddit.com/r/boobs+snapchatboobs+tits+BigBoobsGW+ratemyboobs+amazingtits+fortyfivefiftyfive/.json?limit=1000').query({
    limit: 1000
  });
  const testing = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18)
  const randomtest = Math.floor(Math.random() * testing.length)
  const boobs = new Discord.MessageEmbed()
  .setDescription(`**[Klikni zde pro obrázek!](${testing[randomtest].data.url})**`)
  .setImage(testing[randomtest].data.url)
  .setURL(testing[randomtest].data.url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | Subreddit: r/${testing[randomtest].data.subreddit}`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(boobs)
  }
}
