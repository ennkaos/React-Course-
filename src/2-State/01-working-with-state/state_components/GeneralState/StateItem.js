import React, { useState } from 'react';
import State1 from './State-1';



const StateItem = (props) => {
  // function clickHandler() {}

  const [title, setTitle] = useState(props.title);
 
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <State1 className='expense-item'>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </State1>
  );
}

export default StateItem;
