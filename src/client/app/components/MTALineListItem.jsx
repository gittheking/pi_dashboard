import React from 'react';

const MTALineListItem = (props) => {
  return (
    <li>
      <div className="subway-list-item">
        {props.line}
      </div>
    </li>
  );
};

export default MTALineListItem;
