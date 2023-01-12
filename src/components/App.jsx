import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import users from './user';
import stat from './data';
import friends from './friends';
import transactions from './transactions';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      {<Profile user={users}></Profile>}
      {<Statistics stat={stat} title="Upload stats"></Statistics>}
      {<FriendList friends={friends}></FriendList>}
      {<TransactionHistory transactions={transactions}></TransactionHistory>}
    </div>
  );
};
