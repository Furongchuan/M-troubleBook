// 获取collection主要内容视图
const appCollectionMainView = require('../views/app-collection.html');
// 获取collection的info数据
const { getCollectionInfoData, getCollectionSortData }= require('../models/app-collection-mode');

const renderCollection = async() => {
  let order = 'commented_at';
  // 控制info视图
  class renderInfoCollection {
    constructor () {
      this.collectionData;
    }
    // 初始化
    async init () {
      this.collectionData = await getCollectionInfoData();
      this.storedData();
      $('#app #main-collection').html(
        Handlebars.compile(appCollectionMainView)(this.collectionData)
      )
      new clickHandler('.collection-main_info_intro',this.collectionData).handleIntro();
    }
    // 处理数据
    storedData () {
      this.collectionData.nickname = this.collectionData.owner.nickname;
      this.collectionData.subscribers_count = this.turnNumberToString(this.collectionData.subscribers_count);
      this.collectionData.notes_count = this.turnNumberToString(this.collectionData.notes_count);
      this.collectionData.content_without_html = this.turnContentWithout(this.collectionData.content_without_html) + `<i class="iconfont icon-jiantou_down"></i>`;
    }

    // 把数字准换为字符，几万，小数点后保留1位
    turnNumberToString (number) {
      let num = Math.round(number/1000)/10;
      let str = num + "万"
      return str
    }

    // 断句
    turnContentWithout (str) {
      let newStr
      if(str.length > 60)  newStr = str.substring(0,60);
      return newStr;
    }
  }
  // 控制sort视图
  class renderSortCollection {
    constructor () {
      this.collectionData;
    }
    // 初始化
    async init () {
      this.collectionData = await getCollectionSortData(order); 
      new clickHandler('.collection-main_sort li').handleSort();
      console.log(this.collectionData);
    }
    // 数据改变
    async renderNewData () {
      this.init()
      console.log(this.collectionData);
    }
  }
  // 点击事件类
  class clickHandler {
    constructor (name,data) {
      this.odom = document.querySelector(name);
      this.$odom=$(name)
      this.data = data || null;
    }
    // Intro的点击事件
    handleIntro () {
      let introBool = true;
      this.odom.addEventListener('click',() => {
      if(introBool){
        this.odom.innerHTML = this.data.content_in_full + `收起<i class="iconfont icon-jiantou_up"></i>`
      }else{
        this.odom.innerHTML = this.data.content_without_html
      }
      introBool = !introBool;
      })
    }
    // Sort的点击事件
     handleSort () {
      $(this.$odom).on('click',this.sortclickHandler);
    }
    sortclickHandler () {
      if($(this).hasClass('active')) return;
      $(this).toggleClass('active').siblings('li').removeClass('active');
      order=this.id;
      new renderSortCollection().renderNewData();
    }
  }
  new renderInfoCollection().init();
  new renderSortCollection().init();
}

module.exports = { 
  renderCollection
 }