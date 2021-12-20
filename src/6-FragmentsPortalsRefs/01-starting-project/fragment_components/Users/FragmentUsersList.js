import React from 'react';

import FragmentCard from '../UI/FragmentCard';
import classes from './FragmentUsersList.module.css';

const FragmentUsersList = (props) => {
  return (
    <FragmentCard className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </FragmentCard>
  );
};

export default FragmentUsersList;
