import React from 'react';

import StylingModuleItem from '../StylingModuleItem/StylingModuleItem';
import './StylingModuleList.css';

const StylingModuleList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StylingModuleItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StylingModuleItem>
      ))}
    </ul>
  );
};

export default StylingModuleList;
