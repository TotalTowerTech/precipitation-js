module.exports.run = async (client, message, args, throwex) => {
    if (args.join(" ").length <= 0) {
        message.reply(":no_entry_sign: **ERROR:** You must provide details!");

    } else {
        throwex(args.join(" "));
    }
}
module.exports.help = {
    name: 'throw',
    args: '[args.join(" ")]',
    notes: 'Throw a fake exception.',
    category: 'Fun'
}