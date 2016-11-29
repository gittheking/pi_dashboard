const router = require('express').Router();
const { getFiveDayForecast,
        getCurrentWeather } = require('../services/weather');

router.get('/current', getCurrentWeather, (req, res) => {
  res.json({ weather: res.currentWeather });
});

router.get('/forecast', getFiveDayForecast, (req, res) => {
  res.json({ forecast: res.forecast, days: res.days });
});

module.exports = router;
