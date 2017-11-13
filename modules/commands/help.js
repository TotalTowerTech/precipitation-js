module.exports.run = async (client, message, args) => {
	const Discord = require('discord.js');
	if (!args[0]) {
        const categories = [];
        let ver = "0.1.2"
		let embed = new Discord.RichEmbed()
		let helpString = "";
		let commands = Array.from(client.commands.keys());
        commands.forEach(function (x) {
            if (!categories.includes(client.commands.get(x).help.category)) {
                categories.push(client.commands.get(x).help.category);
            }
        });
        commands.forEach(function (x) {
            let cat = '';
            commands.forEach(function (command) {
                if (client.commands.get(command).help.category == x) {
                    cat = cat + command + '\n';
                }
            })
            embed.addField(x, cat);

        })
		embed.setTitle(`Help for PrecipitationJS v${ver}.`);
		embed.setDescription("For more information on a command, please use `pr:help [command]`.");
		message.channel.send({ embed });
	}
	else {
		let command = client.commands.get(args[0]);
		if (!command) return message.channel.send(`The command ` + "`" + command + "` does not exist.")
		let embed = new Discord.RichEmbed()
		embed.setTitle(`Help for ${args[0]}:`)
		embed.setDescription(command.help.notes)
		embed.addField('Parameters: ', command.help.args)
		message.channel.send({ embed });

	}
}

module.exports.help = {
	name: "help",
	args: "[command] (optional)",
    notes: "Shows the commands.",
    category: 'Basic'
}