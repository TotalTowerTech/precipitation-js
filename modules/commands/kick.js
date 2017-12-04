module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js')
    try {
        if (!message.author.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry_sign: **ERROR:** Insufficent permissions.");
        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("You gotta ping someone!");
        message.guild.member(person).kick(args.slice(1).join(" ")).then(member => {
            message.channel.send(`${member.user.username} has been kicked with reason ${args.slice(1).join(" ")}`)
            member.send(`You have been kicked from **${message.guild.name}** with the following reason: \r\n\`\`\`${args.slice(1).join(" ")}\`\`\`\`\r\nIt's best to wait a few days before joining again.`);
        }).catch(err => {
            throwex(err);
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
