const http        = require('http');
const parseString = require('xml2js').parseString;

function getTrainStatus(req,res,next) {
  http.get('http://web.mta.info/status/serviceStatus.txt', function(response) {
    let completeResponse = '';
    response.on('data', chunk => {
      completeResponse += chunk;
    });
    response.on('end', () => {
      parseString(completeResponse, (err, result) => {
        if(err) throw err;
        res.trains = result.service.subway[0].line;
        next(); 
      });
    });
  });
}

function formatStatusText(statusText) {
  return statusText.replace(/<(?:.|\n)*?>/gm, '');
};

module.exports = { getTrainStatus };
