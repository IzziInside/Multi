const { Client, Message } = require('discord.js');
const { gql, request } = require('graphql-request');

module.exports = {
  name: "linkifystats",
  category: "utility",
  description: "Linkifystats command.",
  run: async(bot, message, args) => {
    const endpoint = "https://graphql.linkify.cz/api/internal/graphql";
    // graphql query které získá staty
    const query = gql `
    query LinkifyStats($token: String!) {
      linkify_stats(token: $token) {
        redirected
        created
      }
    }
  `;
    const response = await request(endpoint, query, { token: "TOKEN" });
    console.log({ response });
    const stats = response.linkify_stats;
    if (!stats.redirected || !stats.created)
        return message.reply("Nastala chyba při získávání statistik");
    message.reply(`
Linkify Statistiky
 - Redirected: ${stats.redirected}
 - Created:    ${stats.created}`);
  }
}
