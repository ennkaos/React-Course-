import React from 'react';

import KeysExpenseForm from './KeysExpenseForm';


const KeysNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <KeysExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default KeysNewExpense;
