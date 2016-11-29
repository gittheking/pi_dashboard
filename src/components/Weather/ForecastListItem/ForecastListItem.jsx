import React from 'react';
import style from './ForecastListItem.css';

const ForecastListItem = props => (
  <div className={style['forecast-item']}>
    <h5>{props.day.substring(0, 3)}</h5>
    <h6>{props.date}</h6>
    <p>{props.max}</p>
    <p>{props.min}</p>
  </div>
);

export default ForecastListItem;
