const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('alive')
		.setDescription('Replies with Status!'),
	async execute(interaction) {
		await interaction.reply('I am Alive!');
	},
};