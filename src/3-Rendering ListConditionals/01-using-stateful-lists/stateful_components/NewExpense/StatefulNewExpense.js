import React from 'react';

import StatefulExpenseForm from './StatefulExpenseForm';


const StatefulNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <StatefulExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default StatefulNewExpense;
