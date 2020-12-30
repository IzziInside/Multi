const snekfetch = require('snekfetch');
const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "reddit",
  category: "fun",
  description: "Reddit command.",
  run: async(bot, message, args) => {
  const reddit = args.join(" ");
  if(!reddit) {
    const redditsayerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:709001978931576882> **Pro tento příkaz musíš zadat subreddit: \`\`${config.PREFIX}reddit [subreddit]\`\`**`)
    .setColor('RED')
    message.channel.send(redditsayerr)
  }

  const { body } = await snekfetch
  .get(`https://www.reddit.com/r/${reddit}.json?sort=top&t=week`)
  .query({ limit: 800 });

  const redditperms = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18)
  if(!redditperms.length) {
    const redditerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:709001978931576882> **r/${reddit} neexistuje nebo se jedná o NSFW subreddit.**`)
    .setColor('RED')
    return message.channel.send(redditerr)
  }
  const randomreddit = Math.floor(Math.random() * redditperms.length)

  const redditembed = new Discord.MessageEmbed()
  .setTitle(redditperms[randomreddit].data.title)
  .setDescription(`**Author příspěvku: ${redditperms[randomreddit].data.author}**`)
  .addField('Upvotes & Comments', `**👍 ${redditperms[randomreddit].data.ups} 💬 ${redditperms[randomreddit].data.num_comments}**`)
  .setURL(redditperms[randomreddit].data.url)
  .setColor('ORANGE')
  .setImage(redditperms[randomreddit].data.url)
  .setFooter(`Požadováno od ${message.author.tag} | Subreddit: r/${reddit}`, message.author.displayAvatarURL({format: 'png', dynamic: true}))
  .setTimestamp();
  message.channel.send({embed: redditembed})
  }
}
