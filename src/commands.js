import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'
import { COMMANDS } from './const.js'
dotenv.config()

const commands = [
  {
    name: COMMANDS.PING,
    description: 'Replies with Pong!',
    type: 1
  },
  {
    name: COMMANDS.PURGE,
    description: 'Delete specified amount of messages',
    type: 1,
    options: [
      {
        name: 'amount',
        description: 'Amount of messages to delete',
        type: 4,
        required: true
      },
      {
        name: 'user',
        description: 'User to delete message',
        type: 6
      }
    ]
  }
]

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    const response = await rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands })
    console.log(response)
    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
})()
