module.exports ={
    name: 'ban',
    description: "This command kicks someone from the server.",
    async execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.reply("User has been banned.");
        }else{
            message.reply("You couldn't ban that member. Are you sure you typed the member's name correctly?");
        }
    
    
    }

}