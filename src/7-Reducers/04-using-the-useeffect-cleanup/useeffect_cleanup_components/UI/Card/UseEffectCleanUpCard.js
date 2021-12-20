import React from 'react';

import classes from './UseEffectCleanUpCard.module.css';

const UseEffectCleanUpCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseEffectCleanUpCard;
