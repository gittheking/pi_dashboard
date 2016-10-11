import React from 'react';
import styles from './MTALineListItem_style.js';

const MTALineListItem = (props) => {
  const subwayLines = props.line.split('').map((line, i) => {
    styles.subwayLine.backgroundColor = styles[`line${props.line}`].backgroundColor;
    return (
      <div 
        key={i}
        style={styles.subwayLine}
      >
        {line}
      </div>
    );
  });

  return (
    <div 
      style={styles.itemContainer}
      onClick={() => props.onTrainSelect(props.line)}
    >
      {subwayLines}
    </div>
  );
};

export default MTALineListItem;
