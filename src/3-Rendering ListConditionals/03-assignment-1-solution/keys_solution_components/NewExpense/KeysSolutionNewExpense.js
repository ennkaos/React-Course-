import React from 'react';

import KeysSolutionExpenseForm from './KeysSolutionExpenseForm';


const KeysSolutionNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <KeysSolutionExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default KeysSolutionNewExpense;
