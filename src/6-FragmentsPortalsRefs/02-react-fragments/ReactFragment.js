import React, { useState, Fragment } from 'react';

import ReactFragmentAddUser from './react_fragment_components/Users/ReactFragmentAddUser';
import ReactFragmentUsersList from './react_fragment_components/Users/ReactFragmentUsersList';

function ReactFragment() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <ReactFragmentAddUser onAddUser={addUserHandler} />
      <ReactFragmentUsersList users={usersList} />
    </Fragment>
  );
}

export default ReactFragment;
