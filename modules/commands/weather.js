module.exports.run = async (client, message, args, throwex) => {
    const weather = require('weather-js');
    const Discord = require('discord.js');
    weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {
        if (err) throwex(err);
        try {
            if (result.length <= 0) {
                let e = new Discord.RichEmbed()
                    .setTitle("Error - No Location")
                    .setDescription("Please enter a valid location.")
                    .setColor("GREEN")
                    .setFooter(`Requested by ${message.author.username} on ${new Date()} | PrecipitationJS v0.1.2`)
                message.channel.send({ e });
                return;
            }

            let current = result[0].current;
            let location = result[0].location;

            let embed = new Discord.RichEmbed()
                .setTitle(`Current weather in ${current.observationpoint}`)
                .addField(`Weather Overview`, `In ${current.observationpoint}, it is currently ${current.temperture}°C with a windspeed of ${Math.round(parseInt(current.winddisplay) / 0.621371)} km/h. It is ${current.humidity}% humid.`)
                .setColor("GREEN")
                .setFooter(`Requested by ${message.author.username} on ${new Date()} | PrecipitationJS v0.1.2`)
            message.channel.send({ embed });
        } catch (e) {
            throwex(e);
        }
    })
}
module.exports.help = {
    name: 'weather',
    args: '[result]',
    notes: 'Gets the weather of a person.',
    category: 'Informative'
}