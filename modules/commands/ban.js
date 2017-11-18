module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js')
    
    try {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:** Insufficient permissions.`);

        let person = message.guild.member(message.mentions.users.first());
        if (person.size <= 0) return message.reply("**:no_entry_sign: ERROR:** No one was pinged.");
        message.guild.member(person).ban(args.slice(1).join(" ")).then(member => {
            message.reply(`${member.user.username} has been banned with reason ${args.slice(1).join(" ")}.`)
            member.send(`You have been banned from **${message.guild.name}** with the following reason: \r\n\`\`\`${args.slice(1).join(" ")}\`\`\`\`\r\n Goodbye, and we hope to never see you again.`)
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
