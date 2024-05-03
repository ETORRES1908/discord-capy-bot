import dotenv from 'dotenv'
import { Client, Events, GatewayIntentBits } from 'discord.js'
import { interactionCallback } from './src/interaction.js'
// import { messageCallback } from './src/message.js'
import { validateUrl } from './src/utils.js'
import { EMBED_TYPE } from './src/const.js'

dotenv.config()

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

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return

  // console.log('new message ->', message.embeds.forEach(embed => {
  //   console.log(embed.data.url)
  // }))
  const currentUrl = validateUrl(message.content)
  if (!currentUrl) return
  const matchedHost = EMBED_TYPE.find(({ host, embed }) => {
    if (currentUrl.pathname.indexOf('photo') !== -1) return false
    return currentUrl.host.indexOf(host) !== -1 && currentUrl.host !== embed
  })
  if (!matchedHost) return

  const newUrl = currentUrl.href.replace(currentUrl.host, matchedHost.embed)

  message.delete()
  message.channel.send(newUrl)
})

client.login(process.env.DISCORD_TOKEN)
