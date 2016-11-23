import React           from 'react';
import MTALineListItem from '../MTALineListItem/MTALineListItem.jsx';
import styles          from './MTALineList.css';

const MTALineList = (props) => {
  const trainList = props.trains.map((line, i) =>
    <MTALineListItem
      key={i}
      line={line.name}
      onTrainSelect={props.onTrainSelect}
    />
  );

  return (
    <div className={styles['line-list-container']}>
      {trainList}
    </div>
  );
};

MTALineList.propTypes = {
  trains: React.PropTypes.array.isRequired,
  onTrainSelect: React.PropTypes.func.isRequired,
};

export default MTALineList;
