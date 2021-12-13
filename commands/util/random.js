module.exports = {
    name: "random",
    description: "Get a random number from 0-10!",
    category: "util",
    run: async (bot, message, args) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

          message.channel.send(getRandomInt(10))
    },
  };