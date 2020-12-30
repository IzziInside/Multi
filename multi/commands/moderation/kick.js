const Discord = require('discord.js');

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick command.",
  run: async(bot, message, args) => {
    if(!message.member.hasPermission(['KICK_MEMBERS'])) {
        const kickerr = new Discord.MessageEmbed()
        .setTitle("Stala se chyba!")
        .setDescription("<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.***\n\n⚠ **Pro tento příkaz budeš potřebovat pravomoc: ``KICK_MEMBERS``**")
        .setColor("RED");
        return message.channel.send(kickerr);
       }

    let user = message.mentions.users.first();

    if(user) {
        const member = message.guild.member(user);

    if(member) {
       const reason = args.join(" ").slice(22)
       member.kick(reason ? reason : "Důvod není zaznamenaný")
       .then(() => {
           const kickuser = new Discord.MessageEmbed()
           .setDescription(`<:check:771020834876686346> **${user.username}#${user.discriminator} byl vykopnutý ze serveru! Důvod: ${reason ? reason: "Důvod není zaznamenaný"}**`)
           .setColor('GREEN')
           message.channel.send(kickuser)
       }).catch(err => {
           const kickusererr = new Discord.MessageEmbed()
           .setTitle('Stala se chyba!')
           .setDescription(`<:crossx:771020834718351370> **${user.tag} nemůže být vykopnutý ze serveru! Ujišti se jestli máš dobře nastavené pravomoce a nebo máš stejné pravomoce jako označený uživatel.**`)
           .setColor('RED')
           message.channel.send(kickusererr)
           console.log(err);
       });
    } else {
        const kickusermentionerr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription("<:crossx:771020834718351370> **Tento uživatel není na serveru, zkus označit uživatele který je na serveru!**")
        .setColor('RED')
        message.channel.send(kickusermentionerr)
    }
  } else {
    const kickusermentionerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription("<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele: ``${config.PREFIX}kick [uživatel]``**")
    .setColor('RED')
    message.channel.send(kickusermentionerr)
  }
 }
}
