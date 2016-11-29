import React from 'react';
import ForecastListItem from '../ForecastListItem/ForecastListItem.jsx';
import style from './ForecastList.css';

const ForecastList = props => {
  const forecastList = props.forecast.map((forecast, i) => 
    <ForecastListItem
      key={i}
      {...forecast}
    />
  );
  
  return (
    <div id={style['forecast-container']}>
      {forecastList}
    </div>
  );
};

export default ForecastList;
