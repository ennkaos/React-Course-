import React from 'react';

import DebugItem from '../DebugItem/DebugItem';
import './DebugList.css';

const DebugList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <DebugItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </DebugItem>
      ))}
    </ul>
  );
};

export default DebugList;
