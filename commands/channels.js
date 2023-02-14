const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channels')
		.setDescription('Provides a categorized list of channels.'),
	async execute(interaction) {
		await interaction.reply(
			`**Here's a Bunch of channels that maybe helpful, just check em out... : **\n**Frontend channels : **\n\n> ${frontendChannels}\n**Backend channels : **\n\n> ${backendChannels}\n\n`,
		);
	},
};
