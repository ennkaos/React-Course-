import React from 'react';

import classes from './FragmentCard.module.css';

const FragmentCard = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default FragmentCard;
