import React from 'react';
import MTALineListItem from './MTALineListItem.jsx';

const MTALineList = (props) => {
  const trainList = props.trains.map((line, i) => {
    return (
      <MTALineListItem
      key={i}
      line={line} />
    );
  });

  return (
    <ul className="subway-list">
      {trainList}
    </ul>
  );
};

export default MTALineList;
