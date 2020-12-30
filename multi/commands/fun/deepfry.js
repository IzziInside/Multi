const Discord = require('discord.js')
var jimp = require('jimp')

module.exports = {
  name: "deepfry",
  category: "fun",
  description: "Deepfry command.",
  run: async(bot, message, args) => {
  let image = await jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL({format: 'png'}) : message.author.avatarURL({format: 'png'}))
  jimp.read(image).then(() => {
    image.contrast(1)
    image.resize(825, 825)
    image.write('deepfry.png')
    message.channel.send({files: ['deepfry.png']})
  }).catch(err => console.error(err))
  } 
}
