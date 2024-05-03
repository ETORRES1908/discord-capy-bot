import { EMBED_TYPE } from './const.js'
import { validateUrl } from './utils.js'

export const messageCallback = async (message) => {
  if (message.author.bot) return
  console.log('new message ->', message.embeds)
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
}
