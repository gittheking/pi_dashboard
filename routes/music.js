const router                  = require('express').Router();
const { getCurrentTrack,
        getCurrentVolume,
        updateVolume     }    = require('../services/sonos');

router.get('/',getCurrentTrack,getCurrentVolume,(req,res) => {
  res.json({
            trackInfo: res.trackInfo,
            volume:    res.volume
           });
});

router.put('/:volume',updateVolume,(req,res) => {
  console.log(req.params);
});

module.exports = router;
