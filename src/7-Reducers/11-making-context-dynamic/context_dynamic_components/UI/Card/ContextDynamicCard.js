import React from 'react';

import classes from './ContextDynamicCard.module.css';

const ContextDynamicCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default ContextDynamicCard;
