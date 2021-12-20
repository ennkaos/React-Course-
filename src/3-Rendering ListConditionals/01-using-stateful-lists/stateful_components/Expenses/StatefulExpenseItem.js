import React from 'react';

import StatefulUI from '../UI/StatefulUI';


const StatefulExpenseItem = (props) => {
  return (
    <StatefulUI className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </StatefulUI>
  );
}

export default StatefulExpenseItem;
