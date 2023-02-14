const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guide')
		.setDescription('provides a dedicated walkthrough of our server....'),
	async execute(interaction) {
		const categoryId = '1062207991933308998';

		const channels = interaction.guild.channels.cache.filter((channel) => {
			return channel.parentID === categoryId && channel.type === 'text';
		});

		const channelNames = channels
			.map((channel) => `- ${channel.name}`)
			.join('\n');

		await interaction.reply(
			`Here's a list of channels in the specified category:\n\n${channelNames}`,
		);
	},
};
