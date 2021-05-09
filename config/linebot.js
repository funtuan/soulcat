require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
}

