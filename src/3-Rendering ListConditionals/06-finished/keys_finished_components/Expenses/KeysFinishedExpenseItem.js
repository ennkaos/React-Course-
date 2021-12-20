import React from 'react';

import KeysFinishedExpenseDate from './KeysFinishedExpenseDate';
import KeysFinishedUI from '../UI/KeysFinishedUI';
import './KeysFinishedExpenseItem.css';

const KeysFinishedExpenseItem = (props) => {
  return (
    <li>
      <KeysFinishedUI className='expense-item'>
        <KeysFinishedExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </KeysFinishedUI>
    </li>
  );
};

export default KeysFinishedExpenseItem;
