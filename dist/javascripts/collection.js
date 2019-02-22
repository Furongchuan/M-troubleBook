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

eval("// 获取collection主要内容视图\r\nconst appCollectionMainView = __webpack_require__(/*! ../views/app-collection.html */ \"./src/javascripts/views/app-collection.html\");\r\n// 获取collection的info数据\r\nconst { getCollectionData }= __webpack_require__(/*! ../models/app-collection-mode */ \"./src/javascripts/models/app-collection-mode.js\");\r\nconst renderCollection = async() => {\r\n  let collectionData = await getCollectionData();\r\n  let { title, image, content_without_html, content_in_full, owner, subscribers_count, notes_count } =  collectionData ;\r\n  let nickname = owner.nickname;\r\n\r\n  subscribers_count = turnNumberToString(subscribers_count);\r\n  notes_count = turnNumberToString(notes_count);\r\n  content_without_html = turnContentWithout(content_without_html) + `<i class=\"iconfont icon-jiantou_down\"></i>`;\r\n  $('#app #main-collection').html(\r\n    Handlebars.compile(appCollectionMainView)({image:image, title:title, content: content_without_html, nickname:nickname, \r\n      subscribers_count:subscribers_count, notes_count:notes_count})\r\n  )\r\n  handleIntro();\r\n\r\n  // intro点击切换视图内容\r\n  function handleIntro (){\r\n    let oIntro = document.querySelector('.collection-main_info_intro');\r\n    let introBool = true;\r\n    oIntro.addEventListener('click',() => {\r\n      if(introBool){\r\n        oIntro.innerHTML = content_in_full + `收起<i class=\"iconfont icon-jiantou_up\"></i>`\r\n      }else{\r\n        oIntro.innerHTML = content_without_html\r\n      }\r\n      introBool = !introBool;\r\n    })\r\n  } \r\n  // 断句\r\n  function turnContentWithout (str) {\r\n    let newStr\r\n    if(str.length > 60)  newStr = str.substring(0,60);\r\n    return newStr;\r\n  }\r\n  // 把数字准换为字符，几万，小数点后保留1位\r\n  function turnNumberToString (number){\r\n    let num = Math.round(number/1000)/10;\r\n    let str = num + \"万\"\r\n    return str\r\n  }\r\n}\r\n\r\nmodule.exports = { \r\n  renderCollection\r\n }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-collection-controller.js?");

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

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\r\n\r\n// 获取Collection数据\r\nconst getCollectionData = () => {\r\n  let slug = getParam(\"slug\");\r\n  return api.request({ url: `asimov/collections/slug/${slug}`})\r\n\r\n  function getParam(paramName) { \r\n    paramValue = \"\", isFound = !1; \r\n    if (this.location.search.indexOf(\"?\") == 0 && this.location.search.indexOf(\"=\") > 1) { \r\n        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split(\"&\"), i = 0; \r\n        while (i < arrSource.length && !isFound) arrSource[i].indexOf(\"=\") > 0 && arrSource[i].split(\"=\")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split(\"=\")[1], isFound = !0), i++ \r\n    } \r\n    return paramValue == \"\" && (paramValue = null), paramValue \r\n  } \r\n}\r\nmodule.exports = {\r\n  getCollectionData,\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-collection-mode.js?");

/***/ }),

/***/ "./src/javascripts/views/app-collection.html":
/*!***************************************************!*\
  !*** ./src/javascripts/views/app-collection.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-collection-main\\\">  <div class=\\\"collection-main__info\\\">    <img src=\\\"{{image}}\\\" alt=\\\"avatar\\\" class=\\\"collection-main_info_avatar\\\">    <div class=\\\"collection-info_main-summary\\\">      <h4 class=\\\"collection-main_info_name\\\">{{title}}</h4>      <span class=\\\"collection-main_info_desc\\\"><a href=\\\"\\\">{{nickname}}</a> 编，{{notes_count}}篇文章，{{subscribers_count}}人关注</span>      <div class=\\\"collection-main_info_intro\\\">          {{{content}}}               </div>      <button class=\\\"collection-main_info_follow\\\"><i class=\\\"iconfont icon-jiahao\\\"></i> 关注</button>    </div>  </div>  <hr></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-collection.html?");

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