const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async message => {
    if (message.author.bot) return;
    let prefix = '+';
    let array = message.content.split(" ");
    let command = array[0];
    let args = array.slice(" ");
    if (!command.startsWith(prefix)) return;
    switch (command) {
        default:
            message.channel.send("Invalid command.");
            break;
        case "ping":
            var oldmsgLatency = Date.now();
            message.channel.send('🕒 Calculating Ping..').then(msg => {
                msg.edit(`🏓 Pong! Your ping is ${Math.round(client.ping)}ms`)
            })
            break;
        case "kick":
            if (!message.author.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permissions required to kick, you scrub.");
            let person = message.guild.member(message.mentions.users.first());
            if (person == null) return message.reply("You gotta ping someone!");
            message.guild.member(person).kick(args.slice(1).join(" ")).then(member => {
                message.channel.send(`${member.user.username} has been kicked with reason ${args.slice(1).join(" ")}`)
            }).catch(err => {
                message.channel.send(err);
            })
            break;
    }
})

client.login("mfa.hIBPB4nGP_293r-dqfAWxjxTcFTBb6Sk1oVYhU8uxm5bFFMwhQz4Z_5_fpsdKDJ97dfh8DPsLn5LRpXL7WnS");