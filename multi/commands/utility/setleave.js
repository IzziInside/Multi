const db = require('quick.db');
const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "setleave",
  category: "utility",
  description: "setleave command.",
  run: async(bot, message, args) => {
  if(!message.member.hasPermission(['ADMINISTRATOR'])) {
    const banerr = new Discord.MessageEmbed()
    .setTitle("Stala se chyba!")
    .setDescription("<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**")
    .setColor("RED");
    return message.channel.send(banerr);
   }
  if(!args[0]) {
    const errorleave = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`**<:crossx:771020834718351370> Tento příkaz potřebuje argument aby jsi mohl nastavit leave: \`\`channel [${config.PREFIX}setleave channel #kanál]\`\`\n\n⚠ Pokud chcete vymazat welcome napište: \`\`${config.PREFIX}setleave delete [#kanál]\`\`**`)
    .setColor('RED')
    return message.channel.send(errorleave)
  }
   if(args[0] === 'channel') {
   let channel = message.mentions.channels.first()
   if(!channel) {
       const channelerror = new Discord.MessageEmbed()
       .setTitle('Stala se chyba!')
       .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš označit kanál, aby argument fungoval: \`\`${config.PREFIX}setleave channel [#kanál]\`\`\n\n⚠ Pokud chcete vymazat welcome napište: \`\`${config.PREFIX}setleave delete [#kanál]\`\`**`)
       .setColor('RED')
       return message.channel.send(channelerror)
   }

   db.set(`leave_${message.guild.id}`, channel.id)
   const leavechannel = new Discord.MessageEmbed()
   .setDescription(`<:check:771020834876686346> **Leave byl úspěšně nastaven v kanále: ${channel}**`)
   .setColor('GREEN')
   message.channel.send(leavechannel)
 }
 if(args[0] === 'delete' || args[0] === 'remove') {
  let channel = message.mentions.channels.first()
  if(!channel) {
    const channelerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Pro tento příkaz musíš označit kanál, aby argument fungoval:  \`\`${config.PREFIX}setleave delete [#kanál]\`\`**`)
    .setColor('RED')
    return message.channel.send(channelerror)
  }
  db.delete(`leave_${message.guild.id}`, channel.id)
  const welcomechannel = new Discord.MessageEmbed()
  .setDescription(`<:check:771020834876686346> **Leave byl úspěšně smazán v kanále: ${channel}**`)
  .setColor('GREEN')
  message.channel.send(welcomechannel)
  }
 }
}
