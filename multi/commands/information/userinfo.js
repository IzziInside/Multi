const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
  name: "userinfo",
  category: "information",
  description: "Userinfo command.",
  run: async(bot, message, args) => {
let user = message.mentions.users.first() || message.author;

status = {
  online: "<:online:771404752394649631> **Online**",
  idle: "<:idle:771404753087234068> **Idle**",
  dnd: "<:dnd:771404752700571688>** Do Not Distrub**",
  offline: "<:offline:771404752336453664> **Offline / Invisible**"
}

const botstats = {
  "false": "Ne",
  "true": "Ano"
}

let game;
if(user.presence.activities == null || user.presence.activities == "") {
game = `${user.tag} nehraje žádnou hru!`
}
else{
game = user.presence.activities
}

 const userinfo = new Discord.MessageEmbed()
 .setAuthor(`User Information`, user.displayAvatarURL({format: 'png'}))
 .setThumbnail(user.displayAvatarURL({format: 'png'}))
 .addField('📋 Jméno & Tag', `**${user.tag}**`)
 .addField('🆔 ID', user.id)
 .addField('🚦 Status', status[user.presence.status])
 .addField('🎮 Hra', game)
 .addField('🤖 Bot', botstats[user.bot])
 .addField('🎨 Role', ` <@&${message.guild.member(user.id)._roles.join('> <@&')}>`)
 .addField('🌐 Účet vytvořen', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
 .addField(`👤 ${user.tag} se připojil na server`, `${moment.utc(message.member.guild.members.cache.get(user.id).joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
 .setColor(`RANDOM`)
 message.channel.send(userinfo)
  }
}
