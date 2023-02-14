const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('backend')
		.setDescription('backend helpers, channels and resources.'),
	async execute(interaction) {
		const channels = [
			{
				id: '1062208286553804810',
				description: 'Channel with Java contents and resources',
			},
			{
				id: '1062208426412884068',
				description: 'Channel with Node JS contents and resources',
			},
			{
				id: '1062208404283727964',
				description: 'Channel with Express JS contents and resources',
			},
			{
				id: '1062208477700816896',
				description: 'Channel with Mongo DB contents and resources',
			},
		];

		const channelNames = channels
			.map((channel) => ` **<#${channel.id}>**`)
			.join('  |  ');

		await interaction.reply(
			`**Here's a list of channels in the specified category : **\n\n> ${channelNames}\n\n`,
		);
	},
};
