import React from 'react';

import classes from './UseEffectCard.module.css';

const UseEffectCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseEffectCard;
