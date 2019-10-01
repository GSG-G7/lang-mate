import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserCard from '../../../common/UserCard';
import './index.css';

const People = ({ data }) => {
  return (
    <section className="main-feed__people">
      {data ? (
        data.map(userInfo => (
          <Link
            key={userInfo.id}
            to={{
              pathname: `/profile/${userInfo.username}`,
              state: { userInfo },
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

People.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

export default People;
