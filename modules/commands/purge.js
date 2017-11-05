module.exports.run = async (client, message, args) => {
    var intToParse = parseInt(args.join(" "));
    if (!message.author.hasPermission("MANAGE_MESSAGES")) return message.reply("**:no_entry_sign: ERROR:**: Insufficient permissions.")
    if (isNaN(intToParse)) {
        message.channel.send(":white_check_mark: Deleted NaN messages... just kidding! I'm not that dumb! :stuck_out_tongue:");
    }
    else if (intToParse < 0) {
        message.channel.send("By deleting a negative number, that would mean I would be *adding* messages.");
    }
    else if (intToParse > 99) {
        message.channel.send("I can't delete more than 99 messages!");
    }
    else if (intToParse == 0) {
        message.channel.send("I cannot delete 0 messages. ");
    }
    else {
        message.channel.bulkDelete(intToParse).then(() => {
            message.channel.send(`:white_check_mark: Deleted ${intToParse} messages!`);
        });
    }
}
var help = {};
module.exports.help = {
    name: "purge",
    args: "[intToParse]",
    notes: "Allows you to delete a bulk amount of messages."
}
return help;