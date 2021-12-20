import React from 'react';

import FinishedDebugItem from '../FinishedDebugItem/FinishedDebugItem';
import './FinishedDebugList.css';

const FinishedDebugList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <FinishedDebugItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </FinishedDebugItem>
      ))}
    </ul>
  );
};

export default FinishedDebugList;
