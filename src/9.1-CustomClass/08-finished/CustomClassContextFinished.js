import CustomClassContextFinishedUserFinder from './components/CustomClassContextFinishedUserFinder';
import CustomClassContextFinishedUsersContext from './store/CustomClassContextFinished-users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function CustomClassContextFinished() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <CustomClassContextFinishedUsersContext.Provider value={usersContext}>
      <CustomClassContextFinishedUserFinder />
    </CustomClassContextFinishedUsersContext.Provider>
  );
}

export default CustomClassContextFinished;
