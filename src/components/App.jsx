import UserProfile from "./Profile/UserProfile";
import user from "../UserData/user"
export const App = () => {
  return (
    <div
      style={{
        height: '45vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};

console.log(user)
