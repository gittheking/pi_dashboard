const fetch               = require('node-fetch');
const { getNextFiveDays } = require('../utils/date-format');

const API_KEY = process.env.WEATHER_API_KEY;

function filterForecast(forecast) {
  const results = [];
  forecast.forEach((data, i) => {
    if (i === 0) {
      results.push({
        date: data.dt_txt.split(' ')[0],
        min: data.main.temp_min,
        max: data.main.temp_max,
      });
    } else if (results[results.length - 1].date !== data.dt_txt.split(' ')[0]) {
      results.push({
        date: data.dt_txt.split(' ')[0],
        min: data.main.temp_min,
        max: data.main.temp_max,
      });
    } else {
      if (results[results.length - 1].min > data.main.temp_min) {
        results[results.length - 1].min = data.main.temp_min;
      }
      if (results[results.length - 1].max < data.main.temp_max) {
        results[results.length - 1].max = data.main.temp_max;
      }
    }
  });

  while (results.length > 5) {
    results.shift();
  }

  const nextDays = getNextFiveDays();

  results.forEach((day) => {
    let date = day.date.split('-');
    date.shift();
    date = date.join('/');
    day.date = date;
    day.day = nextDays.shift();
  });

  return results;
}

function getCurrentWeather(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=New+York,NY&units=imperial&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    res.currentWeather = data;
    next();
  })
  .catch(err => console.log(err));
}

function getFiveDayForecast(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=New+York,NY,us&units=imperial&cnt=40&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    res.forecast = filterForecast(data.list);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getFiveDayForecast, getCurrentWeather };
