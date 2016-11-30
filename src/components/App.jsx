import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import moment from 'moment';
import MTA from './MTA/MTA.jsx';
import Sonos from './Sonos/Sonos.jsx';
import Weather from './Weather/Weather.jsx';
import NavBar from './NavBar.jsx';
import style from './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      activeApp: 'clock',
      time: moment().format('LT'),
      timeInterval: undefined,
    };
  }

  componentDidMount() {
    console.log('Mounted');
    const timeInterval = setInterval(() => {
      this.setState({time: moment().format('LT')});
    }, 15000);
    this.setState({ timeInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.timeInterval);
  }

  handleAppRender() {
    switch(this.state.activeApp) {
      case 'mta': return <MTA />;
      case 'music': return <Sonos />;
      case 'weather': return <Weather />;
      case 'clock': return (
                      <div id={style.clock}>  
                        {this.state.time}
                      </div>
                    );
    }
  }

  handleAppToggle(e) {
    if (e.target.id.indexOf('clock') >= 0) this.setState({ activeApp: 'clock' });
    if (e.target.id.indexOf('mta') >= 0) this.setState({ activeApp: 'mta' });
    if (e.target.id.indexOf('music') >= 0) this.setState({ activeApp: 'music' });
    if (e.target.id.indexOf('weather') >= 0) this.setState({ activeApp: 'weather' });
  }

  render() {
    return (
      <div id={style.app}>
        <NavBar handleAppToggle={event => this.handleAppToggle(event)} />
        <div id={style['app-container']}>
          {this.handleAppRender()}
        </div>
      </div>
    );
  }
}
