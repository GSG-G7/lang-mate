import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserCard from '../../../common/UserCard';
import './index.css';

const People = ({ users }) => {
  return (
    <section className="main-feed__people">
      {users ? (
        users.map(userInfo => (
          <Link
            key={userInfo.id}
            to={{
              pathname: `/profile/${userInfo.username}`,
              state: { userInfo },
              userInfo,
            }}
            style={{ textDecoration: 'none' }}
          >
            <UserCard className="" userInfo={userInfo} />
          </Link>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </section>
  );
};

People.defaultProps = {
  users: [],
};

People.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default People;
