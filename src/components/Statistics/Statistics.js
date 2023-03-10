import PropTypes from 'prop-types';

import {
  Section,
  StatList,
  Title,
  Item,
  Percentage,
} from './Statistics.styled';

function Statistics({ title = '', stat }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stat.map(({ id, label, percentage }) => {
          return (
            <Item key={id} Length={stat.length}>
              <span>{label} </span>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
