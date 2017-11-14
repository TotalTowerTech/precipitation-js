module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js')
    try {
        if (!client.user.hasPermission("BAN_MEMBERS")) return message.reply("I do not have permission to ban.");
        if (!message.user.hasPermission("BAN_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:**: Insufficient permissions.`);

        let person = message.guild.member(message.mentions.users.first());
        if (person.length <= 0) return message.reply("**:no_entry_sign: ERROR:** No one was pinged.");

        message.guild.member(person).ban(args.join(" ")).then(member => {
            message.reply(`${member.user.username} has been banned with reason ${args.join(" ")}.`)
        })
    } catch (error) {
        throwex(error);
    }
}
module.exports.help = {
    name: 'ban',
    args: '[person], [args]',
    notes: 'Bans a person.',
    category: 'Moderation'
}
