import React, { useState, Fragment } from 'react';
import PortalsErrorModal from './portals_components/UI/PortalsErrorModal';

import PortalsAddUser from './portals_components/Users/PortalsAddUser';
import PortalsUsersList from './portals_components/Users/PortalsUsersList';



function Portals() {
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
      <PortalsAddUser onAddUser={addUserHandler} />
      <PortalsUsersList users={usersList} />
      <PortalsErrorModal></PortalsErrorModal>

    </Fragment>
  );
}

export default Portals;
