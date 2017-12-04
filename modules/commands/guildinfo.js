module.exports.run = async (client, message, args) => {
    const param = require('../../param.json');
    const Discord = require('discord.js');
    try {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Info about ${message.guild.name}:`)
            .addField(`Name and Owner`, `Name: ${message.guild.name}\r\nOwner: ${message.guild.owner.user.username}\nCreated At: ${message.guild.createdAt}`)
            .addField(`Roles and Members`, `Number of Roles: ${message.guild.roles.size}\r\nNumber of Members: ${message.guild.members.size}\r\nNumber of Channels: ${message.guild.channels.size}`)
            .setColor("GREEN")
            .setFooter(`PJS ${param.ver}`)
            .setTimestamp()
        message.channel.send({ embed })
    } catch (e) {
        message.channel.send("```" + e + "```");
    }
    
}
module.exports.help = {
    name: 'guildinfo',
    args: 'none',
    notes: 'Shows the information for the guild.',
    category: 'Information'
}