import dotenv from 'dotenv'
import { Client, Events, GatewayIntentBits } from 'discord.js'
import { interactionCallback } from '../interaction.js'
import { messageCallback } from '../message.js'

dotenv.config()
export function initializeClient () {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers
    ]
  })
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })

  client.on(Events.InteractionCreate, interactionCallback)

  client.on(Events.MessageCreate, messageCallback)

  client.login(process.env.DISCORD_TOKEN)
}
