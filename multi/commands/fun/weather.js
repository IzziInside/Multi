const Discord = require('discord.js')
var weather = require('weather-js');
const config = require("../../utils/config.js");

module.exports = {
  name: "weather",
  category: "fun",
  description: "Weather command.",
  run: async(bot, message, args) => {
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  if(err) {
    const errinput = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje město nebo vesnici: \`\`${config.PREFIX}weather [město nebo vesnice]\`\`**`)
    .setColor('RED')
    message.channel.send(errinput)
    return;
}

if(result.length === 0) {
  const resulterr = new Discord.MessageEmbed()
  .setTitle('Stala se chyba!')
  .setDescription(`<:crossx:771020834718351370> **Tato lokace neexistuje, musíš zadat existující lokaci!**`)
  .setColor('RED')
  message.channel.send({embed: resulterr})
  return;
}


var current = result[0].current;
var location = result[0].current;

  const weatherembed = new Discord.MessageEmbed()
  .setDescription(`**${current.skytext}**`)
  .setAuthor(`🌤 Počasí v ${current.observationpoint}`)
  .addField('🌡 Teplota', `${current.temperature} °C`)
  .addField('🌥 Ovzduší', `${current.feelslike} °C`)
  .addField('💧 Vlhkost', `${current.humidity}%`)
  .addField('🍃 Vítr', `${current.winddisplay}`)
  .setThumbnail(`${current.imageUrl}`)
  .setFooter(`📅 ${current.date} | ${current.day}`)
  .setColor('RANDOM')
  message.channel.send(weatherembed)
  })
  }
}
