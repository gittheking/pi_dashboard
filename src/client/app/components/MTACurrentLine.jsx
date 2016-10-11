import React from 'react';
import styles from './MTACurrentLine_style.js';

const MTACurrentLine = (props) => {
  const subwayLines = props.currentLine.split('').map((line, i) => {
    styles.subwayLine.backgroundColor = styles[`line${props.currentLine}`].backgroundColor;
    return (
      <div style={styles.subwayLine} key={i}>
        {line}
      </div>
    );
  });

  return (
    <div style={styles.div}>
      <div style={styles.itemContainer}>
        {subwayLines}
      </div>
      <h3>{ props.currentLineStatus }</h3>
      <p style={styles.p}>{ props.currentLineText }</p>
    </div>
  );
};

MTACurrentLine.propTypes = {
  currentLine: React.PropTypes.string.isRequired,
  currentLineStatus: React.PropTypes.string.isRequired,
  currentLineText: React.PropTypes.string.isRequired,
};

export default MTACurrentLine;
