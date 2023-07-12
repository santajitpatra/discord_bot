import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();
const TOKEN = process.env.TOKEN;


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply({
      content: "Generting Short ID for " + url,
    });
  }
  message.reply({
    content: "hello from Bot",
  });
});

client.on("interactionCreate", async (interaction) => {
  await interaction.reply("Pong!");
});

client.login(TOKEN);
