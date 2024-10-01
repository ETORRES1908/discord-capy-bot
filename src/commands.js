import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'
import { APPLICATION_COMMANDS } from './const.js'
dotenv.config()

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    const response = await rest.put(Routes.applicationCommands(process.env.APP_ID), { body: APPLICATION_COMMANDS })
    console.log(response)
    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
  // TODO: log
})()
