const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "unban",
  category: "moderation",
  description: "Unban command.",
  run: async(bot, message, args) => {
   if(!message.member.hasPermission(['BAN_MEMBERS'])) {
   const unbanperms = new Discord.MessageEmbed()
   .setTitle('Stala se chyba!')
   .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**\n\n⚠ **Pro tento příkaz budeš potřebovat pravomoc: ``BAN_MEMBERS``**')
   .setColor('RED')
   return message.channel.send(unbanperms);
   }
   let reason = args.slice(1).join(' ');
   let user = args[0];
   if(!user) {
     const usererr = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš zadat ID uživatele, který na tomto serveru má ban: \`\`${config.PREFIX}unban [id]\`\`**`)
     .setColor('RED')
     return message.channel.send(usererr);
   }
  message.guild.members.unban(user, {reason: `${reason ? reason : `${message.author.tag} důvod nezadal.`}`}).then(user => {
    const unbanembed = new Discord.MessageEmbed()
    .setDescription(`<:check:771020834876686346> **${user.tag} je úspěšně unbannován na tomto serveru! Důvod: ${reason ? reason : `Důvod nebyl zaznamenán.`}**`)
    .setColor('GREEN')
    message.channel.send(unbanembed);
  })
  }
}
