import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto 0 auto;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Thead = styled.thead``;

export const Title = styled.th`
  width: 300px;
  height: 40px;

  border-radius: 5px;
  background-color: #66b2ff;
  color: white;
  text-transform: uppercase;
`;

export const ValueString = styled.tr`
  height: 50px;
  background-color: ${props =>
    props.indexString % 2 === 0 ? 'white' : '#e0e0e0'};
`;

export const Value = styled.td`
  color: gray;
  text-align: center;
  text-transform: capitalize;
  outline: 1px solid lightgray;
`;
