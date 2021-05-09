
const axios = require('axios')
const NodeCache = require('node-cache')
const { cacheTTL, asmsHost } = require('../config/api')
const cache = new NodeCache()

module.exports = {
  async getViewNowAnimal({
    typeid = 2,
    page = 1,
    pageSize = 200,
    sortDirection = 'DESC',
    sortFields = 'AcceptDate',
  }) {
    console.log({
      typeid,
      page,
      pageSize,
      sortDirection,
      sortFields,
    })
    const key = `getViewNowAnimal:${typeid}:${page}:${pageSize}:${sortDirection}:${sortFields}`
    let data = cache.get(key)
    if (data) {
      console.log('cache')
      return data
    }

    const res = await axios.get(`${asmsHost}/Asms/api/ViewNowAnimal`, {
      params: {
        Typeid: typeid,
        pageSize,
        currentPage: page,
        sortDirection,
        sortFields,
      },
    })
    data = res.data

    cache.set(key, data, cacheTTL)
    return data
  },
}
