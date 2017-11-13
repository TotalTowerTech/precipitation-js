module.exports.run = async (client, message, args) => {
    var roll;
    let param1 = parseInt(args[0]);
    try {
        if (param1 <= 0 || isNaN(param1)) {
            roll = Math.floor(Math.random() * 6) + 1;
            message.channel.send(`:die: ${message.author.username} has rolled a ${ogRoll}!`)
        } else {
            roll = Math.floor(Math.random() * param1) + 1;
            message.channel.send(`:die: ${message.author.username} has rolled a ${ogRoll}!`)
        }
    } catch (e) {
        message.channel.send("```" + e + "```");
    }
    
}
module.exports.help = {
    name: 'diceroll',
    args: '[param1] (optional)',
    notes: 'Rolls a die. Simple.',
    category: 'Fun'
}