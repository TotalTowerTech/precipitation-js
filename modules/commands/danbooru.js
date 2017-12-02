module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    const Kaori = require('kaori');
    const kaori = new Kaori();
    
    var rndTags = ['furry', 'gay', 'incest', 'hentai', 'oppai', 'cat', 'pokemon'];
    const titles = ["Here's that stuff for ya~", "This isn't even NSFW for you?", "This has a *lot* more than just countries it shows..."];
    if (message.channel.nsfw) {
        try {
            if (!args.join("+").toLowerCase()) {
                let embed = new Discord.RichEmbed()
                    .setTitle("I need information!")
                    .setDescription("I need to have tags so I can gather information. Try again.")
                    .setColor("GREEN")
                message.channel.send({ embed });
            } else {
                kaori.search('danbooru', {
                    tags: [args.join('+').toLowerCase()],
                    limit: 1,
                    random: true
                }) .then(images => {
                        let e = new Discord.RichEmbed()
                            .setImage(images[0].common.fileURL)
                            .setTitle(titles[Math.floor(Math.random() * titles.length)])
                            .setColor('GREEN')
                        message.channel.send({ e });
                    })
                    .catch(err => {
                        throwex(err);
                    }) 
            }
                
        } catch (e) {
            throwex(e);
        }
    } else {
        message.channel.send("This channel is not marked as an NSFW channel. Please try again with a properly set up NSFW channel.");
        return;
    }
}

module.exports.help = {
    name: 'danbooru',
    args: '[args[0]] (optional)',
    notes: "Everyone has their needs... so why not have everybody's favorite globe help you?",
    category: 'NSFW'
}
