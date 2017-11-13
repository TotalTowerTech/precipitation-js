module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    var embed = new Discord.RichEmbed()
        .setAuthor(`Info about ${message.guild.name}:`)
        .addField(`Name: ${message.guild.name}\r\nServer Owner: ${message.guild.owner.user.username}\r\nRoles: ${message.guild.roles}\r\nNumber of Roles: ${message.guild.roles.size}\r\nNumber of Members: ${message.guilds.members.size}`)
        .setColor("GREEN")
        .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS v0.1.2`)
    message.channel.send({embed})
}