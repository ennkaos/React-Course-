import React from 'react';

import UpdateStateExpenseItem from './UpdateStateExpenseItem';
import UpdateStateUI from '../UI/UpdateStateUI';

const UpdateStateExpenses = (props) => {
  return (
    <UpdateStateUI className="expenses">
      <UpdateStateExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <UpdateStateExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <UpdateStateExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <UpdateStateExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </UpdateStateUI>
  );
}

export default UpdateStateExpenses;
