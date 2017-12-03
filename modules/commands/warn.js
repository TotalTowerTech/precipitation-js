module.exports.run = async (client, message, args, throwex) => {
    let warnCount = 0;
    const fs = require('fs');
    let foundUser = message.guild.members.find(args[0]);
    message.channel.send("Please enter a reason to warn " + foundUser + ".");
    message.channel.awaitMessages(30);
    message.channel.send("err, how do i warn");
}
module.exports.help = {
    name: 'warn',
    args: '[userToFind]',
    notes: 'When a kick is too much, just use this short command!',
    category: 'Moderation'
}