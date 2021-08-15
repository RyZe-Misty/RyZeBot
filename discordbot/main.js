console.clear();
const Discord = require("discord.js");
const config = require("./Data/Config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const prefix = (config.prefix);
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commands_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(config.token);