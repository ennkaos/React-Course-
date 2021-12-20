import React from 'react';

import StylingInlineItem from '../StylingInlineItem/StylingInlineItem';
import './StylingInlineList.css';

const StylingInlineList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StylingInlineItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StylingInlineItem>
      ))}
    </ul>
  );
};

export default StylingInlineList;
