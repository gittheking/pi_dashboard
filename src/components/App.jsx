import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import mtaLogo from '../img/MTA_NYC_logo.svg';
import clockLogo from '../img/clock-logo.svg';
import musicLogo from '../img/music-logo.svg';
import weatherLogo from '../img/weather-logo.svg';
import NavBar from './NavBar.jsx';
import style from './App.css';
import moment from 'moment';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      activeApp: 'clock'
    };
  }

  handleAppRender() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return moment().format('LT');
    }
  }

  handleAppToggle(e) {
    // if(e.target.id.indexOf('clock') >= 0) this.setState({ activeApp: 'clock' });
    // if(e.target.id.indexOf('mta') >= 0) this.setState({ activeApp: 'mta' });
    // if(e.target.id.indexOf('music') >= 0) this.setState({ activeApp: 'music' });
    // if(e.target.id.indexOf('weather') >= 0) this.setState({ activeApp: 'weather' });
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.handleAppRender()}
      </div>
    );
  }
}
