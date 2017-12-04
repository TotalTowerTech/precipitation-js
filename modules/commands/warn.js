module.exports.run = async (client, message, args, throwex) => {
    let warnCount = 0;
    const fs = require('fs');
    const filter = m => m.author == message.author;
    let foundUser = message.mentions.users.first();
    message.channel.send('Please enter a reason for warning.');
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 15000,
        errors: ['time']
    }).then(collected => {
            message.channel.send("This is where I'd write to a JSON file if I could.")
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