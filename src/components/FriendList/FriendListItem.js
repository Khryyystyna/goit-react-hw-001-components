import  PropTypes from 'prop-types'
import { FriendList } from "./FriendList";

export const FriendListItems = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend =>
                <li key={friend.id}>
                    <FriendList friend={friend} />
                </li>)}
        </ul>
    );
};

FriendListItems.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
  })).isRequired,
};