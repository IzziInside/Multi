const Discord = require('discord.js');
const config = require("../../utils/config.js");
const db = require('quick.db');

exports.run = async(bot, message, args) => {
    let guildrole = message.mentions.roles.first();
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        const permserr = new Discord.MessageEmbed()
        .setTitle('Stala se chyba!')
        .setDescription('<:crossx:709001978931576882> **Příkaz který chceš použít je dostupný pouze pro ty kteří mají pravomoce.\n\n⚠ Pro tento příkaz potřebuješ pravomoc: ``ADMINISTRATOR``**')
        .setColor('RED')
        return message.channel.send(permserr)
    }
    if(args[0] === "remove" || args[0] === "delete") {
        db.delete(`autorole_${message.author.id}`, guildrole.id)
        const deleteembed = new Discord.MessageEmbed()
        .setDescription('<:check:709002171588542604> **Úspěšně se smazala funkce autorole z tohoto serveru.**')
        .setColor('GREEN')
        return message.channel.send(deleteembed)
    }
   if(!guildrole) {
       const roleserr = new Discord.MessageEmbed()
       .setTitle('Stala se chyba!')
       .setDescription(`<:crossx:709001978931576882> **Pro tento příkaz musíš označít nějakou roli: \`\`${config.prefix}setautorole [role]\`\`\n\n⚠ Pokud chcete vypnout funkci autorole napište: \`\`${config.prefix}autorole delete [@role]\`\`**`)
       .setColor('RED')
       return message.channel.send(roleserr)
   }
   db.set(`autorole_${message.guild.id}`, guildrole.id)
   const autoroleembed = new Discord.MessageEmbed()
   .setDescription('<:check:709002171588542604> **Úspěšně se nastavila autorole do tohoto serveru!**')
   .setColor('GREEN')
   message.channel.send(autoroleembed)
}