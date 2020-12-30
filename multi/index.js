const Discord = require('discord.js');
const bot = new Discord.Client({disableMentions: 'everyone'});
const ascii = require("ascii-table");
const fs = require('fs');

bot.commands = new Discord.Collection();
bot.errorSlinger = require('./Slingers/errorSlinger.js');

//Handlers
fs.readdir("./handlers/", (err, files) => {
    const table = new ascii().setHeading("Handler", "Load status");
    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) return console.log("There are no handlers to load...");
    jsfiles.forEach((f, i) => {
        require(`./handlers/${f}`); 
        err ? table.addRow(f, 'Failed') : table.addRow(f, 'Loaded');
    });
    console.log(table.toString());
}); 

bot.categories = fs.readdirSync('./commands/');
module.exports ={
    bot: bot
};

bot.login(require('./utils/mainConfig').TOKEN);