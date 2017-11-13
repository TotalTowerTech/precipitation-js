/****************************************
 * 
 *   Precipitation: Moderation bot, with a few fun commands.
 *   Copyright (C) 2017 Victor Tran and Rylan Arbour
 *   Rewrtitten by Rain.
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * *************************************/

var ver = "0.1.2";
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("./config.json")
var prefix = 'pr:'
var vicCount = 0;


var token = process.env.TOKEN

client.login(token)

client.on('ready', () => {
    console.log("[i] Precipitation " + ver + " is now ready to go!");
    function gameRandomizer() {
        var presence = ["never use discord.js-commando", `${prefix}help | PrecipitationJS v${ver}`, "being modular", "aaaaaaaaa", `with ${client.guilds.size} guilds`];
        var gameSetter = presence[Math.floor(Math.random() * presence.length)];
        client.user.setGame(gameSetter);
    }
    var gameChooser = setInterval(gameRandomizer, 30000);
});

var modCommand;

function hasPermissions(perm) {
    if (message.member.hasPermission(perm)) {
        return true;
    } else {
        return false;
    }
}


fs.readdir("./modules/commands/", (err, files) => {
    if (err) console.error(err);

    let modules = files.filter(f => f.split(".").pop() === "js");
    if (modules.length <= 0) {
        console.log("No public commands found. Running with no public commands loaded.");
        return;
    }

    console.log(`Now loading ${modules.length} public commands.`)
    modules.forEach((f, i) => {
        let props = require(`./modules/commands/${f}`);
        try {
            client.commands.set(props.help.name, props);
        } catch (err) {
            console.log('One or more of your public commands caused an error. Check your public commands and try again. \n=> ' + err);
            process.exit(1)
        }
    })

    console.log(`Finshed loading all ${modules.length} public commands.`)
    modCommand = false;
})


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.author.id === "247221105515823104" && message.content.toLowerCase().includes("piro")) {
        var treyCount = 0;
        treyCount++;
        message.channel.send(`BAD TREY! (Current count: ${treyCount})`);
        fs.writeFileSync('./config.json', JSON.stringify(config.config.treycount, treyCount))
    }

    if (message.content.includes(process.env.TOKEN)) {
        let embed = new Discord.RichEmbed()
            .setTitle("Oh no... what have you done?")
            .setDescription("The token for PrecipitationJS has been leaked and will be leaving in 30 seconds.")
            .setColor("RED")
        var leave = setImmediate(30000);
        message.delete();
        leave();
    }

    if (message.author.id === "278805875978928128" && message.content.includes(":P" || ":stuck_out_tongue:")) {
        fs.writeFileSync('./config.json', JSON.stringify(config.config.viccount, vicCount++));
        message.channel.send(`BAD VICTOR! (Current count: ${vicCount})`);
    }

    try {
        let starEmote = message.reactions.equals("?");
        if (starEmote.length < 3) {
            message.reply("yay it work");
        }
    } catch (e) {
        let embed = new Discord.RichEmbed()
            .setTitle("An error has occured.")
            .setDescription(`An error has occured while performing an action.\r\n${e})`)
            .setColor("RED")
        message.channel.send({ embed });
    }    

    let array = message.content.split(" ");
    let command = array[0];
    let args = array.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) {
        cmd.run(client, message, args);
    }
});

process.on('unhandledRejection', function (err, p) {
    console.log("[X] " + err.stack);
});