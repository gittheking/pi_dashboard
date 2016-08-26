const fetch       = require('node-fetch');
const parseString = require('xml2js').parseString;

function getTrainStatus(req,res,next) {
  fetch('http://web.mta.info/status/serviceStatus.txt')
  .then( response => response.text())
  .then( data => {
    parseString(data,(err,result) => {
      if(err) throw err;
      let trains = result.service.subway[0].line;
      trains.forEach(train => {
        train.text[0] = formatStatusText(train.text[0]);
      });
      res.trains = trains;
      next();
    })
  })
}

function formatStatusText(statusText) {
  return statusText.replace(/<(?:.|\n)*?>|&[\w]*;/gm, '');
};

module.exports = { getTrainStatus };
