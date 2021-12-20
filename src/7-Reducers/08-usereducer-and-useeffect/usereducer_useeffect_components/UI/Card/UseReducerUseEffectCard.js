import React from 'react';

import classes from './UseReducerUseEffectCard.module.css';

const UseReducerUseEffectCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UseReducerUseEffectCard;
