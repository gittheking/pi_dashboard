import React from 'react';
import styles from './MTACurrentLine.css';

const MTACurrentLine = (props) => {
  const subwayLines = props.currentLine.split('').map((line, i) => {
    return (
      <div className={`${styles.subwayLine} ${styles['line' + props.currentLine]}`} key={i}>
        {line}
      </div>
    );
  });

  return (
    <div className={styles.mtaCurrentLineContainer}>
      <div className={styles.itemContainer}>
        {subwayLines}
      </div>
      <h3>{ props.currentLineStatus }</h3>
      <p className={styles.currentStatusText}>{ props.currentLineText }</p>
    </div>
  );
};

MTACurrentLine.propTypes = {
  currentLine: React.PropTypes.string.isRequired,
  currentLineStatus: React.PropTypes.string.isRequired,
  currentLineText: React.PropTypes.string.isRequired,
};

export default MTACurrentLine;
