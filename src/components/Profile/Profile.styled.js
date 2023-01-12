import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: white;
  width: 300px;
  margin: 0 auto 40px auto;
  border-radius: 15px;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ProfileName = styled.p`
  font-size: 20px;
`;

export const ProfileTag = styled.p`
  color: gray;
  font-size: 16px;
`;
export const ProfileLocation = styled(ProfileTag)``;

export const Stats = styled.ul`
  display: flex;
  align-items: center;

  border-top: 1px solid black;
  background-color: aliceblue;

  list-style: none;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatsLabel = styled.label`
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
