import React from 'react';
import MTALineListItem from './MTALineListItem.jsx';
import styles from './MTALineList_style.js';

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
    <div style={styles.div}>
      {trainList}
    </div>
  );
};

MTALineList.propTypes = {
  trains: React.PropTypes.array.isRequired,
};

export default MTALineList;
