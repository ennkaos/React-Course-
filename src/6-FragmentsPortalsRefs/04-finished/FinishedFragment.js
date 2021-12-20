import React, { useState, Fragment } from 'react';

import FinishedFragmentErrorModal from './finished_fragments_components/UI/FinishedFragmentErrorModal';
import FinishedFragmentAddUser from './finished_fragments_components/Users/FinishedFragmentAddUser';
import FinishedFragmentUsersList from './finished_fragments_components/Users/FinishedFragmentUsersList';

function FinishedFragment() {
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
      <FinishedFragmentAddUser onAddUser={addUserHandler} />
      <FinishedFragmentUsersList users={usersList} />
      <FinishedFragmentErrorModal></FinishedFragmentErrorModal>
    </Fragment>
  );
}

export default FinishedFragment;
