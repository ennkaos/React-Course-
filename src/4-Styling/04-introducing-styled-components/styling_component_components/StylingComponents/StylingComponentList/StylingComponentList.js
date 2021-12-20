import React from 'react';

import StylingComponentItem from '../StylingComponentItem/StylingComponentItem';
import './StylingComponentList.css';

const StylingComponentList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StylingComponentItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StylingComponentItem>
      ))}
    </ul>
  );
};

export default StylingComponentList;
