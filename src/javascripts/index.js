
const appController = require('./controllers/app-controller');
const appIndexPage = require('./controllers/app-index-controller');

// 全局放入header视图
appController.renderAll()
// index放入视图
appIndexPage.render()
// index底部放入视图
appIndexPage.renderDown()