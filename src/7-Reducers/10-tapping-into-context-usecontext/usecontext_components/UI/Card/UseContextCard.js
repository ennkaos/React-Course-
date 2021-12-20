import React from 'react';

import classes from './UseContextCard.module.css';

const UseContextCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseContextCard;
