import React from 'react';

import FinishedFragmentCard from '../UI/FinishedFragmentCard';
import classes from './FinishedFragmentUsersList.module.css';

const FinishedFragmentUsersList = (props) => {
  return (
    <FinishedFragmentCard className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </FinishedFragmentCard>
  );
};

export default FinishedFragmentUsersList;
