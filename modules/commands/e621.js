module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    const Kaori = require('kaori');
    var e621 = require('./e621.json');

    const kaori = new Kaori(e621);
    var rndTags = ['furry', 'gay', 'incest', 'hentai', 'oppai', 'cat', 'pokemon'];
    const titles = ["Here's that stuff for ya~", "This isn't even NSFW for you?", "This has a *lot* more than just countries it shows..."];
    if (message.channel.nsfw) {
        try {
            if (!args[0]) {
                kaori.search('e621', {
                    tags: [rndTags[Math.floor(Math.random() * rndTags.length)]],
                    limit: 1,
                    random: true
                })
                    .then(images => {
                    let embed = new Discord.RichEmbed()
                        .setTitle(titles[Math.floor(Math.random() * titles.length)])
                        .setImage(images[0].common.fileURL)
                        .setColor('GREEN')
                    message.channel.send({ embed });
                    })
                    .catch(e => {
                        throwex(e);
                    })

            }
            kaori.search('e621', {
                tags: [args[0]],
                limit: 1,
                random: true
            }).then(images => {
                let embed = new Discord.RichEmbed()
                    .setTitle(titles[Math.floor(Math.random() * titles.length)])
                    .setImage(images[0].common.fileURL)
                    .setColor('GREEN')
                message.channel.send({ embed });
            })
        } catch (e) {
            throwex(e);
        }
        
    } else {
        message.channel.send("This channel is not marked as an NSFW channel. Please try again with a properly set up NSFW channel.");
        return;
    }
}

module.exports.help = {
    name: 'e621',
    args: '[args[0]] (optional)',
    notes: "Everyone has their needs... so why not have everybody's favorite globe help you?",
    category: 'NSFW'
}
