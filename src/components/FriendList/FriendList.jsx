import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({friends})=>{

return <ul className={css.friend_list}>
{friends.map(friend => <li key={friend.id} className={css.item}>
  <span className={css.status} style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}></span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>)}
</ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};