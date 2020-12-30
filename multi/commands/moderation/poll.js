const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "poll",
  category: "moderation",
  description: "Poll command.",
  run: async(bot, message, args) => {
  if(!message.member.hasPermission(["ADMINISTRATOR"])) {
           const warnerr = new Discord.MessageEmbed()
           .setTitle('Stala se chyba!')
           .setDescription('<:crossx:771020834718351370> **Příkaz který chceš použít, je dostupný pouze pro ty co mají pravomoce.**\n\n⚠ **Pro tento příkaz budeš potřebovat pravomoc: ``ADMINISTRATOR``**')
           .setColor('RED')
           return message.channel.send(warnerr)
  }
  let pollsay = args.join(" ")
  if(!pollsay) {
    const pollerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}poll [slovo nebo větu]\`\`**`)
    .setColor('RED')
    return message.channel.send({embed: pollerror})
  }
  const poll = new Discord.MessageEmbed()
  .setTitle('Hlasování')
  .setDescription(pollsay)
  .setColor('RANDOM')
  .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setTimestamp()
  .setFooter(`Hlasování vytvořil: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  const emotepoll = await message.channel.send({embed: poll})
  emotepoll.react("👍")
  .then(() => emotepoll.react("👎"))
  }
}
