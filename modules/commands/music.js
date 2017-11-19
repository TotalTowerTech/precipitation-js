module.exports.run = async (client, message, args, throwex) => {
    const ytdl = require('ytdl-core');
    const Discord = require('discord.js');
    var servers = {};
    let embed;

    function play(connection, message) {
        var server = servers[message.guild.id];
        server.dispatcher = connection.playStream(ytdl(queue[0], { filter: "audioonly" }));

        server.queue.shift();
        server.dispatcher.on("end", function () {
            if (queue[0]) play(connection, message);
            else connection.disconnect();
        }) 
    }

    try {
        if (!args[0]) {
            embed = new Discord.RichEmbed()
                .setTitle("Error - You must provide a YouTube Link")
                .setDescription('To enqueue an item, please pass the YouTube Link as an argument.')
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username} on ${new Date()} |  Precipitation v0.1.2`)
            message.channel.send({ embed });
            return;
        }
        if (!message.member.voiceChannel) {
            embed = new Discord.RichEmbed()
                .setTitle('Error - You must be in a voice channel')
                .setDescription('To play an item, you must join a voice channel.')
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username} on ${new Date()} |  Precipitation v0.1.2`)
            message.channel.send({ embed });
            return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        if (!message.member.voiceConnection) message.member.voiceConnection.join().then(function (connection) {
            play(connection, message);
        })
    } catch (e) {
        throwex(e);
    }
  
    var server = servers[message.guild.id];
}
module.exports.help = {
    name: 'music',
    args: 'args[0]',
    notes: 'Want to show your taste in music? This command is for you!',
    category: 'Music'
}