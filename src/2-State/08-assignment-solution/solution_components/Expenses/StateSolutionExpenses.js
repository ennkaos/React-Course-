import React, { useState } from 'react';

import StateSolutionExpenseItem from './StateSolutionExpenseItem';
import StateSolutionUI from '../UI/StateSolutionUI';
import StateSolutionExpensesFilter from './StateSolutionExpensesFilter';

const StateSolutionExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <StateSolutionUI className='expenses'>
        <StateSolutionExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <StateSolutionExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <StateSolutionExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <StateSolutionExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <StateSolutionExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </StateSolutionUI>
    </div>
  );
};

export default StateSolutionExpenses;
