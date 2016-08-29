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

function playNext(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.next((err,nexted) => {
        if(err) throw err;
        next();
      });
    }
  });
}

function play(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.play((err,playing) => {
        if(err) throw err;
        next();
      });
    }
  });
}

function stop(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.stop((err,stopped) => {
        if(err) throw err;
        next();
      });
    }
  });
}

function playPrevious(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.previous((err,previoused) => {
        if(err) throw err;
        next();
      });
    }
  });
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

module.exports = { getCurrentTrack,
                   getCurrentVolume,
                   updateVolume,
                   playPrevious,
                   playNext,
                   play,
                   stop }
