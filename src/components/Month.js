import React from 'react';
import PropTypes from 'prop-types';
import { UsersList } from './UsersList';

function Month({ monthName, users }) {
  let colorClass;

  if (users.length <= 2) {
    colorClass = 'alert alert-secondary item';
  } else if (users.length >= 3 && users.length <= 6) {
    colorClass = 'alert alert-primary item';
  } else if (users.length >= 7 && users.length <= 10) {
    colorClass = 'alert alert-success item';
  } else if (users.length > 10) {
    colorClass = 'alert alert-danger item';
  }

  return (
    <div className={colorClass}>
      {monthName}
      <UsersList users={users} />
    </div>
  );
}

Month.propTypes = {
  monthName: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export { Month };
