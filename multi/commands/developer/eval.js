const Discord = require("discord.js");

//Slingers
const functionSlinger = require('../../Slingers/functionSlinger.js');
const errorSlinger = require('../../Slingers/errorSlinger.js');

module.exports = {
    name: "eval",
    category: "developer",
    description: "eval",
    run: async (bot, message, args) => {
        if(message.author.id != "417403958814965771" && message.author.id != "273813194861051907" && message.author.id != "312651352494964736") return;

        if(!args.length) {
           const errembed = new Discord.MessageEmbed()
           .setTitle('Stala se chyba!')
           .setDescription('<:crossx:771020834718351370> **Napiš nìco do pøíkazu eval!**')
           .setColor('RED')
           return message.channel.send(errembed)
       }
        try{
            const code = args.join(" ");
            let evaled = eval(code);
            let rawEvaled = evaled;
            if(typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

            let toOutput = functionSlinger.clean(evaled)
            .replace(require('../../utils/mainConfig.js').TOKEN, "?");

            let embed = new Discord.MessageEmbed()
                .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Output", `\`\`\`js\n${toOutput}\n\`\`\``)
                .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
                .setColor('GREEN');
            message.channel.send({embed});
        }catch(err){
            message.channel.send(`\`ERROR\` \`\`\`js\n${functionSlinger.clean(err)}\n\`\`\``);
        }
    }
}
