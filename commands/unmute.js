module.exports = {
    name: 'unmute',
    description: 'Unmutes a user.',
    async execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
        }else{
            message.channel.send("Cant unmute that member. You sure you wrote the name correctly?")
        }
    }
}