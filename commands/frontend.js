const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frontend')
		.setDescription('Frontend helpers, channels and resources.'),
	async execute(interaction) {
		const channels = [
			{
				id: '1062207599749115985',
				description: 'Channel with HTML contents and resources',
			},
			{
				id: '1062208114398597120',
				description: 'Channel with CSS contents and resources',
			},
			{
				id: '1062208127925235742',
				description: 'Channel with Javascript contents and resources',
			},
			{
				id: '1062208152961044591',
				description: 'Channel with TypeScript contents and resources',
			},
		];

		const channelNames = channels
			.map((channel) => `**<#${channel.id}>**`)
			.join('  |  ');

		await interaction.reply(
			`**Here's a list of channels in the specified category : **\n\n> ${channelNames}\n\n`,
		);
	},
};
