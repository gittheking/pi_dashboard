import React  from 'react';
import styles from './MTACurrentLine.css';

const MTACurrentLine = (props) => {
  const subwayLines = props.currentLine.split('').map((line, i) =>
    <div className={`${styles['subway-line']} ${styles['line-' + props.currentLine]}`} key={i}>
      {line}
    </div>
  );

  return (
    <div className={styles['mta-current-line-container']}>
      <div className={styles['item-container']}>
        {subwayLines}
      </div>
      <h3 className={styles['current-status']}>{ props.currentLineStatus }</h3>
      <p className={styles['current-status-text']}>{ props.currentLineText }</p>
    </div>
  );
};

MTACurrentLine.propTypes = {
  currentLine: React.PropTypes.string.isRequired,
  currentLineStatus: React.PropTypes.string.isRequired,
  currentLineText: React.PropTypes.string.isRequired,
};

export default MTACurrentLine;
