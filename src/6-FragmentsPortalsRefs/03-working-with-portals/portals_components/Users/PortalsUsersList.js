import React from 'react';

import PortalsCard from '../UI/PortalsCard';
import classes from './PortalsUsersList.module.css';

const PortalsUsersList = (props) => {
  return (
    <PortalsCard className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </PortalsCard>
  );
};

export default PortalsUsersList;
