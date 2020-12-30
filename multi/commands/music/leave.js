const Discord = require('discord.js');
const ffmpeg = require('ffmpeg');

module.exports = {
  name: "leave",
  category: "music",
  description: "Leave command",
  run: async(bot, message, args) => {
  if(message.member.voice.channel) {
  message.member.voice.channel.leave()
  const leaveembed = new Discord.MessageEmbed()
  .setDescription('<:check:771020834876686346> **Právě jsem se odpojil z Voice Channelu.**')
  .setColor('GREEN')
  message.channel.send(leaveembed)
  } else {
    if(!message.member.voice.channel) {
    const errorleave = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do voice chatu!**')
    .setColor('RED')
    return message.channel.send(errorleave)
    }
  }
 }
}
