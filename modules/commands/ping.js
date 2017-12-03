module.exports.run = async (client, message, args) => {
    var pingReplies = ["I'm totally not AstralMod!", "Sausages.", "Rain, rain, go away...", "Don't do drugs, kids.", "[insert generic response here]"];
    await message.edit('Pinging...');
    return message.edit(`:ping_pong: Pong! ${pingReplies[Math.floor(Math.random() * pingReplies.length)]} The client's ping is ${Math.round(client.ping)} ms. The API ping is ${Math.round(message.editedTimestamp - message.createdTimestamp)}`)
}

module.exports.help = {
    name: "ping",
    args: "n/a",
    notes: "A very simple ping command.",
    category: 'Basic'
}