import React, { useState } from 'react';

import StatefulExpenseItem from './StatefulExpenseItem';
import StatefulUI from '../UI/StatefulUI';
import StatefulExpensesFilter from './StatefulExpensesFilter';


const StatefulExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <StatefulUI className='expenses'>
        <StatefulExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <StatefulExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </StatefulUI>
    </div>
  );
};

export default StatefulExpenses;
