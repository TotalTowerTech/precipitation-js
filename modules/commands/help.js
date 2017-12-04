module.exports.run = async (client, message, args) => {
    const bot = require('../../bot.js');
    let ver = bot.ver;
    const Discord = require('discord.js');
    try {
        if (!args[0]) {
            let categories = [];
            let embed = new Discord.RichEmbed()
            let helpString = "";
            let commands = Array.from(client.commands.keys());
            commands.forEach(function (x) {
                if (!categories.includes(client.commands.get(x).help.category)) {
                    categories.push(client.commands.get(x).help.category);
                }
            });
            categories.forEach(function (x) {
                let cat = '';
                commands.forEach(function (command) {
                    if (client.commands.get(command).help.category == x) {
                        cat = cat + command + '\n';
                    }
                })
                embed.addField(x, cat,true);
            })            
		embed.setColor("GREEN");
		embed.setTitle(`Help for PJS v${ver}.`);
                embed.setDescription("For more information on a command, please use `pr;help [command]`.");
                message.channel.send({ embed });
        }
        else {
            let command = client.commands.get(args[0]);
            if (!command) return message.channel.send(`The command \`${args[0]}\` does not exist. Try ${bot.prefix}help for a list of commands!`)
            let embed = new Discord.RichEmbed()
            embed.setTitle(`Help for ${args[0]}:`)
            embed.setDescription(command.help.notes)
            embed.addField('Parameters: ', command.help.args)
            embed.addField('Category', command.help.category)
            embed.setColor("GREEN")
            message.channel.send({ embed });

        }
    } catch (e) {
        message.channel.send("```" + e + "```")
    }
}

module.exports.help = {
	name: "help",
	args: "[command] (optional)",
    notes: "Shows the commands.",
    category: 'Basic'
}
