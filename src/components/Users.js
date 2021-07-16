import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './layouts/Spinner';

import GithubContext from '../context/github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  // users: PropTypes.array.isRequired,
  // loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
