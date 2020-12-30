const Discord = require("discord.js")
const config = require("../../utils/config.js");

const ball = [
  "Ano",
  "Nemyslím si",
  "S tvojí otázkou souhlasím.",
  "S tvojí otázkou nesouhlasím.",
  "Zkus to ještě jednou.",
  "Nerozumím tvým slovům.",
  "Na co že jsi se ptal?"
];

module.exports = {
    name: "8ball",
    category: "fun",
    description: "8ball popisek",
    run: async (bot, message, args) => {
        const quest = args.join(" ");
        if (!quest) {
            const errorEmbed = new Discord.MessageEmbed()
                .setTitle("Stala se chyba!")
                .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje otázku: \`\`${config.PREFIX}8ball [otázka]\`\`**`)
                .setColor("RED");
            return message.channel.send(errorEmbed);
        }
        const ballEmebed = new Discord.MessageEmbed()
            .setDescription(`Otázka zní: **${quest}**\n` + "Odpověd: **" + ball[Math.floor(Math.random() * ball.length)] + "**")
            .setColor("RANDOM")
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
        message.channel.send(ballEmebed);
    }
}