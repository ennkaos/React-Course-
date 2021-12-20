import React from 'react';

import classes from './UseEffectSummaryCard.module.css';

const UseEffectSummaryCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseEffectSummaryCard;
