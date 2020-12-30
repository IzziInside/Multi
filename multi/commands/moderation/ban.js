const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bot bans an user from the server.",
  run: async(bot, message, args) => {
    if(!message.member.hasPermission(['BAN_MEMBERS'])) {
        const banerr = new Discord.MessageEmbed()
        .setTitle("Stala se chyba!")
        .setDescription("<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**\n\n⚠ **Pro tento příkaz budeš potřebovat pravomoc: ``BAN_MEMBERS``**")
        .setColor("RED");
        return message.channel.send(banerr);
       }

    let user = message.mentions.users.first();

    if(user) {
        const member = message.guild.member(user);

    if(member) {
       const reason = args.join(" ").slice(22)
       member.ban(reason ? reason : "Důvod není zaznamenaný")
       .then(() => {
           const banuser = new Discord.MessageEmbed()
           .setDescription(`<:check:771020834876686346> **${user.username}#${user.discriminator} byl zabanován ze serveru! Důvod: ${reason ? reason: "Důvod není zaznamenaný"}**`)
           .setColor('GREEN')
           message.channel.send(banuser)
       }).catch(err => {
           const banusererr = new Discord.MessageEmbed()
           .setTitle('Stala se chyba!')
           .setDescription(`<:crossx:771020834718351370> **${user.tag} nemůže být zabanován ze serveru!\n\nUjišti se jestli máš dobře nastavené pravomoce a nebo máš stejné pravomoce jako označený uživatel.**`)
           .setColor('RED')
           message.channel.send(banusererr)
           console.log(err);
       });
    } else {
        const banusermentionerr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription("<:crossx:771020834718351370> **Tento uživatel není na serveru, zkus označit uživatele který je na serveru!**")
        .setColor('RED')
        message.channel.send(banusermentionerr)
    }
  } else {
    const banusermentionerr = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele: \`\`${config.PREFIX}ban [uživatel]\`\`**`)
    .setColor('RED')
    message.channel.send(banusermentionerr)
    }
  }
}
