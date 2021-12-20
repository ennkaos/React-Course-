import React from 'react';

import BindingExpenseItem from './BindingExpenseItem';
import BindingUI from '../UI/BindingUI';

const BindingExpenses = (props) => {
  return (
    <BindingUI className="expenses">
      <BindingExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <BindingExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <BindingExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <BindingExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </BindingUI>
  );
}

export default BindingExpenses;
