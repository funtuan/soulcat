const asyncRedis = require('async-redis')
const config = require('../config/redis')

const client = asyncRedis.createClient(config)

module.exports = {
  async get(key) {
    const data = await client.get(key)

    try {
      return JSON.parse(data)
    } catch (error) {
      return data
    }
  },
  async set(key, data, ...t) {
    if (typeof(data) === 'object') {
      return await client.set(key, JSON.stringify(data), ...t)
    }
    return await client.set(key, data, ...t)
  },

  del(key) {
    return client.del(key)
  },
}
