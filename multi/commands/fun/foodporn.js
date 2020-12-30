const snekfetch = require('snekfetch')
const Discord = require('discord.js')

module.exports = {
  name: "foodporn",
  category: "fun",
  description: "Foodporn command.",
  run: async(bot, message, args) => {
  const {body} = await snekfetch.get('https://www.reddit.com/r/foodporn/.json?limit=800').query({
    limit: 800
  })
  const randomreddit = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18)
  const randomnum = Math.floor(Math.random() * randomreddit.length)

  const foodporn = new Discord.MessageEmbed()
  .setTitle(randomreddit[randomnum].data.title)
  .setImage(randomreddit[randomnum].data.url)
  .setURL(randomreddit[randomnum].data.url)
  .setColor('RANDOM')
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(foodporn)
  }
}
