// 获取collection主要内容视图
const appCollectionMainView = require('../views/app-collection.html');
// 获取collection的info数据
const collectionData = require('../models/app-collection-mode').collectionData


const renderCollection = () => {
  let { title, image, content_without_html, owner, subscribers_count, notes_count } =  collectionData ;
  let nickname = owner.nickname;
  subscribers_count = turnNumberToString(subscribers_count);
  notes_count = turnNumberToString(notes_count);
  content_without_html = turnContentWithout(content_without_html);
  $('#app #main').html(
    Handlebars.compile(appCollectionMainView)({image:image, title:title, content: content_without_html, nickname:nickname, 
      subscribers_count:subscribers_count, notes_count:notes_count})
  )
  
  // 断句
  function turnContentWithout (str) {
    let newStr
    if(str.length > 60)  newStr = str.substring(0,60);
    return newStr;
  }
  // 把数字准换为字符，几万，小数点后保留1位
  function turnNumberToString (number){
    let num = Math.round(number/1000)/10;
    let str = num + "万"
    return str
  }
}



module.exports = { 
  renderCollection
 }