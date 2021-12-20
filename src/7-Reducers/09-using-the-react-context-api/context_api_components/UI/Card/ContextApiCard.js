import React from 'react';

import classes from './ContextApiCard.module.css';

const ContextApiCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default ContextApiCard;
