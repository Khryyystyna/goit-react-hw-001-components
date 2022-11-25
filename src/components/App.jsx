import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json'
import { StatisticsList } from './Statistics/StatisticsList';
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';
import { FriendListItems } from './FriendList/FriendListItem';
import transactions from '../transactions.json';
import { TransactionItems } from './TransactionHistory/TransactionItems';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="UPLOAD STATS" stats={data} />
      <StatisticsList items={data} />

      <FriendListItems friends={friends} />;

      <TransactionItems items={transactions}/>;
    </>
  );
};
