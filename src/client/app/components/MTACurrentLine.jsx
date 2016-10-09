import React from 'react';
import styles from './MTACurrentLine_style.js';

const MTACurrentLine = (props) => {
  return (
    <div style={styles.div}>
      <h2 style={styles.h2}>{ props.currentLine }</h2>
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
