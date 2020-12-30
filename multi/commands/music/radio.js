const Discord = require('discord.js');
const opusscript = require('opusscript')
const ffmpeg = require('ffmpeg')
const ytdl = require('ytdl-core')
const config = require("../../utils/config.js");

module.exports = {
  name: "radio",
  category: "music",
  description: "Radio command.",
  run: async(bot, message, args) => {
  if(args[0] == '1') { // evropa 2
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://ice.actve.net/fm-evropa2-128', streamOptions);
  const evropa = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/559822053570772993/717899748182458368/Evropa_2_Logo-removebg-preview.png')
  .setDescription(`**🎵 Právě hraje: Evropa 2**\nZdroj k rádiu: **[Klikni Zde](https://www.evropa2.cz/)**`)
  .setColor('#ff4e4e')
  message.channel.send(evropa)
})
  } else {
  if(!message.member.voice.channel) {
  const errorevropa = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do voice chatu!**')
  .setColor('RED')
  return message.channel.send(errorevropa)
    }
  }
}

  if(args[0] == '2') { // kiss
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('https://icecast4.play.cz/kiss128.mp3')
  const kiss = new Discord.MessageEmbed()
  .setThumbnail('http://api.play.cz/static/radio_logo/t200/kiss.png')
  .setDescription(`🎵 **Právě hraje: Kiss Radio**\nZdroj k rádiu: **[Klikni Zde](https://kiss.cz/)**`)
  .setColor('RED')
  return message.channel.send(kiss)
})
  } else {
  if(!message.member.voice.channel) {
  const errorkiss = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorkiss)
    }
   }
  }

if(args[0] == '3') { // impuls
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://icecast5.play.cz:8000/impuls128.mp3', streamOptions)
  const impuls = new Discord.MessageEmbed()
  .setThumbnail('https://apps.socialsprinters.com/socialssprinters/users_data/11878/impuls-logo-2646912853.png')
  .setDescription(`🎵 **Právě hraje: Rádio Impuls**\nZdroj k rádiu: **[Klikni Zde](https://www.impuls.cz/)**`)
  .setColor('#FFDB58')
  message.channel.send(impuls)
})
  } else {
  if(!message.member.voice.channel) {
  const errorimpuls = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorimpuls)
    }
  }
}
if(args[0] == '4') { // country
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://icecast2.play.cz/country64.mp3', streamOptions)
  const country = new Discord.MessageEmbed()
  .setThumbnail('http://api.play.cz/static/radio_logo/t200/country.png')
  .setDescription(`🎵 **Právě hraje: Country Radio**\nZdroj k rádiu: **[Klikni Zde](http://www.countryradio.cz/)**`)
  .setColor('#FFFF00')
  message.channel.send(country)
})
  } else {
  if(!message.member.voice.channel) {
  const errorcountry = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorcountry)
    }
  }
}
if(args[0] == '5') { // spin
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://icecast4.play.cz/spin128.mp3', streamOptions)
  const spin = new Discord.MessageEmbed()
  .setThumbnail('http://api.play.cz/static/radio_logo/t200/spin.png')
  .setDescription(`🎵 **Právě hraje: Spin Radio**\nZdroj k rádiu: **[Klikni Zde](https://www.radiospin.cz/)**`)
  .setColor('#fc0fc0')
  message.channel.send(spin)
})
  } else {
  if(!message.member.voice.channel) {
  const errorspin = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorspin)
    }
  }
}
if(args[0] == '6') { // fajn radio
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('https://21323.live.streamtheworld.com/FAJN_RADIO_128.mp3?dist=onlineradiobox', streamOptions)
  const spin = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/559814342007062549/718117178003685446/kurva.png')
  .setDescription(`🎵 **Právě hraje: Fajn Rádio**\nZdroj k rádiu: **[Klikni Zde](https://www.fajnradio.cz/)**`)
  .setColor('#FFA500')
  message.channel.send(spin)
})
  } else {
  if(!message.member.voice.channel) {
  const errorspin = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorspin)
    }
  }
}
if(args[0] == '7') { // hitradio fm
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://ice.abradio.cz:8000/hitradiofm128.mp3', streamOptions)
  const spin = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/717141759939051620/718425955567272026/hitradio-fm-barevna-verze-2-svg-1564400248-removebg-preview.png')
  .setDescription(`🎵 **Právě hraje: Hitrádio FM**\nZdroj k rádiu: **[Klikni Zde](https://hitradiofm.cz/)**`)
  .setColor('#020ADB')
  message.channel.send(spin)
})
  } else {
  if(!message.member.voice.channel) {
  const errorspin = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorspin)
    }
  }
}
if(args[0] == '8') { // spacenetic
  const streamOptions = {filter: 'audioonly', quality: 'highestaudio', bitrate: 32000, volume: 0.5};
  if(message.member.voice.channel) {
  message.member.voice.channel.join()
  .then(connection => {
  connection.play('http://radiojs.tk/radio/8000/radio.mp3?1599588281', streamOptions)
  const spin = new Discord.MessageEmbed()
  .setThumbnail('http://radiojs.tk/static/icons/production/favicon-32x32.png')
  .setDescription(`🎵 **Právě hraje: Online Rádio SpaceNetic**\nZdroj k rádiu: **[Klikni Zde](http://radiojs.tk/)**`)
  .setColor('#020ADB')
  message.channel.send(spin)
})
  } else {
  if(!message.member.voice.channel) {
  const errorspin = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription('<:crossx:771020834718351370> **Abys tento příkaz mohl použít musíš jít do Voice Channelu!**')
  .setColor('RED')
  return message.channel.send(errorspin)
    }
  }
}


  if(!args[0]) {
  const radioembed = new Discord.MessageEmbed()
  .setDescription(`**:flag_cz: České Rádia**\n\`\`\`1: Evropa 2 (m.radio 1)\n2: Kiss Radio (m.radio 2)\n3: Rádio Impuls (m.radio 3)\n4: Country Radio (m.radio 4)\n5: Spin Radio (m.radio 5)\n6: Fajn Rádio (m.radio 6)\n7: Hitrádio FM (m.radio 7)\n8: SpaceNetic (m.radio 8)\`\`\``)
  .setColor('RANDOM')
  .setFooter('❓ Používejte jako: m.radio [číslo]')
  return message.channel.send(radioembed)
  }

  if(args[0] == 'off') {
     if(!message.member.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
     const errorperms = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je pouze dostupný pro ty co mají pravomoce.**')
     .setColor('RED')
     return message.channel.send(errorperms)
}
     if(message.member.voice.channel) { // bot disconnected from the channel
     message.member.voice.channel.leave()
      const disconnected = new Discord.MessageEmbed()
      .setDescription(`<:check:771020834876686346> **Bot se odpojil z voice chatu, pro jiný radio použij příkaz: \`\`${config.PREFIX}radio\`\`**`)
      .setColor('GREEN')
      return message.channel.send(disconnected).then(msg => msg.delete(20))
     }
   }
  }
}
