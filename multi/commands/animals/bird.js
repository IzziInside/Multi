const Discord = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "bird",
    category: "animals",
    description: "Send random picture of bird",
    run: async (bot, message, args) => {
        const { body } = await superagent.get('https://some-random-api.ml/img/birb');
        const catEmbed = new Discord.MessageEmbed()
            .setTitle('Bird')
            .setImage(body.file)
            .setURL(body.file)
            .setColor('RANDOM')
            .setFooter(`Požadováno od ${message.author.tag} | API: http://aws.random.cat/meow`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp();
        message.channel.send(catEmbed);
    }
}