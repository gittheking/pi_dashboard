import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';
import MTA from './components/MTA/MTA.jsx';
import Sonos from './components/Sonos/Sonos.jsx';
import './css/normalize.min.css';
import './css/main.css';

// mount our App at #container
ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={App} >
      <Route path="mta" component={MTA} />
      <Route path="sonos" component={Sonos} />
    </Route>
  </Router>
), document.querySelector('#container'));
