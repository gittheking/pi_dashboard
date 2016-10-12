import React from 'react';
import styles from './MTALineListItem.css';

const MTALineListItem = (props) => {
  const subwayLines = props.line.split('').map((line, i) =>
      <div 
        key={i}
        className={`${styles.subwayLine} ${styles['line' + props.line]}`}
      >
        {line}
      </div>
  );

  return (
    <div 
      className={styles.itemContainer}
      onClick={() => props.onTrainSelect(props.line)}
    >
      {subwayLines}
    </div>
  );
};

export default MTALineListItem;
