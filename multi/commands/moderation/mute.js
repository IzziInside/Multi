const Discord = require('discord.js');
const ms = require('ms');
const config = require("../../utils/config.js");

module.exports = {
  name: "mute",
  category: "moderation",
  description: "Mute command.",
  run: async(bot, message, args) => {
  let user = message.mentions.members.first();
  if(!user) {
    const usererr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele: \`\`${config.PREFIX}mute [@uživatel]\`\`**`)
    .setColor('RED')
    return message.channel.send(usererr)
  }
  if(user.id === message.author.id) {
	  const authorerr = new Discord.MessageEmbed()
	  .setTitle('Stala se chyba!')
	  .setDescription('<:crossx:771020834718351370> **Nemůžeš se ztlumit!**')
	  .setColor('RED')
	  return message.channel.send(authorerr)
  }
  if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
	  const botpermserr = new Discord.MessageEmbed()
      .setTitle('Stala se chyba')
	  .setDescription('<:crossx:771020834718351370> **Nemám pravomoce na spravování rolí.**')
	  .setColor('RED')
	  return message.channel.send(botpermserr)
  }
  if(!message.member.hasPermission("MANAGE_ROLES")) {
  const permserr = new Discord.MessageEmbed()
  .setTitle('Stala se chyba')
  .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.\n⚠ Pro tento příkaz budeš potřebovat pravomoc: ``MANAGE_ROLES``**')
  .setColor('RED')
  return message.channel.send(permserr)
  }
  if(user.hasPermission("MANAGE_ROLES")) {
	  const muteusererr = new Discord.MessageEmbed()
	  .setTitle('Stala se chyba!')
	  .setDescription('<:crossx:771020834718351370> **Uživatele kterýho chceš ztlumit má stejné pravomoce jako máš ty.**')
	  .setColor('RED')
	  return message.channel.send(muteusererr);
  }
  const muterole = message.guild.roles.cache.find(role => role.name === "Muted")
  if(!muterole) {
	  try {
		  muterole = message.guild.roles.create({
		  data: {
			  name: "Muted",
			  color: "#000000",
			  permissions: []
		  },
		  reason: "Server neměl vytvořenou roli Muted.",
	  })
	  message.guild.channels.cache.forEach((channel) => {
		  message.channel.createOverWrite(muterole, {
			  SEND_MESSAGES: false
		  });
	  });
  } catch(e) {
	  console.log(e);
  }
}
  let time = args[1];
  if(!time) {
	  const mutetimeerr = new Discord.MessageEmbed()
	  .setTitle('Stala se chyba!')
	  .setDescription(`<:crossx:771020834718351370> **Neupřesnil jsi čas pro příkaz mute: \`\`${config.PREFIX}mute [@uživatel] [s (sekunda) | h (hodina) | d (den)]\`\`**`)
	  .setColor('RED')
	  return message.channel.send(mutetimeerr)
  }
  user.roles.add(muterole)
  if(user.roles.cache.has(muterole)) {
	  const hasmuterole = new Discord.MessageEmbed()
	  .setTitle('Stala se chyba!')
	  .setDescription(`<:crossx:771020834718351370> **${message.mentions.users.first().tag} je už ztlumený.**`)
	  .setColor('RED')
	  return message.channel.send(hasmuterole)
  }
  const muteembed = new Discord.MessageEmbed()
  .setDescription(`<:check:771020834876686346> **${message.mentions.users.first().tag} je úspěsně ztlumen na ${ms(ms(time))}.**`)
  .setColor('GREEN')
  message.channel.send(muteembed)

  setTimeout(function() {
	  user.roles.remove(muterole.id)
	  return;
  }, ms(time));
  }
}
