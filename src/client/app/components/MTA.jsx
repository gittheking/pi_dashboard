import React from 'react';
import MTACurrentLine from './MTACurrentLine.jsx';
import MTALineList from './MTALineList.jsx';
import styles from './MTA_style.js';

export default class MTA extends React.Component {

  constructor() {
    super();

    this.state = {
      trains: [],
      currentLine: '456',
      currentLineStatus: 'GOOD SERVICE',
      currentLineText: '',
    };

    this.getTrains();
  }

  getTrains() {
    fetch('/train')
    .then(response => response.json())
    .then((result) => {
      const trains = [];
      let currentLineStatus = '';
      let currentLineText = '';
      result.status.forEach((train) => {
        trains.push(train.name[0]);
        if (train.name[0] === this.state.currentLine) {
          currentLineStatus = train.status[0];
          currentLineText = train.text[0];
        }
      });
      this.setState({
        trains,
        currentLineStatus,
        currentLineText,
      });
    });
  }

  render() {
    return (
      <div>
        <h1 style={styles.h1}>Subway</h1>
        <div style={styles.mtaStatusContainer}>
          <MTACurrentLine
            currentLine={this.state.currentLine}
            currentLineStatus={this.state.currentLineStatus}
            currentLineText={this.state.currentLineText}
          />
          <MTALineList
            trains={this.state.trains}
          />
        </div>
      </div>
    );
  }
}
