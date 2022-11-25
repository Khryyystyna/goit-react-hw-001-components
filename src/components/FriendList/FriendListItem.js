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
