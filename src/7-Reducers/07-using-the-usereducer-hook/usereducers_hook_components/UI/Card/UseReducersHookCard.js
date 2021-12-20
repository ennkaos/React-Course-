import React from 'react';

import classes from './UseReducersHookCard.module.css';

const UseReducersHookCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseReducersHookCard;
