import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
    <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
  );
};


  FriendListItem.propTypes = {
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
  };
