import PropTypes from 'prop-types';
import { Item, Status, Image, FriendName } from './FriendListItem.styled';

function FriendListItem({ ava, friendName, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Image src={ava} alt={friendName} width="48" />
      <FriendName>{friendName}</FriendName>
    </Item>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  ava: PropTypes.string,
  friendName: PropTypes.string,
  isOnline: PropTypes.bool,
};
