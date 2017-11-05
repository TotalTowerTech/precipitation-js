module.exports.run = async (client, message, args) => {
    if(!client.user.hasPermission("BAN_MEMBERS")) return message.reply("I do not have permission to ban.");
    if(!message.user.hasPermission("BAN_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:**: Insufficient permissions.`);

    let person = message.mentions.users.first;
    if (person.length <= 0 || person == null) return message.reply("**:no_entry_sign: ERROR:** No one was pinged.");

    person.ban(args[0]).then(member => {
        message.reply(`${member.user.username} has been banned with reason ${args[0]}.`)
    })
}
module.exports.help = {
    name: 'ban',
    args: '[person], [args]',
    notes: 'Bans a person.'
}