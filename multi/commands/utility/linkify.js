const { gql, request } = require('graphql-request');
const Discord = require('discord.js');

module.exports = {
  name: "linkify",
  category: "utility",
  description: "Linkify command",
  run: async(bot, message) => {
    var _a;
    const endpoint = "https://graphql.linkify.cz/api/internal/graphql";
    let url = "";
    let alias = "";
    // získá parametry příkazu
    const cmd = message.content.replace(".linkify", "").trim();
    const args = cmd.match(/(?<=(['"])\b)(?:(?!\1|\\).|\\.)*(?=\1)/g);
    // získá url
    if (args === null || args === void 0 ? void 0 : args[0])
        url = args[0];
    else
        return message.channel.send({ embed: {
            "title": "Stala se chyba!",
            "description": `<:crossx:709001978931576882> **URL je neplatná (musí být v uvozovkách ("...") )**`,
            "color": 0xfa4141,
         }
      });
    // získá alias
    // u aliasu nevadí pokud je neplatný, jelikož si ho server sám vygeneruje/upraví
    alias = (_a = args[1]) !== null && _a !== void 0 ? _a : "";
    // graphql mutace která jednoduše přidá odkaz
   const query = gql`
   mutation LinkifyAddLink($token: String!, $url: String!, $alias: String!) {
     linkify_add_link(token: $token, language: LANG_CS, url: $url, alias: $alias) {
       success
       error
       target
       alias
       message
     }
   }
 `;
    const response = await request(endpoint, query, { token: "TOKEN", url, alias });
    console.log({ response });
    const add_link = response.linkify_add_link;
    // pokud se nic neposralo, odpoví s "... <doména>/<alias>"
    if (add_link.success)
        message.channel.send({embed: {
         "description": add_link.message,
         "color": 0x5af28a,
       }
    });
    else {
        const errors = add_link.errors.split("|");
        message.reply("Následující errory nastaly při přidávání odkazu: " + errors.join(", "));
    }
  }
};
