import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ friendsData }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friendsData.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
