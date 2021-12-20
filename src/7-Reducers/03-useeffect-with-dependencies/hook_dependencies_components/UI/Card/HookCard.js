import React from 'react';

import classes from './HookCard.module.css';

const HookCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default HookCard;
