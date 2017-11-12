module.exports.run = async (client, message, args) => {
    var Discord = require('discord.js')
    let pingedPerson = message.mentions.users.first;
    var embed;
    if (pingedPerson) {
        embed = new Discord.RichEmbed()
            .setTitle(`${pingedPerson.username}'s current profile picture! c:`)
            .setImage(pingedPerson.displayAvatarURL)
            .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS v0.1.2`)
            .setColor("GREEN")
        message.channel.send({ embed });
    } else {
        embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}'s current profile picture! c:`)
            .setImage(message.author.displayAvatarURL)
            .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS v0.1.2`)
            .setColor("GREEN")
        message.channel.send({ embed });
    }
}
module.exports.help = {
    name: 'getavatar',
    args: '[pingedPerson]',
    notes: 'Gets an avatar of a user.'
}