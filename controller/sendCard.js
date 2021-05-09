
const { getViewNowAnimal } = require('../api/asms')
const cardTemplate = require('../template/card')
const Lineuser = require('../model/Lineuser')
const { acceptDateLimit, asmsHost } = require('../config/api')

module.exports = async (event) => {
  console.log(event)
  const lineuser = new Lineuser(event.source)

  let data = await getViewNowAnimal({})
  const showList = await lineuser.getShowList()

  data = data.filter((one) => one.pic !== '' && +new Date(one.AcceptDate) > (+new Date() - acceptDateLimit * 1000) && !showList.includes(one.AnimalId))

  if (data.length === 0) {
    await event.reply({
      'type': 'text',
      'text': '已抽所有完靈魂貓貓，請改天再來～',
    })
    return
  }
  const one = data[Math.ceil(Math.random() * data.length) - 1]

  await lineuser.saveShowList(one.AnimalId)
  await event.reply(cardTemplate({
    id: one.AnimalId,
    image: `${asmsHost}/Amlapp/Upload/Pic/${one.pic.split('.')[0]}_org.${one.pic.split('.')[1]}`,
    shelterName: one.ShelterName,
    sexName: one.SexName === '母' ? '女孩' : '男孩',
    link: `${asmsHost}/Amlapp/App/AnnounceList.aspx?Id=${one.AnimalId}&AcceptNum=${one.AcceptNum}&PageType=Adopt`.replace(' ', ''),
  }))
}


