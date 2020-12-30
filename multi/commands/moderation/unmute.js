const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "unmute",
  category: "moderation",
  description: "Unmute command.",
  run: async(bot, message, args) => {
  const user = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  if(!user) {
    const usererr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele: \`\`${config.PREFIX}unmute [@uživatel]\`\`**`)
    .setColor('RED')
    return message.channel.send(usererr)
  }
  if(user.id === message.author.id) {
	  const authorerr = new Discord.MessageEmbed()
	  .setTitle('Stala se chyba!')
	  .setDescription('<:crossx:771020834718351370> **Nemůžeš si dát unmute!**')
	  .setColor('RED')
	  return message.channel.send(authorerr)
  }
  if(!message.member.hasPermission("MANAGE_ROLES")) {
  const permserr = new Discord.MessageEmbed()
  .setTitle('Stala se chyba')
  .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.\n⚠ Pro tento příkaz budeš potřebovat pravomoc: ``MANAGE_ROLES``**')
  .setColor('RED')
  return message.channel.send(permserr)
  }
if(user.hasPermission("MANAGE_ROLES")) {
	const unmutepermsuser = new Discord.MessageEmbed()
	.setTitle('Stala se chyba!')
	.setDescription('<:crossx:771020834718351370> **Uživatelovi kterýmu chceš dát unmute má stejné pravomoce jako ty.**')
	.setColor('RED')
	return message.channel.send(muteusererr);
 }
 const muterole = message.guild.roles.cache.find(role => role.name === "Muted")
 if(user.roles.cache.has(muterole)) {
	const rolehaserr = new Discord.MessageEmbed()
	.setTitle('Stala se chyba!')
	.setDescription('<:crossx:771020834718351370> **Uživatel kterýho jsi označil pro příkaz nemá mute.**')
	.setColor('RED')
	return message.channel.send(rolehaserr)
 }
 user.roles.remove(muterole);
 const unmuteembed = new Discord.MessageEmbed()
 .setDescription(`<:check:771020834876686346> **${message.mentions.users.first().tag} má úspěšně unmute.**`)
 .setColor('GREEN')
 await message.channel.send(unmuteembed)
  }
}
