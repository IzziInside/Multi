const Discord = require('discord.js')
const config = require("../../utils/config.js");

module.exports = {
  name: "say",
  category: "fun",
  description: "Say command.",
  run: async(bot, message, args) => {
  const say = args.join(" ");
  const sayembed = args.join(" ").slice(5);
  if(!say) {
            const errorsay = new Discord.MessageEmbed()
            .setTitle('Stala se chyba!')
            .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}say [slovo nebo větu]\`\`**`)
            .setColor('RED')
            message.channel.send(errorsay)
  }
  if(args[0] == 'embed') {
    if(!sayembed) {
      const errorsayembed = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}say embed [slovo nebo větu]\`\`**`)
      .setColor('RED')
      return message.channel.send(errorsayembed)
    }
    const embedsay = new Discord.MessageEmbed()
    .setDescription(sayembed)
    .setColor('RANDOM')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embedsay)
  }
  return message.channel.send(say)
  }
}
