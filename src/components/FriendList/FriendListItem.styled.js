import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 2px;
  outline: 1px solid black;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 5px 10px black;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  margin-right: 16px;
`;
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
