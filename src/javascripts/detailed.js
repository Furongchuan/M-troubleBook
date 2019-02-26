const appController = require('./controllers/app-controller');
const appDetailedPage = require('./controllers/app-detailed-controller');


// 全局放入header视图
appController.renderAll()
// 详细页
appDetailedPage.renders()