module.exports ={
    name: 'ban',
    description: "This command kicks someone from the server.",
    async execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned.");
        }else{
            message.channel.send("You couldn't ban that member. Are you sure you typed the member's name correctly?");
        }
    
    
    }

}