const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "editsnipe",
  description: "Get an edit snipe of your choice in the channel!",
  usage: "[snipe number]",
  category: "util",
  run: async (bot, message, args) => {
    const editSnipes = bot.editSnipes.get(message.channel.id) || [];
    const msg = editSnipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`That is not a valid snipe...`);
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${editSnipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  },
};