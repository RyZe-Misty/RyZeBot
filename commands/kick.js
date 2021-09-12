module.exports ={
    name: 'kick',
    description: "This commands kicks someone from the server.",
    async execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.reply("User has been kicked.");
        }else{
            message.reply("You couldn't kick that member. Are you sure you typed the member's name correctly?")
        }

    }

}