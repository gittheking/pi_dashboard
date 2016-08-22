const router              = require('express').Router();
const { getCurrentTrack } = require('../services/sonos');

router.get('/',getCurrentTrack,(req,res) => {
  res.json({trackInfo: res.trackInfo});
});

module.exports = router;
