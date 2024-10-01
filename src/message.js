import { EMBED_TYPE } from './const.js'

export const messageCallback = async (message) => {
  if (message.author.bot) return
  if (message.embeds.length === 0) return
  const embedsUrls = message.embeds.map(embed => {
    const currentUrl = new URL(embed.data.url)
    const matchedHost = EMBED_TYPE.find(({ host, embed }) => {
      if (currentUrl.pathname.indexOf('photo') !== -1) return false
      return currentUrl.host.indexOf(host) !== -1 && currentUrl.host !== embed
    })
    if (!matchedHost) return false
    return currentUrl.href.replace(currentUrl.host, matchedHost.embed)
  }).filter(Boolean)

  if (embedsUrls.length === 0) return
  message.suppressEmbeds(true)
  message.channel.send(embedsUrls.join('\n'))
}
