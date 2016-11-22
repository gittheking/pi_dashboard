import React          from 'react';
import MTACurrentLine from './MTACurrentLine/MTACurrentLine.jsx';
import MTALineList    from './MTALineList/MTALineList.jsx';
import styles         from './MTA.css';

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


  onTrainSelect(selectedTrain) {
    const currentTrain = this.state.trains.filter((train) => {
      return train.name === selectedTrain;
    });
    this.setState({
      currentLine: selectedTrain,
      currentLineStatus: currentTrain[0].status,
      currentLineText: currentTrain[0].text,
    });
  }

  getTrains() {
    fetch('/train')
    .then(response => response.json())
    .then((result) => {
      const trains = [];
      let currentLineStatus = '';
      let currentLineText = '';
      result.status.forEach((train) => {
        trains.push({
          name: train.name[0],
          status: train.status[0],
          text: train.text[0],
        });
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
        <h1 className={styles.heading}>Subway</h1>
        <div className={styles['mta-status-container']}>
          <MTACurrentLine
            currentLine={this.state.currentLine}
            currentLineStatus={this.state.currentLineStatus}
            currentLineText={this.state.currentLineText}
          />
          <MTALineList
            onTrainSelect={this.onTrainSelect.bind(this)}
            trains={this.state.trains}
          />
        </div>
      </div>
    );
  }
}
