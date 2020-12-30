const Discord = require('discord.js')
const snekfetch = require('snekfetch')

module.exports = {
  name: "meme",
  category: "fun",
  description: "Meme command.",
  run: async(bot, message, args) => {
  const { body } = await snekfetch.get('https://www.reddit.com/r/crappydesign+dankmemes+me_irl+wholesomememes+memeeconomy+adviceanimals+comedycemetery+memes+prequelmemes+terriblefacebookmemes+pewdiepiesubmissions+funny/.json?limit=800').query({
    limit: 800
  });
  const testing = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18)
  const randomtest = Math.floor(Math.random() * testing.length)
  const memes = new Discord.MessageEmbed()
  .setTitle(testing[randomtest].data.title)
  .setImage(testing[randomtest].data.url)
  .setURL(testing[randomtest].data.url)
  .setColor('RANDOM')
  .setFooter(`${message.author.tag} | r/${testing[randomtest].data.subreddit}`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(memes)
  }
}
