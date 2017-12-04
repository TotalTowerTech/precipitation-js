module.exports.run = async (client, message, args) => {
    const param = require('../../param.json');
    let search = args.join(" ");
    let embed;
    const Discord = require('discord.js');
    for (let key of client.users) {
        let member = client.users[key];
        if (!member) {
            embed = new Discord.RichEmbed()
                .setAuthor("Avatar")
                .setDescription("Your current avatar! c:")
                .setImage(message.author.displayAvatarURL)
                .setColor("GREEN")
                .setFooter(`PJS v${param.ver}`, message.author.displayAvatarURL)
                .setTimestamp()
        }
        if (member.username.toLowerCase().startsWith(search)) {
            let embed = new Discord.RichEmbed()
                .setAuthor("Avatar")
                .setDescription(`${member.username}'s current avatar! c:`)
                .setImage(member.displayAvatarURL)
                .setColor("GREEN")
                .setFooter(`PJS v${param.ver}`, message.author.displayAvatarURL)
        } else if (message.mentions.users.first()) {
            let mentionUsers = message.mentions.users.first();
            embed = new Discord.RichEmbed()
                .setAuthor("Avatar")
                .setDescription(`${mentionUsers.username}'s current avatar! c:`)
                .setImage(mentionUsers.displayAvatarURL)
                .setColor("GREEN")
                .setFooter(`PJS v${param.ver}`, message.author.displayAvatarURL)
        }
    }
    message.channel.send({ embed });
}
module.exports.help = {
    name: 'getavatar',
    args: '[mentionMembers] / [mentionUsers]',
    notes: 'Gets an avatar of a user.',
    category: 'Basic'
}
