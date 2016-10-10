const router = require('express').Router();
const sonos = require('../services/sonos');

function sendInfo(req, res) {
  res.json({ trackInfo: res.trackInfo });
}

function sendState(req, res) {
  let result;
  if (res.error) {
    result = res.error;
  } else {
    result = 'success';
  }
  res.json({ response: result });
}

router.get('/track', sonos.getCurrentTrack, sendInfo);

router.get('/next', sonos.playNext, sonos.getCurrentTrack, sendInfo);

router.get('/previous', sonos.playPrevious, sonos.getCurrentTrack, sendInfo);

router.get('/play', sonos.play, sonos.getState, sendState);

router.get('/stop', sonos.stop, sonos.getState, sendState);

router.get('/volume', sonos.getCurrentVolume, (req, res) => {
  res.json({ volume: res.volume });
});

router.get('/state', sonos.getState, (req, res) => {
  res.json({ state: res.state });
});

router.put('/volume/:value', sonos.updateVolume, (req, res) => {
  console.error('Error: ', res.error);
});

module.exports = router;
