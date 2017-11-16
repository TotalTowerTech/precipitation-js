module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    
    try {
        let embed = new Discord.RichEmbed()
            .setTitle(`LMFGTFY - ${args.join(" ")}`)
            .setDescription(`www.lmfgtfy.com/${args.join(" ").toLowerCase().replace(" ", "+")}`)
            .setFooter(`Requested by ${message.author.username} on ${new Date()} | PrecipitationJS v0.1.2`)
        message.channel.send({ embed });
    } catch (e) {
        throwex(e);
    }
}
module.exports.help = {
    name: 'lmfgtfy',
    args: '[args]',
    notes: 'Be the biggest smartaleck on the guild and link them to this if they have a question.',
    category: 'Fun'
}