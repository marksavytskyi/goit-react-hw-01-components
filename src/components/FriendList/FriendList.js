import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            ava={avatar}
            friendName={name}
            isOnline={isOnline}
          ></FriendListItem>
        );
      })}
    </List>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
};
