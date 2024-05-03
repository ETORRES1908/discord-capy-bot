import { COMMANDS } from './const.js'
export const interactionCallback = async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === COMMANDS.PING) {
    const users = interaction.guild.members.cache.map(member => {
      if (member.user.bot === true) return false
      return member.user.username
    }).filter(Boolean)
    const randomUser = Math.floor(Math.random() * users.length)
    await interaction.reply(`${users[randomUser]} kbro!`)
  }
  if (interaction.commandName === COMMANDS.PURGE) {
    const user = interaction.options.getUser('user')
    const amount = interaction.options.getInteger('amount')

    const messages = await interaction.channel.messages.fetch({ limit: 50 })
    const delMessages = user ? messages.filter(msg => msg.author.id === user.id) : messages
    const bulkDel = Array.from(delMessages.values()).slice(0, amount)
    await interaction.channel.bulkDelete(bulkDel)
    await interaction.reply(`Deleted ${bulkDel.length} messages from ${user ? user.username : 'all'}!`)
  }
}
