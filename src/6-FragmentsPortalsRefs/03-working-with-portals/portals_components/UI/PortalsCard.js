import React from 'react';

import classes from './PortalsCard.module.css';

const PortalsCard = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default PortalsCard;
