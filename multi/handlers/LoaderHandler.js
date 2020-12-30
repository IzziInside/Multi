const { bot } = require('../index');
const config = require('../utils/config.js');

bot.on("ready", () => {
    console.log('Sucessfully connected to Discord!');
    console.log(`Client connected with ${bot.guilds.cache.size} guilds, ${bot.channels.cache.size} channels, and ${bot.users.cache.size} users.  name: ${bot.user.username}`);

    bot.user.setActivity("some music", { type: "LISTENING" });

    const activityArray = [
        `${config.PREFIX}help`,
        `${bot.guilds.cache.size} servers`,
        `http://invite.botmulti.xyz/`
    ];

    setInterval(() => {
        let activity = activityArray[Math.floor(Math.random() * activityArray.length)];
        bot.user.setActivity(activity, { type: "LISTENING" });
    }, 15000);
});