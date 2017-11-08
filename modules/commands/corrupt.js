module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    var phrase = args[0];

    phrase.replace("a", phrase).replace("b", phrase).replace("c", phrase).replace("d", phrase).replace("e", phrase).replace("f", phrase).replace("g", phrase).replace("h", phrase).replace("i", phrase).replace("j", phrase).replace("k", phrase).replace("l", phrase).replace("m", phrase).replace("n", phrase).replace("o", phrase).replace("p", phrase).replace("q", phrase).replace("r", phrase).replace("s", phrase).replace("t", phrase).replace("u", phrase).replace("v", phrase).replace("w", phrase).replace("x", phrase).replace("y", phrase).replace("z", phrase);
    let embed = new Discord.RichEmbed()
        .setAuthor("Corruption")
        .setDescription("Here's the corruption!")
        .addField(":inbox_tray: Input:", `\`\`\`\n${args[0]}\n\`\`\``)
        .addField(":outbox_tray: Output:", `\`\`\`js\n${phrase}\n\`\`\``)
        .setColor("GREEN")
        .setFooter("Precipitation 0.1.2", client.user.avatarURL)
        .setTimestamp()
    message.channel.send({ embed });
}
module.exports.help = {
    name: 'corrupt',
    args: '[phrase]',
    notes: 'Corrupts a phrase.'
}