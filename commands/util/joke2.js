module.exports = {
    name: 'issexy',
    run: async (bot, message, args) => {
        if(!args[0] && message.author.id !== '714494288838262844') {
            message.channel.send('You are sexy!');
        } else if(!args[0] && message.author.id === '714494288838262844') {
            message.channel.send('You are not sexy!');
        }

        if(args[0] !== '714494288838262844' && message.mentions.users.first().id !== '714494288838262844') {
            message.channel.send('They are sexy!');
        } else {
            message.channel.send('They are not sexy!');
        }
    }
}