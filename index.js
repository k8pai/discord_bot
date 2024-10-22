// Require the necessary discord.js classes

const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
// const { token } = require('./config.json');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.token
const clientId = process.env.clientId
const guildId = process.env.guildId

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(
			`[WARNING] The command at ${filePath} is missing a require "data" or "execute" property.`,
		);
	}
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// client.on(Events.WebhooksUpdate, async (channel) => {
// 	// Check if the webhook belongs to the bot
// 	if (!channel?.guild?.me?.user?.bot) return;

// 	// Get the last message sent by the webhook
// 	const messages = await channel.messages.fetch({ limit: 1 });
// 	const lastMessage = messages.first();

// 	// If the last message was sent by the bot, ignore it
// 	if (lastMessage?.author?.id === client.user.id) return;

// 	// Send a reply to the webhook message
// 	await channel.send('Hello from the bot!');
// });

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(
			`No command matching ${interaction.commandName} was found.`,
		);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});

// Log in to Discord with your client's token
client.login(token);
