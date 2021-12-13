const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ship',
    aliases: ['s'],
    run: async (client, message, args) => {
        function randomNum(max) {
            return Math.floor(Math.random() * max);
        };
        
        let msgs;
        let msgs2;

        message.channel.send(`Who are you shipping?`)
        try {
            msgs = await message.channel.awaitMessages(
                u2 => u2.author.id === message.author.id,
                { time: 120000, max: 1, errors: ['No Response'] }
            );
            } catch (e) {
            message.channel.send(`You failed to respond within 2 minutes, ship cancelled!`);
        } try {
            message.channel.send(`Who/What will they be shipped with?`)
            msgs2 = await message.channel.awaitMessages(
                u2 => u2.author.id === message.author.id,
                { time: 120000, max: 1, errors: ['No Response'] }
        );
            } catch (e) {
            message.channel.send(`You failed to respond within 2 minutes, ship cancelled!`);
        } try {
            if(message.mentions.users.some(word => msgs.map(e => e.content).toString().includes(word))) {
                const embed1 = new MessageEmbed()
            }
            const reportEmbed = new MessageEmbed()
            .setTitle(`${msgs.map(e => e.content).toString()} is ${randomNum(100)}% compatible with ${msgs2.map(e => e.content).toString()}!`);

            message.channel.send(reportEmbed);
        } catch (e) {
            console.log(e);
        }
    }
}