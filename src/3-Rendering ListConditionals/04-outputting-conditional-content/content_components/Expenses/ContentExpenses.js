import React, { useState } from 'react';

import ContentExpenseItem from './ContentExpenseItem';
import ContentUI from '../UI/ContentUI';
import ContentExpensesFilter from './ContentExpensesFilter';


const ContentExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ContentExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <ContentUI className='expenses'>
        <ContentExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </ContentUI>
    </div>
  );
};

export default ContentExpenses;
