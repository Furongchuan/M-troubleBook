const appLoginView = require('../views/add-login.html');
// const { getBooksList } = require('../models/app-index-model')

const renderLogin = async(obj) => {
  
  // 渲染login视图
  class renderLoginView {
    constructor (obj) {
      this.showSwitch = obj;
      this.ologin;
      this.init();
    }
    init(){
     this.render();
    }
    // 渲染视图
    render () {
      $('#app').append(appLoginView);
      this.ologin = $('.login')
      this.bindEvents();
    }
    // 绑定事件
    bindEvents () {
      new collectionBtn('.login_header-icon',{
        'click':this.show.bind(this)
      });
     for(let key in this.showSwitch){
      new collectionBtn(key,{
        'click':this.show.bind(this)
      });
     }
    }
    show () {
      if(this.ologin.hasClass('login-hide')) {
        this.ologin.removeClass('login-hide'); 
        return;
      }
      this.ologin.toggleClass('login-hide'); 
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
  new renderLoginView(obj);
}

module.exports = { renderLogin }