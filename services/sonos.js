const sonos = require('sonos');

function getCurrentTrack(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.currentTrack((err,info) => {
        if(err) console.log('Error: ',err);
        res.trackInfo = info;
        next();
      });
    }
  });
}

function getState(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.getCurrentState((err,state) => {
        res.state = state;
        next();
      })
    }
  });
}

function getCurrentVolume(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.getVolume((err,volume) => {
        if(err) console.log('Error: ',err);
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
        if(err) res.error = 'Error: You be at the end of the queue'
        next();
      });
    }
  });
}

function play(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.play((err,playing) => {
        if(err) console.log('Error: ',err);
        next();
      });
    }
  });
}

function stop(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.pause((err,paused) => {
        if(err) res.error = 'Error: There was an error pausing/stopping the music';
        next();
      });
    }
  });
}

function playPrevious(req,res,next) {
  sonos.search((device,model) => {
    if(model !== 'BR100') {
      device.previous((err,previoused) => {
        if(err) res.error = 'Error: You may be at the begining of the queue';
        next();
      });
    }
  });
}

function updateVolume(req,res,next) {
  sonos.search((device,model) => {
    if( model !== 'BR100') {
      device.setVolume(req.params.value, err => {
        if(err) res.error = 'Error: There was an issue with updating the volume';
        next();
      });
    }
  });
}

module.exports = { getCurrentTrack,
                   getCurrentVolume,
                   getState,
                   updateVolume,
                   playPrevious,
                   playNext,
                   play,
                   stop }
