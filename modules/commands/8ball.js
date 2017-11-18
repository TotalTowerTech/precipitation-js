module.exports.run = async (client, message, args, throwex) => {
    let replies = ["The future is very shaky with this question.", "Ask again later.", "Most definitely.", "The future is not in your favor.", "Most likely.", "Yes.", "No."];
    if (!args.join(" ")) return message.reply("You must enter a question.");
    message.reply(replies[Math.random() * replies.length]);
}
module.exports.help = {
    name: '8ball',
    args: '[args]',
    notes: 'Find your future with this command!',
    category: 'Fun'
}