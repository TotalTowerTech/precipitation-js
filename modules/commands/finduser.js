module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    let count = 0;
    let searchResult = '';
    let search = args.join(" ");
    for (let [id, member] of client.users) {
        id = member.id;
        if (count >= 10) {
            count += 1;
        } else if (member.username.toLowerCase().startsWith(search)) {
            searchResult += member.tag + ' - ' + id + '\r\n'
            count += 1;
        } else if (member.bot) {
            searchResult += "[BOT]";
        }
        if (searchResult == '') return message.channel.send("The search result turned up blank. Try again later! c:");
        if (count >= 10) searchResult += "There were more results, but there were too many users. Try again with a different query.";
        let finalMsg = '\n' + '```' + searchResult + '```';
    }
    message.channel.send(`Here's who I found with your requested query: ${finalMsg}`);

}
module.exports.help = {
    name: 'finduser',
    args: '[searchResult]',
    notes: 'Find any user with ease with this simple command!',
    category: 'Informative'
}