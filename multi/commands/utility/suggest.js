const Discord = require('discord.js')

var cooldown = new Set();

const config = require("../../utils/config.js");

module.exports = {
  name: "suggest",
  category: "utility",
  description: "Suggest command.",
  run: async(bot, message, args) => {
    const suggestion = args.join(" ")
    if(!suggestion) {
        const suggesterr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje návrh: \`\`${config.PREFIX}suggest [návrh]\`\`**`)
        .setColor('RED')
        return message.channel.send(suggesterr)
    }

    if(cooldown.has(message.author.id)) {
        const cooldownerr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription('<:crossx:771020834718351370> **Tento příkaz má cooldown, musíš počkat 5 minut aby jsi mohl napsat návrh!**')
        .setColor('RED')
        message.channel.send(cooldownerr)
    } else {
    let channel = bot.channels.cache.get('771017154345697281')
    const suggestembed = new Discord.MessageEmbed()
    .addField(`Návrh`, `**${suggestion}**`)
    .addField(`Návrh poslal uživatel`, `${message.author.tag} (ID: **${message.author.id}**)`)
    .addField(`Návrh byl odeslán ze serveru`, `${message.guild.name} (ID: **${message.guild.id}**)`)
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL())
    channel.send(suggestembed).then((emote) => {
       emote.react("709002171588542604")
       emote.react("709001978931576882")
    })
    const approvesuggest = new Discord.MessageEmbed()
    .setDescription('<:check:771020834876686346> **Návrh byl úspěšně poslán do Multi | Support & Community!**')
    .setColor('GREEN')
    message.channel.send(approvesuggest)

    cooldown.add(message.author.id)
    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, 300000)
   }
  }
}
