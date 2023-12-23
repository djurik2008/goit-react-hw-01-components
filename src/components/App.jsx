import UserProfile from './Profile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import user from '../Data/userData';
import statisticsData from '../Data/statisticsData';
import friendsData from '../Data/friendsData';
export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friendsData={friendsData} />
    </div>
  );
};
