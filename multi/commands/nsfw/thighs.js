const Discord = require('discord.js')
const snekfetch = require('snekfetch')

module.exports = {
  name: "thighs",
  category: "nsfw",
  description: "Thighs command.",
  run: async(bot, message, args) => {
  if(!message.channel.nsfw) {
    const nsfwerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:709001978931576882> **Aby bot reagoval na tento příkaz, tak se musíš přesunout do NSFW kanálu!**')
    .setColor('RED')
    return message.channel.send(nsfwerror)
  }
  const { body } = await snekfetch.get('https://www.reddit.com/r/thighs+thickThighs+hipcleavage+slimthick+thapt+perfectthighs+thighshots+jucythighs+upvotedbecausethighs+sexysittingthighs+happygaps+thighgap+thighsex/.json?limit=800').query({
    limit: 800
  });
  const testing = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18)
  const randomtest = Math.floor(Math.random() * testing.length)
  const thighs = new Discord.MessageEmbed()
  .setDescription(`**[Klikni zde pro obrázek](${testing[randomtest].data.url})**`)
  .setImage(testing[randomtest].data.url)
  .setURL(testing[randomtest].data.url)
  .setColor('RANDOM')
  .setFooter(`Požadováno od ${message.author.tag} | Subreddit: r/${testing[randomtest].data.subreddit}`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp();
  message.channel.send(thighs)
  }
}
