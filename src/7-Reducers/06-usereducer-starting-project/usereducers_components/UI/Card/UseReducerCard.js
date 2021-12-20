import React from 'react';

import classes from './UseReducerCard.module.css';

const UseReducerCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseReducerCard;
