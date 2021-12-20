import React from 'react';

import InputsExpenseItem from './InputsExpenseItem';
import InputsUI from '../UI/InputsUI';


const InputsExpenses = (props) => {
  return (
    <InputsUI className="expenses">
      <InputsExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <InputsExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <InputsExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <InputsExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </InputsUI>
  );
}

export default InputsExpenses;
