module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    const http = require('https');
    const kaori = require('kaori');
    const titles = ["Here's that stuff for ya~", "This isn't even NSFW for you?", "This has a *lot* more than just countries it shows..."];
    if (message.channel.nsfw) {
        kaori.search('e621', {
            tags: [args[0]],
            limit: 1,
            random: true
        }).then(images => {
            let embed = new Discord.RichEmbed()
                .setTitle(titles[Math.floor(Math.random() * titles.length)])
                .setImage(images[0].common.fileURL())
                .setColor('GREEN')
            message.channel.send({ embed });
        })
    }
}

module.exports.help = {
    name: 'e621',
    args: '[args[0]]',
    notes: "Everyone has their needs... so why not have everybody's favorite globe help you?",
    category: 'NSFW'
}
