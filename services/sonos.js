const sonos = require('sonos');

// const SONOS_HOST = process.env.SONOS_HOST || '192.168.1.159';
const SONOS_HOST = process.env.KING_HOST || '192.168.88.30';
const SONOS_PORT = process.env.SONOS_PORT || 1400;

function getCurrentTrack(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.currentTrack((err, track) => {
    if (err) console.log('Error: ', err);
    res.trackInfo = track;
    next();
  });
}

function getState(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.getCurrentState((err, state) => {
    if (err) console.log('Error: ', err);
    res.state = state;
    next();
  });
}

function getCurrentVolume(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.getVolume((err, volume) => {
    if (err) console.log('Error: ', err);
    res.volume = volume;
    next();
  });
}

function playNext(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.next((err) => {
    if (err) res.error = 'Error: You be at the end of the queue';
    next();
  });
}

function play(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.play((err) => {
    if (err) console.log('Error: ', err);
    next();
  });
}

function stop(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.pause((err) => {
    if (err) console.log('Error: ', err);
    next();
  });
}

function playPrevious(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
  mySonos.previous((err) => {
    if (err) res.error = 'Error: You may be at the begining of the queue';
    next();
  });
}

function updateVolume(req, res, next) {
  const mySonos = new sonos.Sonos(SONOS_HOST, SONOS_PORT);
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
