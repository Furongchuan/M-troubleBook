const appIndexTopView = require('../views/app-index_top.html');
const appIndexBottomView = require('../views/app-index_bottom.html');
const { getBooksList,getBooksListDown } = require('../models/app-index-model');

const render = async() => {
  let BooksList = await getBooksList();
  console.log(BooksList)

  let template = Handlebars.compile(appIndexTopView);
  $('#app #main #tbook').html(template({ taps: BooksList}));
}


const renderDown = async() => {
  let BooksLists = await getBooksListDown();
  
  console.log(BooksLists)
  let downs = Handlebars.compile(appIndexBottomView);
  $('#app #main #tbookDown').html(downs({ tapsDown: BooksLists}));
}

module.exports = { render,renderDown }