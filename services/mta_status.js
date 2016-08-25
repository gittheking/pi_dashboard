const fetch       = require('node-fetch');
const parseString = require('xml2js').parseString;

function getTrainStatus(req,res,next) {
  fetch('http://web.mta.info/status/serviceStatus.txt')
  .then( response => response.text())
  .then( data => {
    parseString(data,(err,result) => {
      if(err) throw err;
      res.trains = result.service.subway[0].line;
      next();
    })
  })
}

function formatStatusText(statusText) {
  return statusText.replace(/<(?:.|\n)*?>/gm, '');
};

module.exports = { getTrainStatus };
