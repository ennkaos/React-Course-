import React from 'react';

import StylingClassesItem from '../StylingClassesItem/StylingClassesItem';
import './StylingClassesList.css';

const StylingClassesList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StylingClassesItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StylingClassesItem>
      ))}
    </ul>
  );
};

export default StylingClassesList;
