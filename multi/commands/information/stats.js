const Discord = require('discord.js')
const config = require("../../utils/config.js");
var os = require('os')
const osName = require('os-name');

module.exports = {
  name: "stats",
  category: "information",
  description: "Stats command.",
  run: async(bot, message, args) => {
   let cpu = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
   const operating = osName(os.platform());
   const operatingversion = osName(os.release());
   const botinf = new Discord.MessageEmbed()
   .setAuthor('Multi', bot.user.displayAvatarURL({dynamic: true}))
   .addField('🏷️ Jméno', `${bot.user.tag} (**${bot.user.id}**)`)
   .addField('<:discordjs:771021897013526550> Knihovna', `discord.js (v${Discord.version})`)
   .addField('<:nodejs:771021896870526976> Node Verze', `${process.version}`)
   .addField(`📂 Na kolika serverech je ${bot.user.username} `, `**${bot.guilds.cache.size}**`)
   .addField(`👤 Kolik lidí používá ${bot.user.username}`, `**${bot.users.cache.size}**`)
   .addField('📋 Prefix', `**${config.PREFIX}**`)
   .addField('📊 Web', '[**Pro web klikni zde!**](http://www.botmulti.xyz/)')
   .addField('🤖 Invite', '[**Pro invite klikni zde!**](https://discord.com/api/oauth2/authorize?client_id=770779770534363147&permissions=8&scope=bot)')
   .addField('✏ Pameť', `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
   .addField('🌐 Bot vytvořen', `**${bot.user.createdAt}**`)
   .addField('<:linux:771021896602353704> Operační Systém', `\`\`\`${operating} (v${operatingversion})\`\`\``)
   .addField('💾 CPU', `\`\`\`md\n${os.cpus().map(c => c.model)} (Arch: ${os.arch})\`\`\``)
   .setColor('ORANGE')
   message.channel.send(botinf)
  }
}
