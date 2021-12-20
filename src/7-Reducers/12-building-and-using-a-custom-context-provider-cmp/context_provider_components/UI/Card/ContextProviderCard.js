import React from 'react';

import classes from './ContextProviderCard.module.css';

const ContextProviderCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default ContextProviderCard;
