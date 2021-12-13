const { MessageEmbed } = require("discord.js");
module.exports = async (oldMessage, newMessage) => {
  try {
    if (message.author.bot) return;
    const editsnipes = oldMessage.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
      content: oldMessage.content,
      author: oldMessage.author,
      image: oldMessage.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: new Date().toLocaleString("en-US", {
        dataStyle: "full",
        timeStyle: "short",
      }),
    });
    editsnipes.splice(10);
    oldMessage.client.snipes.set(oldMessage.channel.id, editsnipes);
    let embed = new MessageEmbed()
      .setTitle(`New message deleted!`)
      .setDescription(
        `**The user ${message.author.tag} has deleted a message in <#${oldMessage.channel.id}>**`
      )
      .addField(`Content`, message.content, true)
      .setColor(`RED`);
    let channel = oldMessage.guild.channels.cache.find(
      (ch) => ch.name === "bot-log"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};