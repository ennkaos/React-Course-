import React from 'react';

import StateUpExpenseForm from './StateUpExpenseForm';


const StateUpNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <StateUpExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default StateUpNewExpense;
