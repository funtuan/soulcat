
const redis = require('../unit/redis')

class Lineuser {
  constructor({
    userId,
  }) {
    this.userId = userId
  }

  key() {
    return {
      showList: `lineuser:showList:${this.userId}`,
    }
  }

  async getShowList() {
    const key = this.key().showList

    const data = await redis.get(key)
    if (!data) {
      return []
    }
    return data.list
  }

  async saveShowList(id) {
    const key = this.key().showList

    const data = await redis.get(key)
    let list

    if (!data) {
      list = []
    } else {
      list = data.list
    }
    if (!list.includes(id)) {
      list.push(id)
    }

    await redis.set(key, {
      userId: this.userId,
      list,
    })

    return list
  }
}

module.exports = Lineuser
