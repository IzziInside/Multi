const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  category: "information",
  description: "Serverinfo command.",
  run: async(bot, message, args) => {
   let verify = {
      "NONE": "Žádný",
      "LOW": "Nízký",
      "MEDIUM": "Mediúm",
      "HIGH": "(╯°□°）╯︵  ┻━┻",
      "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"};

  let serverregion = {
    "europe": ":flag_eu: Evropa",
    "brazil": ":flag_br: Brazílie",
    "hongkong": ":flag_hk: Hong Kong",
    "india": ":flag_in: Indie",
    "japan": ":flag_jp: Japonsko",
    "russia": ":flag_ru: Rusko",
    "singapore": ":flag_sg: Singapur",
    "southafrica": ":flag_za: Jižní Afrika",
    "sydney": ":flag_au: Austrálie",
    "us-central": ":flag_us: Střední Amerika",
    "us-east": ":flag_us: Východ Spojených států amerických",
    "us-south": ":flag_us: Jížní Amerika",
    "us-west": ":flag_us: Západ Spojených států amerických"
  }

  let guild = message.guild;
  const server = new Discord.MessageEmbed()
  .setAuthor(`${guild.name}`)
  .setThumbnail(guild.iconURL({format: 'png', format: 'gif'}))
  .addField('Owner', `${guild.owner} (**${guild.ownerID}**)`)
  .addField('Jméno', `**${guild.name}**`)
  .addField('Región', `**${serverregion[guild.region]}**`)
  .addField('Úroveň ověření', `${verify[guild.verificationLevel]}`)
  .addField('Počet kanalů', `**${guild.channels.cache.size}**`)
  .addField('Počet rolí', `**${guild.roles.cache.size}**`)
  .addField('Počet emoji', `**${guild.emojis.cache.size}**`)
  .addField('Uživatelé', `**${guild.members.cache.filter(member => !member.user.bot).size}** **(${guild.members.cache.filter(member => member.user.bot).size} boti)**`)
  .addField('Server vytvořen', `**${guild.createdAt}**`)
  .setColor('#E5E5E5')
  .setFooter(`ID: ${guild.id}`)
  message.channel.send(server)
  }
}
