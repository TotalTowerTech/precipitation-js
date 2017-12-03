module.exports.run = async (client, message, args, throwex) => {
    let warnCount = 0;
    const fs = require('fs');
    const filter = m => m.author == message.author;
    let foundUser = message.mentions.users.first();
    message.channel.send('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.');
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 15000,
        errors: ['time']
    }).then(collected => {
        message.channel.send("lol how do i warn");
        }).catch(() => {
            message.channel.send("No reason was specified. Cancelling action.");
        })
    }

module.exports.help = {
    name: 'warn',
    args: '[userToFind]',
    notes: 'When a kick is too much, just use this short command!',
    category: 'Moderation'
}