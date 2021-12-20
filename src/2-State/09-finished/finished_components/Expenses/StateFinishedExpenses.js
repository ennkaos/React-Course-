import React, { useState } from 'react';
import StateFinishedUI from '../UI/StateFinishedUI';

import StateFinishedExpenseItem from './StateFinishedExpenseItem';
import StateFinishedExpensesFilter from './StateFinishedExpensesFilter';


const StateFinishedExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <StateFinishedUI className='expenses'>
        <StateFinishedExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <StateFinishedExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <StateFinishedExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <StateFinishedExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <StateFinishedExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </StateFinishedUI>
    </div>
  );
};

export default StateFinishedExpenses;
