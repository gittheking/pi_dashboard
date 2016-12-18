import React, { Component } from 'react';
import moment from 'moment';
import MTA from './MTA/MTA.jsx';
import Sonos from './Sonos/Sonos.jsx';
import Weather from './Weather/Weather.jsx';
import NavBar from './NavBar.jsx';
import style from './App.css';
import musicNotes from '../img/music-notes.svg';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      activeApp: 'clock',
      time: moment().format('LT'),
      timeInterval: undefined,
      artist: 'Artist',
      title: 'Track',
      album: 'Album',
      albumArtURL: musicNotes,
      volume: '50',
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

  getTrackInfo() {
    fetch('/music/track')
    .then(response => response.json())
    .then((result) => {
      if (result.trackInfo) {
        const trackInfo = {};
        Object.keys(result.trackInfo).forEach((key) => {
          trackInfo[key] = result.trackInfo[key];
        });
        this.setState(trackInfo);
      }
    })
    .catch(err => console.log('Fetch error: ', err));
  }

  handleAppRender() {
    switch(this.state.activeApp) {
      case 'mta': return <MTA />;
      case 'music':
        return (
          <Sonos
            artist={this.state.artist}
            title={this.state.title}
            album={this.state.album}
            albumArtURL={this.state.albumArtURL}
            volume={this.state.volume}
            getTrackInfo={this.getTrackInfo.bind(this)}
          />
        );
      case 'weather': return <Weather />;
      case 'clock':
        return (
          <div id={style.clock}>
            {this.state.time}
          </div>
        );
      default: return <div>No app selected</div>;
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
