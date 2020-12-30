const Discord = require('discord.js')
const config = require("../../utils/config.js");

const emojis = {
    // Čísla ------
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    // -----------

    // Symboly ------
    '*': ":asterisk:",
    '!': ":exclamation:",
    '?': ":question:",
    '#': ":hash:",
    // --------------

    'a': ":regional_indicator_a:",
    'á': ":regional_indicator_a:",
    'b': ":regional_indicator_b:",
    'c': ":regional_indicator_c:",
    'č': ":regional_indicator_c:",
    'd': ":regional_indicator_d:",
    'ď': ":regional_indicator_d:",
    'e': ":regional_indicator_e:",
    'ě': ":regional_indicator_e:",
    'f': ":regional_indicator_f:",
    'g': ":regional_indicator_g:",
    'h': ":regional_indicator_h:",
    'ch': ":regional_indicator_c::regional_indicator_h:",
    'i': ":regional_indicator_i:",
    'í': ":regional_indicator_i:",
    'j': ":regional_indicator_j:",
    'k': ":regional_indicator_k:",
    'l': ":regional_indicator_l:",
    'm': ":regional_indicator_m:",
    'n': ":regional_indicator_n:",
    'ň': ":regional_indicator_n:",
    'o': ":regional_indicator_o:",
    'ó': ":regional_indicator_o:",
    'p': ":regional_indicator_p:",
    'q': ":regional_indicator_q:",
    'r': ":regional_indicator_r:",
    'ř': ":regional_indicator_r:",
    's': ":regional_indicator_s:",
    'š': ":regional_indicator_s:",
    't': ":regional_indicator_t:",
    'ť': ":regional_indicator_t:",
    'u': ":regional_indicator_u:",
    'ú': ":regional_indicator_u:",
    'ů': ":regional_indicator_u:",
    'v': ":regional_indicator_v:",
    'w': ":regional_indicator_w:",
    'x': ":regional_indicator_x:",
    'y': ":regional_indicator_y:",
    'ý': ":regional_indicator_y:",
    'z': ":regional_indicator_z:",
    'ž': ":regional_indicator_z:",
    // Capslock ------------------
    'A': ":regional_indicator_a:",
    'Á': ":regional_indicator_a:",
    'B': ":regional_indicator_b:",
    'C': ":regional_indicator_c:",
    'Č': ":regional_indicator_c:",
    'D': ":regional_indicator_d:",
    'Ď': ":regional_indicator_d:",
    'E': ":regional_indicator_e:",
    'Ě': ":regional_indicator_e:",
    'F': ":regional_indicator_f:",
    'G': ":regional_indicator_g:",
    'H': ":regional_indicator_h:",
    'CH': ":regional_indicator_c::regional_indicator_h:",
    'I': ":regional_indicator_i:",
    'Í': ":regional_indicator_i:",
    'J': ":regional_indicator_j:",
    'K': ":regional_indicator_k:",
    'L': ":regional_indicator_l:",
    'M': ":regional_indicator_m:",
    'N': ":regional_indicator_n:",
    'Ň': ":regional_indicator_n:",
    'O': ":regional_indicator_o:",
    'Ó': ":regional_indicator_o:",
    'P': ":regional_indicator_p:",
    'Q': ":regional_indicator_q:",
    'R': ":regional_indicator_r:",
    'Ř': ":regional_indicator_r:",
    'S': ":regional_indicator_s:",
    'Š': ":regional_indicator_s:",
    'T': ":regional_indicator_t:",
    'Ť': ":regional_indicator_t:",
    'U': ":regional_indicator_u:",
    'Ú': ":regional_indicator_u:",
    'Ů': ":regional_indicator_u:",
    'V': ":regional_indicator_v:",
    'W': ":regional_indicator_w:",
    'X': ":regional_indicator_x:",
    'Y': ":regional_indicator_y:",
    'Ý': ":regional_indicator_y:",
    'Z': ":regional_indicator_z:",
    'Ž': ":regional_indicator_z:",
    // ---------------------------
 }


module.exports = {
  name: "emojify",
  category: "fun",
  description: "Emojify command",
  run: async(bot, message, args) => {
  if(args.length < 1) {
      const argserr = new Discord.MessageEmbed()
      .setTitle('Stala se chyba!')
      .setDescription(`<:crossx:771020834718351370> **Příkaz který chceš použít potřebuje slovo nebo větu: \`\`${config.PREFIX}emojify [slovo nebo větu]\`\`**`)
      .setColor('RED')
      return message.channel.send(argserr)
  }
  message.channel.send(args.join(' ').split('').map(e => emojis[e] || e).join(''))
  }
}
