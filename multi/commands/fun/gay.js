const Discord = require('discord.js');
var jimp = require('jimp');
const Jimp = require('jimp');

module.exports = {
  name: "gay",
  category: "fun",
  description: "Gay command.",
  run: async(bot, message, args) => {
  let image = await jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL({format: 'png'}) : message.author.avatarURL({format: 'png'}))
  let gay = await jimp.read('https://celebrant.naomikorolew.com.au/wp-content/uploads/rainbow-gay-pride-flag.fw_-1024x1024.png');

  Promise.all([image, gay]).then(() => {
     image.resize(1024, 1024)
     gay.resize(1024, 1024)
     image.composite(gay, 0, 0).write('gay.png')
     message.channel.send({files: ['gay.png']})
  })
  }
}
