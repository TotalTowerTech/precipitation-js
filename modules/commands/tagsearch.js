module.exports.run = async (client, message, args, throwex) => {
    if (!message.channel.nsfw) return message.channel.send("This channel is not marked as an NSFW channel. Please try again with a properly set up NSFW channel.");
    let embed;
    var tag = '';
    const Discord = require('discord.js');
    for (var i = 0; i < args.length; i++) {
        tag += `*${args[i]}*+`;
    }
    tag = tag.slice(0, tag.length - 1);
    request(`http://danbooru.donmai.us/tags/autocomplete.json?search[name_matches]=*${tag}*`, function (e, r, b) {
        var suggestions = '';
        b = JSON.parse(b);
        if (b[0] != null) {
            for (var i = 0; i < b.length; i++) {
                suggestions += b[i].name;
                suggestions += '\n';
            }
        } else {
            suggestions = `No suggestions found for ${tag}. Try again later!`;
        }
        embed = new Discord.RichEmbed()
            .setTitle(`Tags matching '${tag}:'`)
            .setDescription(`\`\`\`${suggestions}\`\`\``)
            .setColor('GREEN')
        message.channel.send({ embed });
    });
}
module.exports.help = {
    name: 'tagsearch',
    args: '[suggestion]',
    notes: 'Find a tag before you have fun.',
    category: 'NSFW'
}