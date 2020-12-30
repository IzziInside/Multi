const { bot } = require('../index');
const Discord = require("discord.js");
const config = require('../utils/config.js');
const functionSlinger = require('./functionSlinger.js');

const showErrors = true;

process.on('unhandledRejection', error => {
	if(showErrors){
        console.log('\nError Handled');
        console.log(`Date: ${functionSlinger.formatDate(new Date(), false)}`);
        console.log(error);
	}
});

module.exports = {
    handleError: function (message, bot, err){
        if(err == "DiscordAPIError: Missing Permissions") return;
        
        const logChannel = bot.channels.cache.get(config.ERROR_LOGS_CHANNEL);
        if(!logChannel) return;

        message.channel.send("Někde se stala chyba, ale neboj, vývojáři již o této chybě ví a rychle ji opraví.");
        logChannel.send(`${functionSlinger.formatDate(new Date(), false)}, on **${message.guild.name}** (${message.guild.id}), by **${message.author.tag}** (${message.author.id}) \n\`\`\`${err}\`\`\``);
    }
};