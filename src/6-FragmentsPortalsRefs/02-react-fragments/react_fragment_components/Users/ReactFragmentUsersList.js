import React from 'react';

import ReactFragmentCard from '../UI/ReactFragmentCard';
import classes from './ReactFragmentUsersList.module.css';

const ReactFragmentUsersList = (props) => {
  return (
    <ReactFragmentCard className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </ReactFragmentCard>
  );
};

export default ReactFragmentUsersList;
