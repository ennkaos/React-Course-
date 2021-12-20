import React, { useState } from 'react';

import KeysSolutionExpenseItem from './KeysSolutionExpenseItem';
import KeysSolutionUI from '../UI/KeysSolutionUI';
import KeysSolutionExpensesFilter from './KeysSolutionExpensesFilter';


const KeysSolutionExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <KeysSolutionUI className='expenses'>
        <KeysSolutionExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <KeysSolutionExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </KeysSolutionUI>
    </div>
  );
};

export default KeysSolutionExpenses;
