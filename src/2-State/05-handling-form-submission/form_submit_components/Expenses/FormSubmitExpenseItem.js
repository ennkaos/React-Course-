import React, { useState } from 'react';
import FormSubmitUI from '../UI/FormSubmitUI';





const FormSubmitExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <FormSubmitUI  className='expense-item'>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </FormSubmitUI >
  );
}

export default FormSubmitExpenseItem;
