const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "clapify",
  category: "fun",
  description: "Clapify, instead of spaces are clapping hands emote.",
  run: async(bot, message, args) => {
  const clap = args.join('👏')
  if(!clap) {
     const errorclap = new Discord.MessageEmbed()
     .setTitle('Stala se chyba!')
     .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}clapify [slovo nebo vetu]\`\`**`)
     .setColor('RED')
     message.channel.send(errorclap)
}
  message.channel.send(clap)
  }
}
