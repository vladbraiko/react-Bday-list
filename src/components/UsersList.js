import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

function UsersList(props) {
  const { users } = props;
  return (
    <ul className="drop-down-list">
      {users.map(user => (
        <li className="user-item" key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export { UsersList };
