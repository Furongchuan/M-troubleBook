const api = require('../api')

// 获取UTL中的参数
let slug = getParam("slug");
function getParam(paramName) { 
  paramValue = "", isFound = !1; 
  if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
      arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
      while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
  } 
  return paramValue == "" && (paramValue = null), paramValue 
} 

// 获取Collection中info数据
const getCollectionInfoData = () => {
  return api.request({ url: `asimov/collections/slug/${slug}`})
}
const getCollectionSortData = (order) => {
  return api.request({ url: `asimov/collections/slug/${slug}/public_notes?page=1&count=10&order_by=${order}`})
}
module.exports = {
  getCollectionInfoData,
  getCollectionSortData
}