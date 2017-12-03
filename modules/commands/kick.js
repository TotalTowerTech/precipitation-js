module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js')
    try {
        if (!message.author.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permissions required to kick, you scrub.");
        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("You gotta ping someone!");
        message.guild.member(person).kick(args.slice(1).join(" ")).then(member => {
            message.channel.send(`${member.user.username} has been kicked with reason ${args.slice(1).join(" ")}`)
        }).catch(err => {
            message.channel.send(err);
        })
        
    } catch (error) {
        throwex(error);
    }
}
module.exports.help = {
    name: 'kick',
    args: '[person], [args]',
    notes: 'Kicks a person.',
    category: 'Moderation'
}
