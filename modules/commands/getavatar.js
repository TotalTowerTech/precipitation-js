module.exports.run = async (client, message, args) => {
const Discord = require('discord.js');
 if (message.mentions.users.first()) {
            	var mentionmembers = message.mentions.members.first()
            	var mentionusers = message.mentions.users.first()
            	var embed = new Discord.RichEmbed()
            		.setAuthor("Avatar")
            		.setDescription(`${mentionusers.username}'s current avatar`)
                    .setImage(mentionusers.displayAvatarURL)
                    .setColor("GREEN")
            		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
            		.setTimestamp()
            	message.channel.send({embed})
            } else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Avatar")
                    .setDescription("Your current avatar")
                    .setImage(message.author.displayAvatarURL)
                    .setColor("GREEN")
                    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
                    .setTimestamp()
                message.channel.send({embed})
            }
}
module.exports.help = {
    name: 'getavatar',
    args: '[pingedPerson]',
    notes: 'Gets an avatar of a user.'
}
