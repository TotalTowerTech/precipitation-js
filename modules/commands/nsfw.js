module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    const http = require('https');
    if (message.channel.nsfw) {
        try {
            let tag;
            let tag1 = '';
            let tag2 = '';
            var toggle = false;
            var count = 0;
            var sp = message.content.replace(/\//g, ' / ').split(/\s+/g);
            sp.shift();
            for (let i = 0; i < sp.length && count < 2; i++) {
                if (sp[i] === '/') {
                    toggle = true;
                    count++;
                }
                if (sp[i] !== '/' && toggle === false) {//This is for tag 1.
                    tag1 += `${sp[i]}_`;
                } else {
                    if (sp[i] !== '/' && toggle === true) { //This is for tag 2.
                        tag2 += `${sp[i]}_`;
                    }
                }
            }
            tag1 = tag1.slice(0, tag1.length - 1);
            tag2 = tag2.slice(0, tag2.length - 1);
            if (toggle === true) {
                tag = `${tag1} + ${tag2}`;
            } else {
                tag = `${tag2}`;
            }

            http.get(`https://danbooru.donmai.us/posts.json?tags=${tag}&rating=explicit&limit=1&random=true`, function (error, response, body) {
                body = JSON.parse(body);
                console.log(body);
                let post = body[0];
                if (error != null) {
                    throwex(error);
                } else if (body[0]) {
                    let embed = new Discord.RichEmbed()
                        .setImage(`http://danbooru.donmai.us${post.file_url}`)
                        .setDescription(`This NSFW piece was drawn by ${post.tag_string}.`)
                        .addField('Is this not what you want? Try using different search terms!')
                        .setColor('GREEN')
                    message.channel.send({ embed });
                } else {
                    message.channel.send(`No entries for ${tag} was found. Try again when new images are out!`);
                }
                
            });
        } catch (e) {
            throwex(e);
        }
    } else {
        return message.channel.send("This channel is not marked as an NSFW channel. Please try again with a properly set up NSFW channel.");
    }
   
}

module.exports.help = {
    name: 'nsfw',
    args: '[tag1] (opt), [tag2] (opt)',
    notes: "Everyone has their needs... so why not have everybody's favorite globe help you?",
    category: 'NSFW'
}
