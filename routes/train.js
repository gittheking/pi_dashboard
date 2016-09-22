const router = require('express').Router();
const mta    = require('../services/mta_status');

router.get('/', mta.getTrainStatus, (req, res) => {
  res.json({ status: res.trains });
});

module.exports = router;
