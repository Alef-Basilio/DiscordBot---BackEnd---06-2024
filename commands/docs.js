const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, 
    SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pokemon')
        .setDescription('Choose your Pokémon!'),

    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('Pokémon')
            .setPlaceholder('Make a selection!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Bulbasaur')
                    .setDescription('It uses the nutrients that are packed into the seed on its back in order to grow.')
                    .setValue('bulbasaur'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Charmander')
                    .setDescription('If Charmander is weak, the flame also burns weakly.')
                    .setValue('charmander'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Squirtle')
                    .setDescription('It sprays a potent foam from its mouth.')
                    .setValue('squirtle'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.reply({
            content: 'Choose your Pokémon!',
            components: [row]
        });
    }
};