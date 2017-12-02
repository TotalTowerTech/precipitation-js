module.exports.run = async (message, client, args, throwex) => {
    const fs = require('fs');
    var toggleNSFW = true;
    fs.readFile('.../config.json', function (err, content) {

        var arrayOfObjects = JSON.parse(content);
        try {
            if (arrayOfObjects[message.guild.name]) {
                if (arrayOfObjects[message.guild.name][JSON.stringify(toggleNSFW)] == true) {
                    arrayOfObjects[message.guild.name][JSON.stringify(toggleNSFW)] == false;
                    fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throw err; })
                    message.channel.send('Okay, I disabled NSFW for now. Reenable this by running the command again!');
                } else {
                    arrayOfObjects[message.guild.name][JSON.stringify(toggleNSFW)] == false;
                    fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throw err; })
                    message.channel.send('Okay, I reenabled NSFW for now. Redisable this by running the command again!');
                }
            } else {
                arrayOfObjects[message.guild.name] = {};
                arrayOfObjects[message.guild.name][toggleNSFW] = true;
                fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throw err; })
            }
        } catch (e) {
            throwex(e);
        } 
    })
}
module.exports.help = {
    name: 'togglensfw',
    args: 'none',
    notes: 'Enables or disables NSFW commands. (not finished)',
    category: 'NSFW'
}
