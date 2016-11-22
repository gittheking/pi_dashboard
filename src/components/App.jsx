import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Sonos from './Sonos/Sonos.jsx';
import MTA from './MTA/MTA.jsx';

export default class App extends React.Component {

  render() {
    if(this.props.children) console.log('Props: ', this.props.children);
    return (
      <div>
        <div id="nav-bar">
          <Link to={'/mta'}>
            <div id="mta-nav">

            </div>
          </Link>
          <Link to={'/sonos'}>Sonos</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
