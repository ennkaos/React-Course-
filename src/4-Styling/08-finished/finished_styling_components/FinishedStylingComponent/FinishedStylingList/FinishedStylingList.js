import React from 'react';

import FinishedStylingItem from '../FinishedStylingItem/FinishedStylingItem';
import './FinishedStylingList.css';

const FinishedStylingList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <FinishedStylingItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </FinishedStylingItem>
      ))}
    </ul>
  );
};

export default FinishedStylingList;
