
const appController = require('./controllers/app-controller');
const appIndexPage = require('./controllers/app-index-controller')
const appCollectionController = require('./controllers/app-collection-controller');


// 全局放入header视图
appController.renderAll()
// index放入视图
appIndexPage.render()
// collection放入main视图
appCollectionController.renderCollection();
