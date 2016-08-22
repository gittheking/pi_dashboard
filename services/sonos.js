const sonos = require('sonos');

function getCurrentTrack(req,res,next) {
  sonos.search((device, model) => {
    if( model !== 'BR100') {
      device.currentTrack((err,info) => {
        res.trackInfo = info;
        next();
      })
    }
  })
}

module.exports = { getCurrentTrack }
