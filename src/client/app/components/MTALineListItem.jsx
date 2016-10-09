import React from 'react';
import styles from './MTALineListItem_style.js';

const MTALineListItem = (props) => {
  return (
    <div>
      <h2 style={styles.h2}>{props.line}</h2>
    </div>
  );
};

export default MTALineListItem;
