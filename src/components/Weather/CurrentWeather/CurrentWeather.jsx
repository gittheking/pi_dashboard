import React from 'react';
import style from './CurrentWeather.css';

const CurrentWeather = props => (
  <div id="current-weather-container">
    <div>
      <h1 id={style['current-temp']}>{props.weather.temp}°F</h1>
    </div>
    <div id="current-description">
      <h3>{props.weather.conditionIcon} {props.weather.conditionDescription.toUpperCase()}</h3>
    </div>
    <div id="high-low">
      <p id="high">HIGH: {props.weather.tempMax}°F</p>
      <p id="low">LOW: {props.weather.tempMin}°F</p>
    </div>
  </div>
);

export default CurrentWeather;
