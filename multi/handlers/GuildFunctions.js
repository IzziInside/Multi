const { bot } = require('../index');
const config = require('../utils/config.js');
const db = require('quick.db');

bot.on("guildMemberAdd", (member) => {
    const autorole = db.get(`autorole_${member.guild.id}`);
    const channel = db.get(`welcome_${member.guild.id}`);
    
    if(channel === null) return;
  
    const welcomeembed = new Discord.MessageEmbed()
        .setAuthor(`Uživatel ${member.user.username} se připojil do ${member.guild.name}!`, member.user.avatarURL({dynamic: true, format: 'png'}))
        .setDescription(`**👋 ${member.user.tag} se připojil na server, jsi tu ${member.guild.memberCount} člověk na tomto serveru!**`)
        .setThumbnail(member.guild.iconURL({dynamic: true, format: 'png'}))
        .setColor('GREEN');
  
    bot.channels.cache.get(channel).send(welcomeembed);
    member.roles.add(autorole);
});
  
  bot.on("guildMemberRemove", (member) => {
    const channel = db.get(`leave_${member.guild.id}`);
    if(channel === null) return;
  
    const leaveEmbed = new Discord.MessageEmbed()
        .setAuthor(`Uživatel ${member.user.username} se odpojil ze serveru ${member.guild.name}`, member.user.avatarURL({dynamic: true, format: 'png'}))
        .setDescription(`👋 **${member.user.tag} se odpojil ze serveru, bez ${member.user.username} jsme tu pouze ${member.guild.memberCount} lidí.**`)
        .setThumbnail(member.guild.iconURL({dynamic: true, format: 'png'}))
        .setColor('RED');
    bot.channels.cache.get(channel).send(leaveEmbed);
});

bot.on("guildCreate", guild => {
    const channel = bot.channels.cache.get(config.SERVER_LOGS_CHANNEL);
    if(channel == null) return;

    channel.send(`Multi byl přidán na server **${guild.name}** (${guild.id}).`);
});

bot.on("guildDelete", guild => {
    const channel = bot.channels.cache.get(config.SERVER_LOGS_CHANNEL);
    if(channel == null) return;

    channel.send(`Multi byl odebrán ze serveru **${guild.name}** (${guild.id}).`);
});