module.exports.run = async (message, client, args, throwex) => {
    const fs = require('fs');
    fs.readFile('../../servers.json', function (err, content) {
        var arrayOfObjects = JSON.parse(content);
        try {
            if (arrayOfObjects[message.guild.name]) {
                if (arrayOfObjects[message.guild.name]['toggleNSFW'] == true) {
                    arrayOfObjects[message.guild.name]['toggleNSFW'] == false;
                    fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throwex(err); })
                    message.channel.send('Okay, I disabled NSFW for now. Reenable this by running the command again!');
                } else {
                    arrayOfObjects[message.guild.name]['toggleNSFW'] == false;
                    fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throwex(err); })
                    message.channel.send('Okay, I reenabled NSFW for now. Redisable this by running the command again!');
                }
            } else {
                arrayOfObjects[message.guild.name] = {};
                arrayOfObjects[message.guild.name]['toggleNSFW'] = true;
                fs.writeFile('.../config.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { if (err) throwex(err); })
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
