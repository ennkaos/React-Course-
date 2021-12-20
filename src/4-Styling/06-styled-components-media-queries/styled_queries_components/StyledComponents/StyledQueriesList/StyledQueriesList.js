import React from 'react';

import StyledQueriesItem from '../StyledQueriesItem/StyledQueriesItem';
import './StyledQueriesList.css';

const StyledQueriesList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <StyledQueriesItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </StyledQueriesItem>
      ))}
    </ul>
  );
};

export default StyledQueriesList;
