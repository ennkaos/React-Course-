import React from 'react';

import './FinishedDebugItem.css';

const FinishedDebugItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default FinishedDebugItem;
