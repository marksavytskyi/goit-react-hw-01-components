import PropTypes from 'prop-types';

import {
  Table,
  Thead,
  Title,
  Value,
  ValueString,
} from './TransactionHistory.styled';

function TransactionHistory({ transactions }) {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </Thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <ValueString indexString={index} key={id}>
              <Value>{type}</Value>
              <Value>{amount}</Value>
              <Value>{currency}</Value>
            </ValueString>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
