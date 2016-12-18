import React       from 'react';
import mtaLogo     from '../img/MTA_NYC_logo.svg';
import clockLogo   from '../img/clock-logo.svg';
import musicLogo   from '../img/music-logo.svg';
import weatherLogo from '../img/weather-logo.svg';
import style       from './NavBar.css';

const NavBar = props => {
  return (
    <div id={style['app-nav']}>
      <div
        id="clock-nav"
        className={style['nav-logos']}
        onClick={props.handleAppToggle}
      >
        <img id={style['clock-logo']} src={clockLogo} alt="Clock" />
      </div>
      <div
        id="mta-nav"
        className={style['nav-logos']}
        onClick={props.handleAppToggle}
      >
        <img id={style['mta-logo']} src={mtaLogo} alt="MTA" />
      </div>
      <div
        id="sonos-nav"
        className={style['nav-logos']}
        onClick={props.handleAppToggle}
      >
        <img id={style['music-logo']} src={musicLogo} alt="" />
      </div>
      <div
        id="weather-nav"
        className={style['nav-logos']}
        onClick={props.handleAppToggle}
      >
        <img id={style['weather-logo']} src={weatherLogo} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
