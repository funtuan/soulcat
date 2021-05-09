const linebot = require('linebot')
const config = require('./config/linebot')
const sendCard = require('./controller/sendCard')

const bot = linebot(config)

bot.on('message', async (event) => {
  if (event.message.text === '抽') {
    await sendCard(event)
  }
})

bot.listen('/linewebhook', config.port)

console.log(`starting at port ${config.port}`)
