module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    let embed;
    let pingedPerson = message.mentions.users.first;
    if (pingedPerson == null || pingedPerson.length == 0) {
        embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}'s profile picture! c:`)
            .setDescription(message.author.displayAvatarURL)
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp(new Date())
            .setColor("GREEN")
        message.channel.send({ embed });
    } else {
        embed = new Discord.RichEmbed()
            .setTitle(`${pingedPerson.username}'s profile picture! c:`)
            .setDescription(pingedPerson.displayAvatarURL)
            .setFooter(`Requested by ${pingedPerson.tag}`)
            .setTimestamp(new Date())
            .setColor("GREEN")
        message.channel.send({ embed });
    }
}
module.exports.help = {
    name: 'getavatar',
    args: '[pingedPerson]',
    notes: 'Gets an avatar of a user.'
}