const router             = require('express').Router();
const { getTrainStatus } = require('../services/mta_status');

router.get('/',getTrainStatus,(req,res) => {
  res.json({status: res.trains});
});

module.exports = router;
