import React from 'react';


import KeysUI from '../UI/KeysUI';


const KeysExpenseItem = (props) => {
  return (
    <KeysUI className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </KeysUI>
  );
}

export default KeysExpenseItem;
