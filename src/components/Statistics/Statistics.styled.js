import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: white;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-weight: 700;
  height: 100px;
`;

const setBg = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  color: white;
  background-color: ${setBg};

  padding: 20px;
  width: calc(100% / ${props => props.Length});
`;

export const Percentage = styled.span`
  font-size: 30px;
`;
