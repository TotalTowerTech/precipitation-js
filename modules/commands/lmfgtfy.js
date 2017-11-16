module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    let searchResult = args.join(" ").toLowerCase();
    searchResult.replace(" ", "+");
    try {
        let embed = new Discord.RichEmbed()
            .setTitle(`LMFGTFY - ${args.join(" ")}`)
            .addField(`www.lmfgtfy.com/${searchResult}`)
            .setFooter(`Requested by ${message.author.username} on ${new Date()} | PrecipitationJS v0.1.2`)
        message.channel.send({ embed });
    } catch (e) {
        throwex(e);
    }
}
module.exports.help = {
    name: 'lmfgtfy',
    args: '[searchResult]',
    notes: 'Be the biggest smartaleck on the guild and link them to this if they have a question.',
    category: 'Fun'
}