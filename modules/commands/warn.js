module.exports.run = async (client, message, args, throwex) => {
    let warnCount = 0;
    const fs = require('fs');
    let foundUser = message.member.mentions.first();
    message.channel.send('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
        .then(() => {
            message.channel.awaitMessages(reason => reason.content == message.content, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("lol how do i warn");
    })
    .catch(() => {
      message.channel.send('There was no collected message that passed the filter within the time limit!');
    });
});
}
module.exports.help = {
    name: 'warn',
    args: '[userToFind]',
    notes: 'When a kick is too much, just use this short command!',
    category: 'Moderation'
}