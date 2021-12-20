import React from 'react';

import ContentExpenseDate from './ContentExpenseDate';
import ContentUI from '../UI/ContentUI';


const ContentExpenseItem = (props) => {
  return (
    <ContentUI className='expense-item'>
      <ContentExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </ContentUI>
  );
}

export default ContentExpenseItem;
