module.exports = {

    name: 'ping',
    description: "Ping test",
    async execute(client, message, args, Discord) {
        message.reply("Pong! RyZe up btw.")
    }

}