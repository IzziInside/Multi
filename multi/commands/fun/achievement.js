const Discord = require('discord.js');
const config = require("../../utils/config.js");

module.exports = {
  name: "achievement",
  category: "fun",
  description: "Bot sends achievement with custom text.",
  run: async(bot, message, args) => {
  const trophy = args.join("+")
  var evalmath = Math.floor((Math.random() * 39) + 1);

  if(!trophy) {
    const trophysayerror = new Discord.MessageEmbed()
    .setTitle('Stala se chyba!')
    .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}achievement [slovo nebo větu]\`\`**`)
    .setColor('RED')
    return message.channel.send(trophysayerror)
  }
  const achievement = new Discord.MessageEmbed()
  .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${evalmath}&h=Achievement+Get%21&t=${trophy}`)
  .setColor('RANDOM')
  message.channel.send(achievement)
  }
}
