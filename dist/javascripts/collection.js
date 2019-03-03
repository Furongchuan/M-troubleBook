/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/collection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理\r\nconst api = {\r\n  request ({\r\n      url, data, methods\r\n  }, mock) {\r\n      return $.ajax({\r\n          url: (mock ? '' : '/fanshu' ) + url,\r\n          data: data || {},\r\n          methods: methods || 'get',\r\n          success: (res) => {\r\n              return res\r\n          },\r\n          error: (error) => {\r\n              console.log('请求出错了', error)\r\n          }\r\n      }) \r\n  },\r\n  mock (options) {\r\n      return this.request(options, true)\r\n  }\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/collection.js":
/*!***************************************!*\
  !*** ./src/javascripts/collection.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appController = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\");\r\nconst appCollectionController = __webpack_require__(/*! ./controllers/app-collection-controller */ \"./src/javascripts/controllers/app-collection-controller.js\");\r\n\r\n// 全局放入header视图\r\nappController.renderAll()\r\n// collection放入main视图\r\nappCollectionController.renderCollection();\n\n//# sourceURL=webpack:///./src/javascripts/collection.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-collection-controller.js":
/*!******************************************************************!*\
  !*** ./src/javascripts/controllers/app-collection-controller.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 获取collection主要内容视图\r\nconst appCollectionMainView = __webpack_require__(/*! ../views/app-collection.html */ \"./src/javascripts/views/app-collection.html\");\r\n// 获取sort视图\r\nconst appCollectionSortView = __webpack_require__(/*! ../views/app-index_bottom.html */ \"./src/javascripts/views/app-index_bottom.html\")\r\n// 获取footer视图\r\nconst appFooterView = __webpack_require__(/*! ../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\")\r\n// 获取collection的info数据\r\nconst { getCollectionInfoData, getCollectionSortData }= __webpack_require__(/*! ../models/app-collection-mode */ \"./src/javascripts/models/app-collection-mode.js\");\r\n// 获取登录视图控制\r\nconst appLogin = __webpack_require__(/*! ./app-login-controller */ \"./src/javascripts/controllers/app-login-controller.js\");\r\n\r\nconst renderCollection = async() => {\r\n  // 单例\r\n  class Collection {\r\n    constructor () {\r\n      return Collection.info || this.createRenderInfoViews();\r\n    }\r\n    createRenderInfoViews () {\r\n      let info = new renderInfoViews();\r\n      Collection.info = info;\r\n      new renderSort().init();\r\n      return Collection.info\r\n    }\r\n  }\r\n  // info数据处理\r\n  class InfoDataProcessing {\r\n    constructor () {\r\n      this.collectionData = this.init();\r\n    }\r\n    // 初始化\r\n    async init () {\r\n      let data = await getCollectionInfoData();\r\n      this.dataProcessing(data);\r\n      return data;\r\n    }\r\n    getInfoData () {\r\n      return this.collectionData;\r\n    }\r\n    // 处理数据\r\n    dataProcessing (data) {\r\n      data.nickname = data.owner.nickname;\r\n      data.subscribers_count = this.turnNumberToString(data.subscribers_count);\r\n      data.notes_count = this.turnNumberToString(data.notes_count);\r\n      data.content_without_html = this.turnContentWithout(data.content_without_html) + `<i class=\"iconfont icon-jiantou_down\"></i>`;\r\n    }\r\n\r\n    // 把数字准换为字符，几万，小数点后保留1位\r\n    turnNumberToString (number) {\r\n      let num = Math.round(number/1000)/10;\r\n      let str = num + \"万\"\r\n      return str\r\n    }\r\n\r\n    // 断句\r\n    turnContentWithout (str) {\r\n      let newStr\r\n      if(str.length > 60)  newStr = str.substring(0,60);\r\n      return newStr;\r\n    }\r\n  }\r\n  // 渲染info视图\r\n  class renderInfoViews {\r\n    constructor () {\r\n      this.infoDataPromise = new InfoDataProcessing().getInfoData()\r\n      this.data;\r\n      this.introEvents;\r\n      this.introBool = true;\r\n    }\r\n    // 初始化\r\n    async init () {\r\n      await this.getData(); \r\n      this.bindEvents();\r\n    }\r\n    // 获取数据\r\n    async getData () {\r\n      let data;\r\n      await this.infoDataPromise.then((result) =>{\r\n        data = result\r\n      })\r\n      this.data = data;\r\n      this.render();\r\n    }\r\n    // 渲染视图\r\n    render () {\r\n      $('#app #main-collection').html(\r\n        Handlebars.compile(appCollectionMainView)(this.data)\r\n      )\r\n      $('#app #footer').html(appFooterView)\r\n      appLogin.renderLogin({\r\n        '.collection-main_info_follow':'click',\r\n        '.footer-wrap-panel button':'click',\r\n      });\r\n    }\r\n    // 绑定事件\r\n    bindEvents () {\r\n      // 点击详情拉伸\r\n      this.introEvents = new collectionBtn('.collection-main_info_intro', {\r\n        'click': this.introDownAndUp.bind(this)\r\n      });\r\n    }\r\n    introDownAndUp () {\r\n      if(this.introBool) {\r\n        this.introEvents.el.innerHTML = this.data.content_in_full + `收起<i class=\"iconfont icon-jiantou_up\"></i>`;\r\n      }else{\r\n        this.introEvents.el.innerHTML = this.data.content_without_html;\r\n      }\r\n      this.introBool = !this.introBool;\r\n    }\r\n  }\r\n\r\n  // sort数据处理\r\n  class sortDataProcessing {\r\n    constructor (order) {\r\n      this.collectionData = this.init(order);;\r\n    }\r\n    // 初始化\r\n    async init (order) {\r\n      let data = await getCollectionSortData(order); \r\n      return data;\r\n    }\r\n    getSortData () {\r\n      return this.collectionData;\r\n    }\r\n  }\r\n  // 渲染sort视图\r\n  class renderSort {\r\n    constructor () {\r\n      this.order = 'commented_at';\r\n      this.data;\r\n      this.sortEvents;\r\n      this.haveData = {};\r\n    }\r\n    async init() {\r\n      await this.getData();\r\n      this.bindEvents();\r\n    }\r\n    // 获取数据\r\n    async getData () {\r\n      let data;\r\n      if( !this.haveData[this.order] ){\r\n        await new sortDataProcessing(this.order).getSortData().then((result) =>{\r\n          data = result;\r\n        })\r\n        this.haveData[this.order] = data;\r\n      }else{\r\n        data = this.haveData[this.order];\r\n      }\r\n      this.data = data;\r\n      this.render();\r\n    }\r\n    // 渲染视图\r\n    render () {\r\n      $('.collection-main_sortlist').html(\r\n        Handlebars.compile(appCollectionSortView)({ tapsDown:this.data })\r\n      )\r\n    }\r\n    bindEvents () {\r\n      this.sortEvents = new collectionBtn('.collection-main_sort li', {\r\n        'click': this.otherArticle.bind(this)\r\n      },false);\r\n    }\r\n    // 查看其他文章\r\n    otherArticle (e) {\r\n      if($(e.target).hasClass('active')) return;\r\n      $(e.target).toggleClass('active').siblings('li').removeClass('active');\r\n      this.order = e.target.id;\r\n      this.getData()\r\n    }\r\n  }\r\n  // 绑定事件类\r\n  class collectionBtn {\r\n    constructor (selector, options,way=true) {     \r\n      this.$el = $(selector)\r\n      this.el = this.$el[0]\r\n      this.options = options\r\n      if (way) {\r\n        this.bindJsEvents()\r\n      }else {\r\n        this.bindJqEvents()\r\n      }\r\n    }\r\n    bindJsEvents () {\r\n      for( var key in this.options ) {\r\n        this.el.addEventListener(key, this.options[key])\r\n      }\r\n      return this;\r\n    }\r\n    bindJqEvents () {\r\n      for( var key in this.options ) {\r\n        this.$el.on(key, this.options[key])\r\n      }\r\n      return this;\r\n    }\r\n  }\r\n\r\n\r\n  new Collection().init()\r\n  \r\n  \r\n}\r\n\r\nmodule.exports = { \r\n  renderCollection\r\n }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-collection-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appHeaderView = __webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\");\r\nconst renderAll = () => {\r\n  $('#app #header').html(appHeaderView);\r\n}\r\n\r\nmodule.exports = { \r\n  renderAll\r\n }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-login-controller.js":
/*!*************************************************************!*\
  !*** ./src/javascripts/controllers/app-login-controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appLoginView = __webpack_require__(/*! ../views/add-login.html */ \"./src/javascripts/views/add-login.html\");\r\n// const { getBooksList } = require('../models/app-index-model')\r\n\r\nconst renderLogin = async(obj) => {\r\n  \r\n  // 渲染login视图\r\n  class renderLoginView {\r\n    constructor (obj) {\r\n      this.showSwitch = obj;\r\n      this.ologin;\r\n      this.init();\r\n    }\r\n    init(){\r\n     this.render();\r\n    }\r\n    // 渲染视图\r\n    render () {\r\n      $('#app').append(appLoginView);\r\n      this.ologin = $('.login')\r\n      this.bindEvents();\r\n    }\r\n    // 绑定事件\r\n    bindEvents () {\r\n      new collectionBtn('.login_header-icon',{\r\n        'click':this.show.bind(this)\r\n      });\r\n     for(let key in this.showSwitch){\r\n      new collectionBtn(key,{\r\n        'click':this.show.bind(this)\r\n      });\r\n     }\r\n    }\r\n    show () {\r\n      if(this.ologin.hasClass('login-hide')) {\r\n        this.ologin.removeClass('login-hide'); \r\n        return;\r\n      }\r\n      this.ologin.toggleClass('login-hide'); \r\n    }\r\n  }\r\n\r\n   // 绑定事件类\r\n  class collectionBtn {\r\n    constructor (selector, options,way=true) {     \r\n      this.$el = $(selector)\r\n      this.el = this.$el[0]\r\n      this.options = options\r\n      if (way) {\r\n        this.bindJsEvents()\r\n      }else {\r\n        this.bindJqEvents()\r\n      }\r\n    }\r\n    bindJsEvents () {\r\n      for( var key in this.options ) {\r\n        this.el.addEventListener(key, this.options[key])\r\n      }\r\n      return this;\r\n    }\r\n    bindJqEvents () {\r\n      for( var key in this.options ) {\r\n        this.$el.on(key, this.options[key])\r\n      }\r\n      return this;\r\n    }\r\n  }\r\n  new renderLoginView(obj);\r\n}\r\n\r\nmodule.exports = { renderLogin }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-login-controller.js?");

/***/ }),

/***/ "./src/javascripts/models/app-collection-mode.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/models/app-collection-mode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\r\n\r\n// 获取UTL中的参数\r\nlet slug = getParam(\"slug\");\r\nfunction getParam(paramName) { \r\n  paramValue = \"\", isFound = !1; \r\n  if (this.location.search.indexOf(\"?\") == 0 && this.location.search.indexOf(\"=\") > 1) { \r\n      arrSource = unescape(this.location.search).substring(1, this.location.search.length).split(\"&\"), i = 0; \r\n      while (i < arrSource.length && !isFound) arrSource[i].indexOf(\"=\") > 0 && arrSource[i].split(\"=\")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split(\"=\")[1], isFound = !0), i++ \r\n  } \r\n  return paramValue == \"\" && (paramValue = null), paramValue \r\n} \r\n\r\n// 获取Collection中info数据\r\nconst getCollectionInfoData = () => {\r\n  return api.request({ url: `asimov/collections/slug/${slug}`})\r\n}\r\nconst getCollectionSortData = (order) => {\r\n  return api.request({ url: `asimov/collections/slug/${slug}/public_notes?page=1&count=10&order_by=${order}`})\r\n}\r\nmodule.exports = {\r\n  getCollectionInfoData,\r\n  getCollectionSortData\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-collection-mode.js?");

/***/ }),

/***/ "./src/javascripts/views/add-login.html":
/*!**********************************************!*\
  !*** ./src/javascripts/views/add-login.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"login login-hide\\\">  <div class=\\\"login_header\\\">    <h3>登录繁书</h3>    <button class=\\\"login_header-icon\\\">      <i class=\\'iconfont icon-quxiao\\'></i>    </button>  </div>  <form>    <div class=\\\"login_input\\\"><i class=\\\"iconfont icon-yonghu\\\"></i><input placeholder=\\\"手机或邮箱\\\" type=\\\"text\\\"></div>    <div class=\\\"login_input\\\"><i class=\\\"iconfont icon-yidongduanicon-\\\"></i><input placeholder=\\\"密码\\\" type=\\\"password\\\"></div>    <button type=\\\"button\\\">登录</button>  </form>  <div class=\\\"login-more-sign\\\">    <h6>社交帐号直接登录</h6>    <ul>      <li><a href=\\\"\\\" class=\\\"qq\\\"><i class=\\\"iconfont icon-qq\\\"></i></a></li>      <li><a href=\\\"\\\" class=\\'weibo\\'><i class=\\\"iconfont icon-weibo\\\"></i></a></li>      <li><a href=\\\"\\\" class=\\'douban\\'><i class=\\\"iconfont icon-douban\\\"></i></a></li>    </ul>  </div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/add-login.html?");

/***/ }),

/***/ "./src/javascripts/views/app-collection.html":
/*!***************************************************!*\
  !*** ./src/javascripts/views/app-collection.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-collection-main\\\">  <div class=\\\"collection-main__info\\\">    <img src=\\\"{{image}}\\\" alt=\\\"avatar\\\" class=\\\"collection-main_info_avatar\\\">    <div class=\\\"collection-info_main-summary\\\">      <h4 class=\\\"collection-main_info_name\\\">{{title}}</h4>      <span class=\\\"collection-main_info_desc\\\"><a href=\\\"\\\">{{nickname}}</a> 编，{{notes_count}}篇文章，{{subscribers_count}}人关注</span>      <div class=\\\"collection-main_info_intro\\\">          {{{content_without_html}}}      </div>      <button class=\\\"collection-main_info_follow\\\"><i class=\\\"iconfont icon-jiahao\\\"></i> 关注</button>    </div>  </div>  <hr>  <ul class=\\\"collection-main_sort\\\">    <li id=\\'added_at\\'>最新收录</li>    <li id=\\'commented_at\\' class=\\\"active\\\">最新评论</li>    <li id=\\'top\\'>热门</li>  </ul>  <div class=\\\"collection-main_sortlist\\\"></div></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-collection.html?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer>  <div class=\\\"footer-wrap\\\">    <hr>    <div class=\\\"footer-wrap-panel\\\">      <button class=\\\"item\\\">登录</button>      <span class=\\\"line\\\">|</span>      <a href=\\\"/\\\" class=\\\"item router-link-active\\\">热门文章</a>    </div>  </div></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">  <img src=\\\"./static/images/nav-logo.faf216af.png\\\" alt=\\\"\\\" class=\\\"header-logo\\\">  <h3 class=\\\"header-title\\\">创作你的创作</h3></header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-index_bottom.html":
/*!*****************************************************!*\
  !*** ./src/javascripts/views/app-index_bottom.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"    <ul class=\\\"tbook-list__item\\\">        {{#each tapsDown}}            <li class=\\\"tbook-list__item-info\\\">                <div class=\\\"tbook-list__left\\\">                                <a class=\\\"tbook-list__item-title\\\" href=\\\"detailed.html?slug={{object.data.slug}}\\\">                        <div>                            <h1>{{object.data.title}}</h1>                            <p>{{object.data.public_abbr}}</p>                         </div>                    </a>                    <div class=\\\"tbook-list__items\\\">                        <i class=\\\"iconfont icon-weibiaoti--fuben-\\\" style=\\\"color: #ea6f5a;margin-right: 3px;\\\"></i>                        <span>                            {{object.data.total_fp_amount}}                        </span>                        <span>                            {{object.data.user.nickname}}                        </span>                        <span>                            <i class=\\\"iconfont icon-duihuakuang\\\" style=\\\"color: #ea6f5a;margin-right: 3px;\\\"></i>                            {{object.data.public_comments_count}}                        </span>                        <span>                            <i class=\\\"iconfont icon-xin\\\" style=\\\"color: #ea6f5a;margin-right: 3px;\\\"></i>                            {{object.data.likes_count}}                        </span>                    </div>                </div>                {{#if object.data.list_image_url}}            <div class=\\\"tbook-list__right__div\\\">                <span class=\\\"tbook-list__right\\\">                    <img src=\\\"{{object.data.list_image_url}}\\\" alt=\\\"\\\">                </span>             </div>                 {{/if}}            </li>        {{/each}}    </ul>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-index_bottom.html?");

/***/ })

/******/ });