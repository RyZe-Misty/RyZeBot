module.exports = (Discord, client, message) =>{
    const prefix = '!';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permissions ${perm}`);
            }
            if(!message.member.permissions.has(perm)){
                invalidPerms.push(perm);
            }
        }
        if (invalidPerms.length){
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
    }

    /* BELOW CODE IS FOR MESSAGE ANTI-SPAM PROVIDED BY the 'cuber#1001' */
    
    let AS = {}; //Anti-Spam

    const timeAS = 5; //5 seconds
    const msgsAS = 3; //3 messages

//you will be allowed to send 3 messages in 5 seconds every message after that for the rest of the 5 seconds will be deleted.

    client.on('messageCreate', async(message) => {
        if(message.author.bot || !message.guild) return;
        if(!AS[message.author.id]) AS[message.author.id] = {};
        if(!AS[message.author.id][message.guild.id]) AS[message.author.id][message.guild.id] = 1, setTimeout(() => {delete AS[message.author.id][message.guild.id]}, timeAS * 1000);
        else if(AS[message.author.id][message.guild.id] < msgsAS) AS[message.author.id][message.guild.id]++;
        else if(AS[message.author.id][message.guild.id] >= msgsAS) await message.delete(), message.reply(`Don't spam!`).then(setTimeout(() => {e.delete()}, 5000));
        else AS[message.author.id] = {}, AS[message.author.id][message.guild.id] = 1
    })
}