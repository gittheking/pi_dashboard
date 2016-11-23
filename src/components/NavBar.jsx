import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import mtaLogo from '../img/MTA_NYC_logo.svg';
import clockLogo from '../img/clock-logo.svg';
import musicLogo from '../img/music-logo.svg';
import weatherLogo from '../img/weather-logo.svg';
import style from './NavBar.css';

const NavBar = props => {
  return (
    <div id={style['app-nav']}>
      <Link to={'/'} onClick={event => props.handleAppToggle}>
        <div id="clock-nav" className={style['nav-logos']}>
          <img id={style['clock-logo']} src={clockLogo} alt="Clock"/>
        </div>
      </Link>
      <Link to={'/mta'} onClick={event => props.handleAppToggle}>
        <div id="mta-nav" className={style['nav-logos']}>
          <img id={style['mta-logo']} src={mtaLogo} alt="MTA"/>
        </div>
      </Link>
      <Link to={'/sonos'} onClick={event => props.handleAppToggle}>
        <div id="sonos-nav" className={style['nav-logos']}>
          <img id={style['music-logo']} src={musicLogo} alt=""/>
        </div>
      </Link>
      <Link to={'/'} onClick={event => props.handleAppToggle}>
        <div id="weather-nav" className={style['nav-logos']}>
          <img id={style['weather-logo']} src={weatherLogo} alt=""/>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
