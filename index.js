const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

const { TOKEN } = process.env;
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(
            `Failed! The command in ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]

        if (selected == 'bulbasaur') {
            await interaction.reply('For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.')
        } else if (selected == 'charmander') {
            await interaction.reply('The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.')
        } else if (selected == 'squirtle') {
            await interaction.reply('After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.')
        }
    }

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error('No command matching ' + interaction.commandName + ' was found.')
        return
    }

    try {
        await command.execute(interaction)
    }

    catch (error) {
        console.error(error)
        await interaction.reply({ content: 'There was an error while executing this command!', 
            ephemeral: true })
    }
})