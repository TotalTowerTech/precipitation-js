module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    function replaceAll(search, placement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement)
    }
    
    try {
        let embed = new Discord.RichEmbed()
            .setTitle(`LMFGTFY - ${args.join(" ")}`)
            .setDescription(`www.lmfgtfy.com/?q=${args.join("+")}`)
            .setFooter(`Requested by ${message.author.username} on ${new Date()} | PrecipitationJS v0.1.2`)
            .setColor("GREEN")
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