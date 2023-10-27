const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
	console.log('client is ready');
	client.user.setActivity({
		name: "nanikure?"
	});
});

client.on('messageCreate', async (message) => {
	if (message.content === "hello"){
		message.reply("hi");
	}
	else if (message.content === "momtumphysics"){
		message.reply("mom = infinity");
	}
});

client.login('MTExNzAxNDcyNzEwMTUyNjAyNw.GXBlSI.coaBqQjMbs03_WQ36oFAvCZyofFNBTrbpx3MGU');
