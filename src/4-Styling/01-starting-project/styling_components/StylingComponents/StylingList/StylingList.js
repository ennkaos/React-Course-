import React from 'react';

import StylingItem from '../StylingItem/StylingItem';
import './StylingList.css';

const StylingList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StylingItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StylingItem>
      ))}
    </ul>
  );
};

export default StylingList;
