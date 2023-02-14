const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Access github details.')
		.addUserOption((value) => {
			value
				.setName('target')
				.setDescription('github username...')
				.setRequired(true);
		}),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		console.log(`https://api.github.com/${target}`);
		await interaction.reply(`https://api.github.com/${target}`);
	},
};
