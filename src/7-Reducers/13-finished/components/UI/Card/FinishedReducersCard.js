import React from 'react';

import classes from './FinishedReducersCard.module.css';

const FinishedReducersCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default FinishedReducersCard;
