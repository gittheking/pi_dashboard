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
      activeApp: 'clock',
      time: '00:00 AM',
      timeInterval: undefined
    };
  }

  componentWillMount(){
    const timeInterval = setInterval(() => {
      this.setState({time: moment().format('LT')});
    }, 15000);
    this.setState({ timeInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.timeInterval);
  }

  handleAppRender() {
    if (this.props.children) {
      return (
        <div id={style['app-container']}>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div id={style['app-container']}>
          <div id={style['clock']}>  
            {this.state.time}
          </div>
        </div>
      )
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
      <div id={style['app']}>
        <NavBar />
        {this.handleAppRender()}
      </div>
    );
  }
}
