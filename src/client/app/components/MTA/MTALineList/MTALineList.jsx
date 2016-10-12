import React from 'react';
import MTALineListItem from '../MTALineListItem/MTALineListItem.jsx';
import styles from './MTALineList.css';

const MTALineList = (props) => {
  const trainList = props.trains.map((line, i) => {
    return (
      <MTALineListItem
        key={i}
        line={line.name}
        onTrainSelect={props.onTrainSelect}
      />
    );
  });

  return (
    <div className={styles.lineListContainer}>
      {trainList}
    </div>
  );
};

MTALineList.propTypes = {
  trains: React.PropTypes.array.isRequired,
};

export default MTALineList;
