const api = require('../api')
// 获取主页内容
const getHomeList = () => {
  return api.request({ url: 'asimov/trending/now?count=15&note_ids=' })
}

module.exports = {
  getHomeList,
}