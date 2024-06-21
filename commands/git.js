const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('DarkGreen')
	.setTitle('Ceará is my State!')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: "Alef's", iconURL: 'https://i.imgur.com/AfFp7pu.png', 
        url: 'https://discord.js.org' })
	.setDescription('Ceará, a northeastern Brazilian state, has a mountainous interior and an Atlantic coastline with impressive red cliffs.')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Ceará', value: 'Ceará is one of the 27 federative units in Brazil.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Balneário de Canoa Quebrada', value: 'It has huge pink sand dunes and Rua Dragão do Mar, very busy and also known as Broadway.', inline: true },
		{ name: 'The isolated city of Jericoacoara', value: 'Surrounded by the Jericoacoara National Park, full of dunes, it is famous for its sandy streets, windsurfing and unusual sunsets in shades of green.', 
            inline: true },
	)
	.addFields({ name: 'How is it known?', value: 'The State became known as Land of Light for being the first Brazilian province in the 19th century to abolish slavery.', 
        inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Image of the State', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ceara')
        .setDescription('My State in Brazil.'),
        
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}