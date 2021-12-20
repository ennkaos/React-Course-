import React from 'react';

import classes from './ReducersCard.module.css';

const ReducersCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default ReducersCard;
