import React from 'react';

import StateSolutionExpenseForm from './StateSolutionExpenseForm';


const StateSolutionNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <StateSolutionExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default StateSolutionNewExpense;
