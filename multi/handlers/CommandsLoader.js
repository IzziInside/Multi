const { bot } = require('../index');
const fs = require("fs");
const ascii = require("ascii-table");
const db = require('quick.db');
const config = require('../utils/config.js');

bot.on('message', async (message) => {
	if(message.guild === null) return;
	if(message.channel.type === 'dm') return;

	if(!message.content.startsWith(config.PREFIX)) return;

	if(!message.member) message.member = await message.guild.fetchMember(message);
	
	if(db.fetch(`blacklist_${message.author.id}`) === "blacklisted") return;

	const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g);
	const cmd = args.shift();

	if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);

    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

  	if(command) command.run(bot, message, args).catch(function (err){ bot.errorSlinger.handleError(message, bot, err) });
});

const table = new ascii().setHeading("Command", "Directory", "Load status");
fs.readdirSync("./commands/").forEach(dir => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    for(let file of commands){
        let pull = require(`../commands/${dir}/${file}`);

        if(pull.name){
            bot.commands.set(pull.name, pull);
            table.addRow(file, dir, 'Loaded');
        }else{
            table.addRow(file, dir, `Failed`);
            continue;
        }
        if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))
    }
});
console.log(table.toString());