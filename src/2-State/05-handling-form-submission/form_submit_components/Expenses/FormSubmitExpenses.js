import React from 'react';
import FormSubmitUI from '../UI/FormSubmitUI';


import FormSubmitExpenseItem from './FormSubmitExpenseItem';



const FormSubmitExpenses = (props) => {
  return (
    <FormSubmitUI  className="expenses">
      <FormSubmitExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <FormSubmitExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <FormSubmitExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <FormSubmitExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </FormSubmitUI >
  );
}

export default FormSubmitExpenses;
