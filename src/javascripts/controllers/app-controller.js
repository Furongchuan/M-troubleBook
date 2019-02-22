const appHeaderView = require('../views/app-header.html');
const renderAll = () => {
  $('#app #header').html(appHeaderView);
}

module.exports = { 
  renderAll
 }