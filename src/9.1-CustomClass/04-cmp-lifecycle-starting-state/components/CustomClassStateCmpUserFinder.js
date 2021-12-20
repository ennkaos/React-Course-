import { Fragment, useState, useEffect } from 'react';

import CustomClassStateCmpUsers from './CustomClassStateCmpUsers';
import classes from './CustomClassStateCmpUserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const CustomClassStateCmpUserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <CustomClassStateCmpUsers users={filteredUsers} />
    </Fragment>
  );
};

export default CustomClassStateCmpUserFinder;
