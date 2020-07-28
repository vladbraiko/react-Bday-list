import React from 'react';
import PropTypes, { exact } from 'prop-types';
import { Month } from './Month';

function MonthList({ months }) {
  return (
    <ul>
      {months.map(month => (
        <li key={month.month}>
          <Month monthName={month.month} users={month.users} />
        </li>
      ))}
    </ul>
  );
}

MonthList.propTypes = {
  months: PropTypes.arrayOf(
    exact({
      month: PropTypes.string,
      users: PropTypes.array,
    }),
  ).isRequired,
};

export { MonthList };
