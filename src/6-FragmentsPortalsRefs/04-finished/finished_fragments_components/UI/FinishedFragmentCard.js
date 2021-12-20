import React from 'react';

import classes from './FinishedFragmentCard.module.css';

const FinishedFragmentCard = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default FinishedFragmentCard;
