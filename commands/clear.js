module.exports ={

    name: 'clear',
    description: "Clear messages",
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Enter an actual number.");

        if (args[0] > 100) return message.reply("You can't delete more than 100 messages.");
        if(args [0] < 1) return message.reply("You have to delete at least 1 message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}