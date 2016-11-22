import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Sonos from './Sonos/Sonos.jsx';
import MTA from './MTA/MTA.jsx';
import mtaLogo from '../img/MTA_NYC_logo.svg';
import clockLogo from '../img/clock-logo.svg';
import musicLogo from '../img/music-logo.svg';
import weatherLogo from '../img/weather-logo.svg';
import style from './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeApp: 'clock'
    };
  }

  handleAppToggle(e) {
    console.log(e.target.id);
    if(e.target.id.indexOf('clock') >= 0) this.setState({ activeApp: 'clock' });
    if(e.target.id.indexOf('mta') >= 0) this.setState({ activeApp: 'mta' });
    if(e.target.id.indexOf('music') >= 0) this.setState({ activeApp: 'music' });
    if(e.target.id.indexOf('weather') >= 0) this.setState({ activeApp: 'weather' });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div id={style['app-nav']}>
          <Link to={'/'} onClick={event => this.handleAppToggle(event)}>
            <div id="clock-nav" className={style['nav-logos']}>
              <img id={style['clock-logo']} src={clockLogo} alt="Clock"/>
            </div>
          </Link>
          <Link to={'/mta'} onClick={event => this.handleAppToggle(event)}>
            <div id="mta-nav" className={style['nav-logos']}>
              <img id={style['mta-logo']} src={mtaLogo} alt="MTA"/>
            </div>
          </Link>
          <Link to={'/sonos'} onClick={event => this.handleAppToggle(event)}>
            <div id="sonos-nav" className={style['nav-logos']}>
              <img id={style['music-logo']} src={musicLogo} alt=""/>
            </div>
          </Link>
          <Link to={'/'} onClick={event => this.handleAppToggle(event)}>
            <div id="weather-nav" className={style['nav-logos']}>
              <img id={style['weather-logo']} src={weatherLogo} alt=""/>
            </div>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
