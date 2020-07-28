import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <>
      <span>
        {user.firstName} {user.lastName}
      </span>
    </>
  );
}

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
};

export { User };
