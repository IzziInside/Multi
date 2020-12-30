const Discord = require('discord.js');

module.exports = {
  name: "ping",
  category: "information",
  description: "Ping command.",
  run: async(bot, message, args) => {
   message.channel.send("🏓 Pinguji..").then((msg) => {
       const pingms = new Discord.MessageEmbed()
       .addField('🤖 Bot', `\`\`\`${msg.createdAt - message.createdAt}ms\`\`\``)
       .addField('<:discord:771402915831218216> API', `\`\`\`${Math.floor(bot.ws.ping)}ms\`\`\``)
       msg.edit(pingms)
   })
  }
} 
