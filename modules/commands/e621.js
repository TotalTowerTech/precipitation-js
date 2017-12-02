module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    const Kaori = require('kaori');
    var e621 = require('./e621.json');
    const kaori = new Kaori(e621);
    const titles = ["Here's that stuff for ya~", "This isn't even NSFW for you?", "This has a *lot* more than just countries it shows..."];
    const fs = require('fs');
    fs.readFile('../../servers.json', function (err, content) {
        var arrayOfObjects = JSON.parse(content);
        if (arrayOfObjects[message.guild.name]['toggleNSFW'] == false) {
            message.channel.send("NSFW is currently disabled. Please try again later.");
            return;
        }
    });
    if (message.channel.nsfw) {
        if (!args[0]) {
            let embed = new Discord.RichEmbed()
                .setTitle("I need information!")
                .setDescription("I need to have tags so I can gather information. Try again.")
                .setColor("GREEN")
            message.channel.send({ embed });
        } else {
            kaori.search('e621', {
                tags: [args.join("+").toLowerCase()],
                limit: 1,
                random: true
            }).then(images => {
                let embed = new Discord.RichEmbed()
                    .setTitle(titles[Math.floor(Math.random() * titles.length)])
                    .setImage(images[0].common.fileURL)
                    .setColor('GREEN')
                message.channel.send({ embed });
            }).catch(e => throwex(e))
        }
    }
}

module.exports.help = {
    name: 'e621',
    args: '[args]',
    notes: "Everyone has their needs... so why not have everybody's favorite globe help you?",
    category: 'NSFW'
}
