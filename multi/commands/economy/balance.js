const Discord = require("discord.js")
const db = require('quick.db');

module.exports = {
   name: "balance",
   category: "economy",
   description: "balance popisek",
   run: async (bot, message, args) => {
      let balance = db.fetch(`balance_${message.author.id}_${message.guild.id}`);
      if(balance === null) balance = "0";
      const balanceEmbed = new Discord.MessageEmbed()
         .setTitle('Balance')
         .setDescription(`**Váš zůstatek je ${balance}$**`)
         .setThumbnail(message.author.displayAvatarURL({dynamic: true, format: 'png'}))
         .setFooter('🤑 Aby jsi mohl získat nějaké peníze, tak používej příkazy: work, daily\n');
      message.channel.send(balanceEmbed);
   }
}