const db = require('quick.db');
const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "profile",
  category: "economy",
  description: "Profile command",
  run: async(bot, message, args) => {
   let member = message.mentions.users.first() || message.author;

   if(member.bot) {
      const boterr = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription('<:crossx:709001978931576882> **Bot nemůže mít profil v Multim!**')
      .setColor('RED')
      return message.channel.send(boterr)
   }

   let bio = db.fetch(`bio_${member.id}`)
   if(bio === null) bio = `Není nastavené bio!`;
   let age = db.fetch(`age_${member.id}`)
   if(age === null) age = `Není nastaven věk!`
   let balance = db.fetch(`balance_${member.id}_${message.guild.id}`)
   if(balance === null) balance = "0";
   let reputation = db.get(`rep_${member.id}`)
   if(reputation === null) reputation = `0`
   let badge = db.fetch(`badge_${member.id}`)
   if(badge === null) badge = `Nejsou nalezeny odznaky!`;
   const profileembed = new Discord.MessageEmbed()
   .setAuthor(`Profil uživatele ${member.tag}`, member.displayAvatarURL({dynamic: true, format: 'png'}))
   .addField(`🌍 Popisek uživatele ${member.username}`, bio)
   .addField('🎖 Reputace', reputation)
   .addField('💸 Zůstatek peněz', balance)
   .addField(`🍰 Věk uživatele ${member.username}`, age)
   .addField(`:beginner: Odznaky`, badge)
   .setFooter(`Pro bio: ${config.PREFIX}setbio [popisek] | Pro věk: ${config.PREFIX}setage [číslo]`)
   message.channel.send(profileembed)
  }
}
