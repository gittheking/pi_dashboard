const fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

function getFiveDayForecast(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=New+York,NY,us&units=imperial&cnt=40&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    res.forecast = data;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getFiveDayForecast };
