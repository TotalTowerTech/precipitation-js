module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    var Booru = require('booru');
    var booru = new Booru();
    
    var rndTags = ['furry', 'gay', 'incest', 'hentai', 'oppai', 'cat', 'pokemon'];
    const titles = ["Here's that stuff for ya~", "This isn't even NSFW for you?", "This has a *lot* more than just countries it shows..."];
    if (message.channel.nsfw) {
        try {
            booru.search('danbooru', [args[0], args[1]], { limit: 1, random: true })
                .then(booru.commonfy)
                .then(images => {
                    //Log the direct link to each image 
                    for (let image of images) {
                        let e = new Discord.RichEmbed()
                            .setImage(image.common.file_url)
                            .setTitle(titles[Math.floor(Math.random() * titles.length)])
                            .setColor('GREEN')
                        message.channel.send({ e });
                    }
                })
                .catch(err => {
                    if (err.name === 'booruError') {
                        throwex(err.name);
                    } else {
                        throwex(err);
                    }
                }) 
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
