import React  from 'react';
import styles from './MTALineListItem.css';

const MTALineListItem = (props) => {
  const subwayLines = props.line.split('').map((line, i) =>
    <div
      key={i}
      className={`${styles['subway-line']} ${styles['line-' + props.line]}`}
    >
      {line}
    </div>
  );

  return (
    <div>
      <div
        className={styles['item-container']}
        onClick={() => props.onTrainSelect(props.line)}
      >
        {subwayLines}
      </div>
      <hr />
    </div>
  );
};

MTALineListItem.propTypes = {
  line: React.PropTypes.string.isRequired,
  onTrainSelect: React.PropTypes.func.isRequired,
};

export default MTALineListItem;
