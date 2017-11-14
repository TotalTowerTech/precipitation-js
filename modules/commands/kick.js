module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js')
    try {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:**: Insufficient permissions.`);

        let person = message.guild.member(message.mentions.users.first());
        if (person.length <= 0 || person == null || person.size <= 0) return message.reply("**:no_entry_sign: ERROR:** No one was pinged.");

        message.guild.member(person).kick(args.join(" ")).then(member => {
            message.reply(`${member.user.username} has been kicked with reason ${args.join(" ").substr(person.length - 1)}.`)
            member.send(`You have been kicked from **${client.guild.name}** with the following reason: \r\n\`\`\`${args.join(" ").substr(person.length - 1)}\`\`\`\`\n You may be able to join, but it's best to wait a few days to set back a bit.`)
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
