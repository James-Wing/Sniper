module.exports = {
    name: 'iswilly',
    run: async (bot, message, args) => {
        if(args[0] !== '714494288838262844' && message.mentions.users.first().id !== '714494288838262844') {
            return message.channel.send(`${message.mentions.members.first().displayName} is not Willy.`);
        } else {
            message.channel.send(`<@!714494288838262844> is Willy!`)
        }
    }
}