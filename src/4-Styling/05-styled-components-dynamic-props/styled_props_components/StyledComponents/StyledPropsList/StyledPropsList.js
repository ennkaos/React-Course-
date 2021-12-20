import React from 'react';

import StyledPropsItem from '../StyledPropsItem/StyledPropsItem';
import './StyledPropsList.css';

const StyledPropsList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StyledPropsItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StyledPropsItem>
      ))}
    </ul>
  );
};

export default StyledPropsList;
