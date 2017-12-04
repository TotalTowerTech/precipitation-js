module.exports.run = async (client, message, args, throwex) => {
    const param = require('../../param.json');
    const Discord = require('discord.js');
    function replaceAll(search, placement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement)
    }
    
    try {
        let embed = new Discord.RichEmbed()
            .setTitle(`LMFGTFY - ${args.join(" ")}`)
            .setDescription(`www.lmfgtfy.com/?q=${args.join("+")}`)
            .setFooter(`PJS ${param.ver}`)
            .setTimestamp()
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