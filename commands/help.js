const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription(
			`provides with the best of what <@898949804024012850> can provide with.`,
		),
	async execute(interaction) {
		await interaction.reply(`<@898949804024012850> here to help!!!`);
	},
};
