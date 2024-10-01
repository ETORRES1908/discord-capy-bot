export const EMBED_TYPE = [
  {
    host: 'twitter.com',
    embed: 'fxtwitter.com'
  },
  {
    host: 'x.com',
    embed: 'fxtwitter.com'
  },
  {
    host: 'instagram.com',
    embed: 'ddinstagram.com'
  },
  {
    host: 'tiktok.com',
    embed: 'tiktxk.com'
  }

]
// TODO: COMMANDS
export const COMMANDS = {
  PING: 'ping',
  PURGE: 'purge',
  SEARCH: 'search'
}

export const APPLICATION_COMMANDS = [
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
  },
  {
    name: COMMANDS.SEARCH,
    description: 'Search for an input string on google using gemini AI',
    type: 1,
    options: [
      {
        name: 'query',
        description: 'Query to search for',
        type: 3,
        required: true
      }
    ]
  }
]
