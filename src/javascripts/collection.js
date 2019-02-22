const appController = require('./controllers/app-controller');
const appCollectionController = require('./controllers/app-collection-controller');

// 全局放入header视图
appController.renderAll()
// collection放入main视图
appCollectionController.renderCollection();