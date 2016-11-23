const sonos = require('sonos');

function getCurrentTrack(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.currentTrack((err, track) => {
    if (err) console.log('Error: ', err);
    res.trackInfo = track;
    next();
  });
}

function getState(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.getCurrentState((err, state) => {
    console.log(state);
    res.state = state;
    next();
  });
}

function getCurrentVolume(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.getVolume((err, volume) => {
    if (err) console.log('Error: ', err);
    res.volume = volume;
    next();
  });
}

function playNext(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.next((err) => {
    if (err) res.error = 'Error: You be at the end of the queue';
    next();
  });
}

function play(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.play((err) => {
    if (err) console.log('Error: ', err);
    next();
  });
}

function stop(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.pause((err) => {
    if (err) console.log('Error: ', err);
    next();
  });
}

function playPrevious(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.previous((err) => {
    if (err) res.error = 'Error: You may be at the begining of the queue';
    next();
  });
}

function updateVolume(req, res, next) {
  const mySonos = new sonos.Sonos('192.168.1.159', 1400);
  mySonos.setVolume(req.params.value, (err) => {
    if (err) res.error = 'Error: There was an issue with updating the volume';
    next();
  });
}

module.exports = { getCurrentTrack,
                   getCurrentVolume,
                   getState,
                   updateVolume,
                   playPrevious,
                   playNext,
                   play,
                   stop };
