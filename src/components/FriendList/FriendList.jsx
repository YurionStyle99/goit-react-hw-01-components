import css from "./FriendList.module.css";
import { FriendListItem } from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({friends})=>{
return <ul className={css.friend_list}>
{friends.map(friend => 
<FriendListItem
key={friend.id}
isOnline ={friend.isOnline}
avatar={friend.avatar}
name={friend.name}
/>
)}
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