const appDetailedView = require('../views/app-detailed.html');
const { getDetailed} = require('../models/app-detailed-model');

const renders = async() => {
  let Detailed = await getDetailed();
  console.log(Detailed)

  let templateDetail = Handlebars.compile(appDetailedView);
  $('#app #detailed').html(templateDetail(Detailed));
/*   $('#app #detailed').html(templateDetail({ Detaileds: Detailed}));
 */}


module.exports = { renders}