const Discord = require('discord.js');
const db = require("quick.db");
const config = require("../../utils/config.js");

module.exports = {
  name: "warn",
  category: "moderation",
  description: "Warn command.",
  run: async(bot, message, args) => {
  let member = message.mentions.users.first()

  if (args[0] === "level") {
    if (!member) {
      const errmember = new Discord.MessageEmbed()
        .setTitle("Stala se chyba!")
        .setDescription(`<:crossx:771020834718351370> **Pro tento argument je povinný označit uživatele: \`\`${config.PREFIX}warn level [@uživatel]\`\`**`)
        .setColor("RED");
      return message.channel.send(errmember);
    }
    if(member.bot) {
      const boterr = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription('<:crossx:771020834718351370> **Bot nemůže být varovaný, proto nemůžu ukázat kolik má bot varování.**')
      .setColor('RED')
      return message.channel.send(boterr)
    }
    let warns = db.fetch(`warns_${message.guild.id}_${member.id}`);
    if (warns === null) warns = "0";
    const warnslevel = new Discord.MessageEmbed()
      .setDescription(`⚠ **${member.tag} má ${warns} varování.**`)
      .setColor("RED");
    return message.channel.send(warnslevel);
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const warnerr = new Discord.MessageEmbed()
      .setTitle("Stala se chyba!")
      .setDescription("<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**\n\n⚠ **Pro tento příkaz budete potřebovat pravomoc: ``MANAGE_MESSAGES``**")
      .setColor("RED");
    return message.channel.send(warnerr);
  }
    if(args[0] === 'remove') {
      if(!args[1]) {
       const numbererr = new Discord.MessageEmbed()
       .setTitle('Stala se chyba!')
       .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít, potřebuje číslo: \`\`${config.PREFIX}warn remove [číslo]\`\`**`)
       .setColor('RED')
       return message.channel.send(numbererr)
      }
      if(isNaN(args[1])) {
        const notnumber = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription('<:crossx:771020834718351370> **Pro tento příkaz musíš zadat číslo, ne písmeno!**')
        .setColor('RED')
        return message.channel.send(notnumber)
      }
      let member = message.mentions.users.first()
      if (!member) {
        const errmember = new Discord.MessageEmbed()
          .setTitle("Stala se chyba!")
          .setDescription(`<:crossx:771020834718351370> **Pro tento argument je povinný označit uživatele: \`\`${config.PREFIX}warn remove [číslo] [@uživatel]\`\`**`)
          .setColor("RED");
        return message.channel.send(errmember);
      }
      db.subtract(`warns_${message.guild.id}_${member.id}`, args[1])
      const warndelete = new Discord.MessageEmbed()
      .setDescription(`<:check:771020834876686346> **${args[1]} varování je odstraněna uživatelovi ${member.tag}**`)
      .setColor('GREEN')
      message.channel.send(warndelete)
  } else {
    if (!member) {
      const errmember = new Discord.MessageEmbed()
        .setTitle("Stala se chyba!")
        .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele: \`\`${config.PREFIX}warn [@uživatel]\`\`**`)
        .setColor("RED");
      return message.channel.send(errmember);
    }
    if(member.bot) {
      const boterr = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription('<:crossx:771020834718351370> **Bot nemůže být varován!**')
      .setColor('RED')
      return message.channel.send(boterr)
  }
  let reason = args.join(" ").slice(22);
  var num = 1;
  db.add(`warns_${message.guild.id}_${member.id}`, num);
  const warnmessage = new Discord.MessageEmbed()
  .setDescription(`<:check:771020834876686346> **${member.tag} je úspěšně varován! Důvod:${reason ? reason : " Důvod nezaznamenaný "} **`)
  .setColor('GREEN')
  message.channel.send(warnmessage)

  const warndm = new Discord.MessageEmbed()
  .setTitle(`⚠ ${member.tag} | Varován v ${message.guild.name}`)
  .addField("Varován moderátorem", `**${message.author.tag}**`)
  .addField("Varováný v kanále", `${message.channel}`)
  .addField("Důvod", `**${reason ? reason : " Důvod moderátor nezadal "}**`)
  .setFooter(`❓ Pokud si chcete zkontrolovat, kolik máte už varování tak zadejte příkaz ${config.PREFIX}warn level [@uživatel]`)
  .setColor("RED");
   member.send(warndm);
  }
 }
}
