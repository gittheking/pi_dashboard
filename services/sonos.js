const sonos = require('sonos');

function getCurrentTrack(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.currentTrack((err,info) => {
        res.trackInfo = info;
        next();
      });
    }
  });
}

function getCurrentVolume(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.getVolume((err,volume) => {
        res.volume = volume;
        next();
      })
    }
  })
}

function updateVolume(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.setVolume(req.params.volume, err => {
        if(err) throw err;
        next();
      });
    }
  });
}

module.exports = { getCurrentTrack, getCurrentVolume, updateVolume }
