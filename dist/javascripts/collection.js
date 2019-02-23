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

eval("// 获取collection主要内容视图\r\nconst appCollectionMainView = __webpack_require__(/*! ../views/app-collection.html */ \"./src/javascripts/views/app-collection.html\");\r\n// 获取collection的info数据\r\nconst { getCollectionInfoData, getCollectionSortData }= __webpack_require__(/*! ../models/app-collection-mode */ \"./src/javascripts/models/app-collection-mode.js\");\r\n\r\nconst renderCollection = async() => {\r\n  let order = 'commented_at';\r\n  // 控制info视图\r\n  class renderInfoCollection {\r\n    constructor () {\r\n      this.collectionData;\r\n    }\r\n    // 初始化\r\n    async init () {\r\n      this.collectionData = await getCollectionInfoData();\r\n      this.storedData();\r\n      $('#app #main-collection').html(\r\n        Handlebars.compile(appCollectionMainView)(this.collectionData)\r\n      )\r\n      new clickHandler('.collection-main_info_intro',this.collectionData).handleIntro();\r\n    }\r\n    // 处理数据\r\n    storedData () {\r\n      this.collectionData.nickname = this.collectionData.owner.nickname;\r\n      this.collectionData.subscribers_count = this.turnNumberToString(this.collectionData.subscribers_count);\r\n      this.collectionData.notes_count = this.turnNumberToString(this.collectionData.notes_count);\r\n      this.collectionData.content_without_html = this.turnContentWithout(this.collectionData.content_without_html) + `<i class=\"iconfont icon-jiantou_down\"></i>`;\r\n    }\r\n\r\n    // 把数字准换为字符，几万，小数点后保留1位\r\n    turnNumberToString (number) {\r\n      let num = Math.round(number/1000)/10;\r\n      let str = num + \"万\"\r\n      return str\r\n    }\r\n\r\n    // 断句\r\n    turnContentWithout (str) {\r\n      let newStr\r\n      if(str.length > 60)  newStr = str.substring(0,60);\r\n      return newStr;\r\n    }\r\n  }\r\n  // 控制sort视图\r\n  class renderSortCollection {\r\n    constructor () {\r\n      this.collectionData;\r\n    }\r\n    // 初始化\r\n    async init () {\r\n      this.collectionData = await getCollectionSortData(order); \r\n      new clickHandler('.collection-main_sort li').handleSort();\r\n      console.log(this.collectionData);\r\n    }\r\n    // 数据改变\r\n    async renderNewData () {\r\n      this.init()\r\n      console.log(this.collectionData);\r\n    }\r\n  }\r\n  // 点击事件类\r\n  class clickHandler {\r\n    constructor (name,data) {\r\n      this.odom = document.querySelector(name);\r\n      this.$odom=$(name)\r\n      this.data = data || null;\r\n    }\r\n    // Intro的点击事件\r\n    handleIntro () {\r\n      let introBool = true;\r\n      this.odom.addEventListener('click',() => {\r\n      if(introBool){\r\n        this.odom.innerHTML = this.data.content_in_full + `收起<i class=\"iconfont icon-jiantou_up\"></i>`\r\n      }else{\r\n        this.odom.innerHTML = this.data.content_without_html\r\n      }\r\n      introBool = !introBool;\r\n      })\r\n    }\r\n    // Sort的点击事件\r\n     handleSort () {\r\n      $(this.$odom).on('click',this.sortclickHandler);\r\n    }\r\n    sortclickHandler () {\r\n      if($(this).hasClass('active')) return;\r\n      $(this).toggleClass('active').siblings('li').removeClass('active');\r\n      order=this.id;\r\n      new renderSortCollection().renderNewData();\r\n    }\r\n  }\r\n  new renderInfoCollection().init();\r\n  new renderSortCollection().init();\r\n}\r\n\r\nmodule.exports = { \r\n  renderCollection\r\n }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-collection-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appHeaderView = __webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\");\r\nconst renderAll = () => {\r\n  $('#app #header').html(appHeaderView);\r\n}\r\n\r\nmodule.exports = { \r\n  renderAll\r\n }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/models/app-collection-mode.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/models/app-collection-mode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\r\n\r\n// 获取UTL中的参数\r\nlet slug = getParam(\"slug\");\r\nfunction getParam(paramName) { \r\n  paramValue = \"\", isFound = !1; \r\n  if (this.location.search.indexOf(\"?\") == 0 && this.location.search.indexOf(\"=\") > 1) { \r\n      arrSource = unescape(this.location.search).substring(1, this.location.search.length).split(\"&\"), i = 0; \r\n      while (i < arrSource.length && !isFound) arrSource[i].indexOf(\"=\") > 0 && arrSource[i].split(\"=\")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split(\"=\")[1], isFound = !0), i++ \r\n  } \r\n  return paramValue == \"\" && (paramValue = null), paramValue \r\n} \r\n\r\n// 获取Collection中info数据\r\nconst getCollectionInfoData = () => {\r\n  return api.request({ url: `asimov/collections/slug/${slug}`})\r\n}\r\nconst getCollectionSortData = (order) => {\r\n  return api.request({ url: `asimov/collections/slug/${slug}/public_notes?page=1&count=10&order_by=${order}`})\r\n}\r\nmodule.exports = {\r\n  getCollectionInfoData,\r\n  getCollectionSortData\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-collection-mode.js?");

/***/ }),

/***/ "./src/javascripts/views/app-collection.html":
/*!***************************************************!*\
  !*** ./src/javascripts/views/app-collection.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-collection-main\\\">  <div class=\\\"collection-main__info\\\">    <img src=\\\"{{image}}\\\" alt=\\\"avatar\\\" class=\\\"collection-main_info_avatar\\\">    <div class=\\\"collection-info_main-summary\\\">      <h4 class=\\\"collection-main_info_name\\\">{{title}}</h4>      <span class=\\\"collection-main_info_desc\\\"><a href=\\\"\\\">{{nickname}}</a> 编，{{notes_count}}篇文章，{{subscribers_count}}人关注</span>      <div class=\\\"collection-main_info_intro\\\">          {{{content_without_html}}}      </div>      <button class=\\\"collection-main_info_follow\\\"><i class=\\\"iconfont icon-jiahao\\\"></i> 关注</button>    </div>  </div>  <hr>  <ul class=\\\"collection-main_sort\\\">    <li id=\\'added_at\\'>最新收录</li>    <li id=\\'commented_at\\' class=\\\"active\\\">最新评论</li>    <li id=\\'top\\'>热门</li>  </ul></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-collection.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">  <img src=\\\"./static/images/nav-logo.faf216af.png\\\" alt=\\\"\\\" class=\\\"header-logo\\\">  <h3 class=\\\"header-title\\\">创作你的创作</h3></header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ })

/******/ });