/****************************************
 * 
 *   Precipitation: Moderation bot, with a few fun commands.
 *   Rewrtitten by Rain and FloppyDiskDrive.
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the MIT License.
 *
 *   The help command was gladly provided from the moderation bot, "BonGon". 
 *   Check out his bot here: www.github.com/jtsshieh/bongon. 
 *   Yell at him for any issues.
 * 
 * *************************************/

var ver = "0.1.2";
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
let config;
var prefix = 'pr:'
var vicCount = 0;
var sameMsg = {};

var token = process.env.TOKEN

client.login(token)

client.on('ready', () => {
    console.log("[i] Precipitation " + ver + " is now ready to go!");
    function gameRandomizer() {
        var presence = ["never use discord.js-commando", `${prefix}help | PrecipitationJS v${ver}`, "being modular", "aaaaaaaaa", `with ${client.guilds.size} guilds`, 'why is Kaylin in love with me?'];

        client.user.setGame(presence[Math.floor(Math.random() * presence.length)])
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

    console.log(`Finished loading all ${modules.length} commands.`)
})


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    

    if (message.content.includes(process.env.TOKEN)) {
        let embed = new Discord.RichEmbed()
            .setTitle("Oh no... what have you done?")
            .setDescription("The token for PrecipitationJS has been leaked and will be leaving in 30 seconds.")
            .setColor("RED")
        var leave = setImmediate(message.guild.leave, 30000);
        message.delete();
        leave();
    }
    function throwex(e) {
        var embedTitle = ["I got it... I got it... nope, I didn't get it.", "This bot is about as stable as FDD's emotions.", "Rain should've never passed PrecipitationJS to FDD.", "Got it! Take that, JXBot-R!"];
        let embed = new Discord.RichEmbed()
            .setTitle(embedTitle[Math.floor(Math.random() * embedTitle.length)])
            .addField("Error Details", e)
            .setFooter("The error that was thrown has been logged to the console.")
            .setColor("RED")
        message.channel.send({ embed });
        console.log(e);
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
        cmd.run(client, message, args, throwex);
    }
    function checkSpam(oldMsg, newMsg) {
        if (oldMsg[message.author.id] != message.content) {
            sameMsg[message.author.id] = 0;
        }
        oldMsg[message.author.id] = message.content;
        sameMsg[message.author.id] += 1;

        if (oldMsg[message.author.id] == message.content && sameMsg[message.author.id] == 10) {
            let auth = message.author;
            if (message.guild.id == 297218185374203904) {
                client.channels.get("335955604818624534").send(`${auth.username} has spammed in ${message.channel.name}.`);
                message.reply("I'm done with your crap. I've told the staff.");
                message.delete();
            } else if (oldMsg[message.author.id] == message.content && sameMsg[message.author.id] > 3) {
                var responses = ["Come on man, you're only hurting.", "If you won't delete it, then *I* will.", "Stop please! :c", "I want you to stop. Now.", `I'm gonna tell ${message.guild.owner.user.username} if you don't stop! >:c`, "Saying something more than three times is spam. Stop. c:"];
                message.reply(responses[Math.floor(Math.random() * responses.length)]);
            } else if (oldMsg[message.author.id] == message.content && sameMsg[message.author.id] > 10) {
                message.delete();
            }
        }
    }
    checkSpam(message.content, message.content);
});

process.on('unhandledRejection', function (err, p) {
    console.log("[X] " + err.stack);
});
