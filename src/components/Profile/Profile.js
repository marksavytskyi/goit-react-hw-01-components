import PropTypes from 'prop-types';
import {
  Wrapper,
  Image,
  Description,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  Stats,
  StatsItem,
  Quantity,
  StatsLabel,
} from './Profile.styled';

function Profile(user) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user.user;
  return (
    <Wrapper className="profile">
      <Description>
        <Image src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers: </StatsLabel>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views: </StatsLabel>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes: </StatsLabel>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
