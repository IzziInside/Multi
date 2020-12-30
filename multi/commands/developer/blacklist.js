const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../utils/config.js");

module.exports = {
  name: "blacklist",
  category: "developer",
  description: "Bot bans an user from the server.",
  run: async(bot, message, args) => {
   if(message.author.id !== '417403958814965771' && message.author.id !== '273813194861051907') {
       const ownererr = new Discord.MessageEmbed()
       .setTitle('Stala se chyba!')
       .setDescription("<:crossx:771020834718351370> **Tento příkaz může používat pouze Developer!**")
       .setColor("RED")
       return message.channel.send(ownererr)
   }
   let member = message.mentions.users.first() || bot.users.cache.get(args[0])
   if(!member) {
       const usererr = new Discord.MessageEmbed()
       .setTitle("Stala se chyba!")
       .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz je povinný označit uživatele nebo zadat ID: \`\`${config.PREFIX}blacklist [@uživatel nebo id]\`\`**`)
       .setColor("RED")
       return message.channel.send(usererr)
   }
   if(member.id === '417403958814965771' && member.id === '273813194861051907') {
     const membererr = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription('<:crossx:771020834718351370> **Nemůžu dát do černé listiny toho koho si teď označil nebo zadal jeho ID.**')
     .setColor('RED')
     return message.channel.send(membererr)
   }
   if(member.bot) {
     const boterr = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription('<:crossx:771020834718351370> **Nemůžu dát do černé listiny bota, prosím označ nebo zadej ID uživatele.**')
     .setColor('RED')
     return message.channel.send(boterr)
   }
   let blacklist = db.fetch(`blacklist_${member.id}`)
       if(blacklist === "no") {
       db.set(`blacklist_${member.id}`, "blacklisted")
       const blacklistedembed = new Discord.MessageEmbed()
       .setDescription(`<:check:771020834876686346> **${member.tag} je úspěšně v černé listině!**`)
       .setColor('GREEN')
       message.channel.send(blacklistedembed)
   } else {
       if(blacklist === "blacklisted") {
       db.set(`blacklist_${member.id}`, "no")
       const whitelist = new Discord.MessageEmbed()
       .setDescription(`<:check:771020834876686346> **${member.tag} je úspěšně odstraněn z černé listiny!**`)
       .setColor('GREEN')
       message.channel.send(whitelist)
    } else {
       db.set(`blacklist_${member.id}`, "no")
       const setup = new Discord.MessageEmbed()
       .setDescription(`<:check:771020834876686346> **Zadej ještě jednou pro uživatele blacklist: \`\`${config.PREFIX}blacklist [@uživatel nebo id]\`\`**`)
       .setColor('GREEN')
       message.channel.send(setup)
    }
  }
 }
}
