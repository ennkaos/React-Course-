import React from 'react';

import KeysSolutionExpenseDate from './KeysSolutionExpenseDate';
import KeysSolutionUI from '../UI/KeysSolutionUI';


const KeysSolutionExpenseItem = (props) => {
  return (
    <KeysSolutionUI className='expense-item'>
      <KeysSolutionExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </KeysSolutionUI>
  );
}

export default KeysSolutionExpenseItem;
