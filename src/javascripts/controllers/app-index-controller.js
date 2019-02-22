const appIndexTopView = require('../views/app-index_top.html');
const { getBooksList } = require('../models/app-index-model')

const render = async() => {
  let BooksList = await getBooksList();
  let template = Handlebars.compile(appIndexTopView);
  $('#app #main #tbook').html(template({ taps: BooksList}))
}

module.exports = { render }