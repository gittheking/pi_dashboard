const sonos = require('sonos');

function getCurrentTrack(req,res,next) {
  sonos.search(device => {
    device.currentTrack( (err,track) => {
      res.track = track;
      next();
    });
  });
}

module.exports = { getCurrentTrack }
