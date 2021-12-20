import React from 'react';
import StateFinishedExpenseForm from './StateFinishedExpenseForm';

const  StateFinishedNewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      < StateFinishedExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default  StateFinishedNewExpense;
