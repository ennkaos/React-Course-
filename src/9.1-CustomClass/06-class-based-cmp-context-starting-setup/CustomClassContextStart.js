import CustomClassContextStartUserFinder from './components/CustomClassContextStartUserFinder';
import CustomClassContextStartUsersContext from './store/CustomClassContextStart-users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function CustomClassContextStart() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <CustomClassContextStartUsersContext.Provider value={usersContext}>
      <CustomClassContextStartUserFinder />
    </CustomClassContextStartUsersContext.Provider>
  );
}

export default CustomClassContextStart;
