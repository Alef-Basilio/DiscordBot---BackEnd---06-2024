const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('who-is-the-brother-of-ping')
        .setDescription('Hum...'),

    async execute(interaction) {
        await interaction.reply("He's Pong!");
    }
}