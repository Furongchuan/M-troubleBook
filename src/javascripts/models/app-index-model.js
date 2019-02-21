const api = require('../api')
// 获取主页内容
const getBooksList = () => {
  return api.request({ url: 'asimov/subscriptions/recommended_collections?except_collection_ids[]=4&except_collection_ids[]=95&except_collection_ids[]=14&except_collection_ids[]=21&except_collection_ids[]=83&except_collection_ids[]=76&except_collection_ids[]=283250' })
}

module.exports = {
  getBooksList,
}