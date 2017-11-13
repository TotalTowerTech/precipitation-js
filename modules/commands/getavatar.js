module.exports.run = async (client, message, args) => {
const Discord = require('discord.js');
 if (message.mentions.users.first()) {
            	var mentionMembers = message.mentions.members.first()
            	var mentionUsers = message.mentions.users.first()
                var embed = new Discord.RichEmbed()
                    .setAuthor("Avatar")
                    .setDescription(`${mentionusers.username}'s current avatar! c:`)
                    .setImage(mentionusers.displayAvatarURL)
                    .setColor("GREEN")
                    .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS`, message.author.displayAvatarURL)
            	message.channel.send({embed})
            } else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Avatar")
                    .setDescription("Your current avatar! c:")
                    .setImage(message.author.displayAvatarURL)
                    .setColor("GREEN")
                    .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS`, message.author.displayAvatarURL)
                message.channel.send({embed})
            }
}
module.exports.help = {
    name: 'getavatar',
    args: '[mentionMembers] / [mentionUsers]',
    notes: 'Gets an avatar of a user.'
}
