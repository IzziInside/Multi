const Discord = require('discord.js')
const config = require("../../utils/config.js");

var cooldown = new Set();

module.exports = {
  name: "bugreport",
  category: "utility",
  description: "Report a bug error in Multi.",
  run: async(bot, message, args) => {
    const suggestion = args.join(" ")
    if(!suggestion) {
        const suggesterr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje specifikovat tvůj problém: \`\`${config.PREFIX}bugreport [report]\`\`**`)
        .setColor('RED')
        return message.channel.send(suggesterr)
    }

    if(cooldown.has(message.author.id)) {
        const cooldownerr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription('<:crossx:771020834718351370> **Tento příkaz má cooldown, musíš počkat 5 minut aby jsi mohl napsat report!**')
        .setColor('RED')
        message.channel.send(cooldownerr)
    } else {
    let channel = bot.channels.cache.get('771017135907405824')
    const suggestembed = new Discord.MessageEmbed()
    .addField(`Bug Report`, `**${suggestion}**`)
    .addField(`Report poslal uživatel`, `${message.author.tag} (ID: **${message.author.id}**)`)
    .addField(`Report byl odeslán ze serveru`, `${message.guild.name} (ID: **${message.guild.id}**)`)
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL())
    channel.send(suggestembed).then((emote) => {
       emote.react("755497043656572957")
    })
    const approvesuggest = new Discord.MessageEmbed()
    .setDescription('<:check:771020834876686346> **Report byl úspěšně poslán do Multi | Support & Community!**')
    .setColor('GREEN')
    message.channel.send(approvesuggest)

    cooldown.add(message.author.id)
    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, 300000)
   }
 }
}
