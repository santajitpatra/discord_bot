import { REST, Routes } from "discord.js";
const CLIENT_ID = "1127162860389285908";
const TOKEN =
  "MTEyNzE2Mjg2MDM4OTI4NTkwOA.GAhCig.UyGhAD3UjNFozyqDGGsOt1qwUqfvmXkO1_6wBM";


const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Replies with create",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
