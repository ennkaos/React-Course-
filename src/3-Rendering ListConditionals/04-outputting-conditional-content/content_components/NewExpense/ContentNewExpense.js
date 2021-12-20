import React from 'react';

import ContentExpenseForm from './ContentExpenseForm';


const ContentNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ContentExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default ContentNewExpense;
