import css from './FriendListItem.module.css';
const FriendListItem = props => {
  const { avatar, name, isOnline, id } = props;
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
