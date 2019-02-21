
const appController = require('./controllers/app-controller');
// 全局放入header视图
appController.renderAll()


const appCollectionController = require('./controllers/app-collection-controller');
// collection放入main视图
appCollectionController.renderCollection();
