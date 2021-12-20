import React from 'react';

import KeysFinishedExpenseItem from './KeysFinishedExpenseItem';
import './KeysFinishedExpensesList.css';

const KeysFinishedExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <KeysFinishedExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default KeysFinishedExpensesList;
