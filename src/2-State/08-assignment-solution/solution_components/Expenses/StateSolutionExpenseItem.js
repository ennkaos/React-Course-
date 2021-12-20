import React, { useState } from 'react';

import StateSolutionUI from '../UI/StateSolutionUI';


const StateSolutionExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <StateSolutionUI className='expense-item'>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </StateSolutionUI>
  );
}

export default StateSolutionExpenseItem;
