const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bless')
		.setDescription('Provides with the blessings you need to succeed'),
	async execute(interaction) {
		await interaction.reply(`You're blessed <@${interaction.user.id}>`);
	},
};
