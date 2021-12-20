import React from 'react';

import KeysSolution1ExpenseDate from './KeysSolution1ExpenseDate';
import KeysSolution1UI from '../UI/KeysSolution1UI';


const KeysSolution1ExpenseItem = (props) => {
  return (
    <li>
      <KeysSolution1UI className='expense-item'>
        <KeysSolution1ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </KeysSolution1UI>
    </li>
  );
};

export default KeysSolution1ExpenseItem;
