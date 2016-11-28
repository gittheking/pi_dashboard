import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather.jsx';
import ForecastList from './ForecastList/ForecastList.jsx';
import style from './Weather.css';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      current: {
        conditionIcon: '🌫',
        conditionDescription: 'mist',
        temp: 0,
        tempMin: 0,
        tempMax: 1000,
      },
      forecast: [],
    };
  }

  componentWillMount() {
    this.getCurrentWeather();
    this.getWeatherForecast();
  }

  getCurrentWeather() {
    fetch('/weather/current')
    .then(r => r.json())
    .then(current => this.setState({ current: current.weather }))
    .catch(err => console.log(err));
  }

  getWeatherForecast() {
    fetch('/weather/forecast')
    .then(r => r.json())
    .then(forecast => this.setState({ forecast: forecast.forecast }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="weather-container">
        <CurrentWeather weather={this.state.current} />
        <ForecastList forecast={this.state.forecast} />
      </div>
    );
  }
}

export default Weather;
