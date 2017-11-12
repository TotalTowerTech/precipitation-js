module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    let embed;
    let pingedPerson = message.mentions.users.first;
    try {
        if (pingedPerson == null || message.mentions.users.first.length == 0) {
            embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}'s profile picture! c:`)
                .setImage(message.author.displayAvatarURL)
                .setFooter(`Requested by ${message.author.tag}`)
                .setTimestamp(new Date())
                .setColor("GREEN")
            message.channel.send({ embed });
        } else {
            embed = new Discord.RichEmbed()
                .setTitle(`${pingedPerson.username}'s profile picture! c:`)
                .setImage(pingedPerson.displayAvatarURL)
                .setFooter(`Requested by ${pingedPerson.tag}`)
                .setTimestamp(new Date())
                .setColor("GREEN")
            message.channel.send({ embed });
        }
    } catch (e) {
        message.channel.send(e);
    }
    
}
module.exports.help = {
    name: 'getavatar',
    args: '[pingedPerson]',
    notes: 'Gets an avatar of a user.'
}