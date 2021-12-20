import React, { useState } from 'react';

import KeysFinishedUI from '../UI/KeysFinishedUI';
import KeysFinishedExpensesFilter from './KeysFinishedExpensesFilter';
import KeysFinishedExpensesList from './KeysFinishedExpensesList';
import KeysFinishedExpensesChart from './KeysFinishedExpensesChart';
import './KeysFinishedExpenses.css';

const KeysFinishedExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <KeysFinishedUI className='expenses'>
        <KeysFinishedExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <KeysFinishedExpensesChart expenses={filteredExpenses} />
        <KeysFinishedExpensesList items={filteredExpenses} />
      </KeysFinishedUI>
    </div>
  );
};

export default KeysFinishedExpenses;
