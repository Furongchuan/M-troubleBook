const appHeaderView = require('../views/app-header.html');

const render = () => {
  $('#app #header').html(appHeaderView)      
}

module.exports = { render }