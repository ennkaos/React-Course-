import React from 'react';
import StateUpUI from '../UI/StateUpUI';

import StateUpExpenseItem from './StateUpExpenseItem';



const StateUpExpenses = (props) => {
  return (
    <StateUpUI  className="expenses">
      <StateUpExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <StateUpExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <StateUpExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <StateUpExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </StateUpUI >
  );
}

export default StateUpExpenses;
