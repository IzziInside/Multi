const Discord = require('discord.js');
const config = require("../../utils/config.js");
const verze = "v1.40b";

module.exports = {
  name: "help",
  category: "information",
  description: "Help command.",
  run: async(bot, message, args) => {
  const help = new Discord.MessageEmbed()
   .setAuthor("Kategorie v Multim", bot.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`**Pokud si nevíte rady s příkazama používejte vždycky help.**`)
   .addField(`ℹ Information`, `\`\`\`${config.PREFIX}serverinfo ${config.PREFIX}stats ${config.PREFIX}ping ${config.PREFIX}userinfo ${config.PREFIX}weather ${config.PREFIX}avatar ${config.PREFIX}icon\`\`\``)
   .addField(`🤣 Fun`, `\`\`\`${config.PREFIX}8ball ${config.PREFIX}meme ${config.PREFIX}howgay ${config.PREFIX}gay ${config.PREFIX}howhorny ${config.PREFIX}reddit ${config.PREFIX}achievement ${config.PREFIX}magik ${config.PREFIX}deepfry ${config.PREFIX}fact ${config.PREFIX}clapify ${config.PREFIX}foodporn ${config.PREFIX}say ${config.PREFIX}emojify\`\`\``)
   .addField(`💵 Economy`, `\`\`\`${config.PREFIX}profile ${config.PREFIX}balance ${config.PREFIX}daily ${config.PREFIX}work ${config.PREFIX}rep\`\`\``)
   .addField(`🛠  Moderation`, `\`\`\`${config.PREFIX}ban ${config.PREFIX}unban ${config.PREFIX}kick ${config.PREFIX}warn ${config.PREFIX}poll ${config.PREFIX}purge ${config.PREFIX}mute ${config.PREFIX}unmute\`\`\``)
   .addField(`🔨 Utility`, `\`\`\`${config.PREFIX}suggest ${config.PREFIX}bugreport ${config.PREFIX}setwelcome ${config.PREFIX}setleave ${config.PREFIX}setautorole\`\`\``)
   .addField(`<:linkify:771020835774660628>`, `\`\`\`${config.PREFIX}linkify ${config.PREFIX}linkifystats\`\`\``)
   .addField(`🐶 Animals`,  `\`\`\`${config.PREFIX}dog ${config.PREFIX}panda ${config.PREFIX}cat ${config.PREFIX}fox ${config.PREFIX}shibe ${config.PREFIX}bird ${config.PREFIX}koala\`\`\``)
   .addField(`📻 Music`, `\`\`\`m̶.̶p̶l̶a̶y̶  ${config.PREFIX}leave ${config.PREFIX}radio\`\`\``)
   .addField(`🔞 NSFW`, `\`\`\`${config.PREFIX}porn ${config.PREFIX}ass ${config.PREFIX}yuri ${config.PREFIX}thighs ${config.PREFIX}boobs ${config.PREFIX}pussy ${config.PREFIX}hentai ${config.PREFIX}rule34\`\`\``)
   .addField('\u200b', 'Support Server: **[ZDE](http://discord.botmulti.xyz/)** | Webová Stránka: **[ZDE](http://www.botmulti.xyz/)** | Invite Bota: **[ZDE](https://discord.com/api/oauth2/authorize?client_id=770779770534363147&permissions=8&scope=bot)**'      )
   .setFooter(`${verze} | Za jakýkoliv bugy se omlouvám, pokud uvidíte nějáké bugy kontaktuje Developera.`)
   .setColor("RANDOM");
   return message.channel.send(help);
 }
}
