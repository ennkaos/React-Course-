import React, { useState } from 'react';

import FragmentAddUser from './fragment_components/Users/FragmentAddUser';
import FragmentUsersList from './fragment_components/Users/FragmentUsersList';

function Fragment() {
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
    <div>
      <FragmentAddUser onAddUser={addUserHandler} />
      <FragmentUsersList users={usersList} />
    </div>
  );
}

export default Fragment;
