import React, { useState } from 'react';

import KeysSolution1UI from '../UI/KeysSolution1UI';
import KeysSolution1ExpensesFilter from './KeysSolution1ExpensesFilter';
import KeysSolution1ExpensesList from './KeysSolution1ExpensesList';


const KeysSolution1Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <KeysSolution1UI className='expenses'>
        <KeysSolution1ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <KeysSolution1ExpensesList items={filteredExpenses} />
      </KeysSolution1UI>
    </div>
  );
};

export default KeysSolution1Expenses;
