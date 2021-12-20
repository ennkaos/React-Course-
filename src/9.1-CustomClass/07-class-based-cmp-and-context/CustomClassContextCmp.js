import CustomClassContextCmpUserFinder from './components/CustomClassContextCmpUserFinder';
import CustomClassContextCmpUsersContext from './store/CustomClassContextCmp-users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function CustomClassContextCmp() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <CustomClassContextCmpUsersContext.Provider value={usersContext}>
      <CustomClassContextCmpUserFinder />
    </CustomClassContextCmpUsersContext.Provider>
  );
}

export default CustomClassContextCmp;
