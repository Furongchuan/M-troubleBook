// 获取collection主要内容视图
const appCollectionMainView = require('../views/app-collection.html');
// 获取sort视图
const appCollectionSortView = require('../views/app-index_bottom.html')
// 获取collection的info数据
const { getCollectionInfoData, getCollectionSortData }= require('../models/app-collection-mode');
// 获取登录视图控制
const appLogin = require('./app-login-controller');

const renderCollection = async() => {
  // 单例
  class Collection {
    constructor () {
      return Collection.info || this.createRenderInfoViews();
    }
    createRenderInfoViews () {
      let info = new renderInfoViews();
      Collection.info = info;
      new renderSort().init();
      return Collection.info
    }
  }
  // info数据处理
  class InfoDataProcessing {
    constructor () {
      this.collectionData = this.init();
    }
    // 初始化
    async init () {
      let data = await getCollectionInfoData();
      this.dataProcessing(data);
      return data;
    }
    getInfoData () {
      return this.collectionData;
    }
    // 处理数据
    dataProcessing (data) {
      data.nickname = data.owner.nickname;
      data.subscribers_count = this.turnNumberToString(data.subscribers_count);
      data.notes_count = this.turnNumberToString(data.notes_count);
      data.content_without_html = this.turnContentWithout(data.content_without_html) + `<i class="iconfont icon-jiantou_down"></i>`;
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
  // 渲染info视图
  class renderInfoViews {
    constructor () {
      this.infoDataPromise = new InfoDataProcessing().getInfoData()
      this.data;
      this.introEvents;
      this.introBool = true;
    }
    // 初始化
    async init () {
      await this.getData(); 
      this.bindEvents();
    }
    // 获取数据
    async getData () {
      let data;
      await this.infoDataPromise.then((result) =>{
        data = result
      })
      this.data = data;
      this.render();
    }
    // 渲染视图
    render () {
      $('#app #main-collection').html(
        Handlebars.compile(appCollectionMainView)(this.data)
      )
      appLogin.renderLogin({
        '.collection-main_info_follow':'click'
      });
    }
    // 绑定事件
    bindEvents () {
      // 点击详情拉伸
      this.introEvents = new collectionBtn('.collection-main_info_intro', {
        'click': this.introDownAndUp.bind(this)
      });
    }
    introDownAndUp () {
      if(this.introBool) {
        this.introEvents.el.innerHTML = this.data.content_in_full + `收起<i class="iconfont icon-jiantou_up"></i>`;
      }else{
        this.introEvents.el.innerHTML = this.data.content_without_html;
      }
      this.introBool = !this.introBool;
    }
  }

  // sort数据处理
  class sortDataProcessing {
    constructor (order) {
      this.collectionData = this.init(order);;
    }
    // 初始化
    async init (order) {
      let data = await getCollectionSortData(order); 
      return data;
    }
    getSortData () {
      return this.collectionData;
    }
  }
  // 渲染sort视图
  class renderSort {
    constructor () {
      this.order = 'commented_at';
      this.data;
      this.sortEvents;
      this.haveData = {};
    }
    async init() {
      await this.getData();
      this.bindEvents();
    }
    // 获取数据
    async getData () {
      let data;
      if( !this.haveData[this.order] ){
        await new sortDataProcessing(this.order).getSortData().then((result) =>{
          data = result;
        })
        this.haveData[this.order] = data;
      }else{
        data = this.haveData[this.order];
      }
      this.data = data;
      this.render();
    }
    // 渲染视图
    render () {
      $('.collection-main_sortlist').html(
        Handlebars.compile(appCollectionSortView)({ tapsDown:this.data })
      )
    }
    bindEvents () {
      this.sortEvents = new collectionBtn('.collection-main_sort li', {
        'click': this.otherArticle.bind(this)
      },false);
    }
    // 查看其他文章
    otherArticle (e) {
      if($(e.target).hasClass('active')) return;
      $(e.target).toggleClass('active').siblings('li').removeClass('active');
      this.order = e.target.id;
      this.getData()
    }
  }
  // 绑定事件类
  class collectionBtn {
    constructor (selector, options,way=true) {     
      this.$el = $(selector)
      this.el = this.$el[0]
      this.options = options
      if (way) {
        this.bindJsEvents()
      }else {
        this.bindJqEvents()
      }
    }
    bindJsEvents () {
      for( var key in this.options ) {
        this.el.addEventListener(key, this.options[key])
      }
      return this;
    }
    bindJqEvents () {
      for( var key in this.options ) {
        this.$el.on(key, this.options[key])
      }
      return this;
    }
  }


  new Collection().init()
  
  
}

module.exports = { 
  renderCollection
 }