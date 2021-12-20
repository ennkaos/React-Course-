import React, { useState } from 'react';

import KeysExpenseItem from './KeysExpenseItem';
import KeysUI from '../UI/KeysUI';
import KeysExpensesFilter from './KeysExpensesFilter';


const KeysExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <KeysUI className='expenses'>
        <KeysExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <KeysExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </KeysUI>
    </div>
  );
};

export default KeysExpenses;
