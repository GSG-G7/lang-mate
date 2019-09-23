import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const UserCard = ({
  userInfo: { avatar, username, bio, nativeLang, learningLang },
}) => (
  <div className="userCard">
    <img
      src={avatar || 'https://img.icons8.com/clouds/2x/user.png'}
      alt="userImage"
      className="userCard-image"
    />
    <div className="userCard-content">
      <h2>{username}</h2>
      <div className="userCard-content-languages">
        <div className="userCard-content-languages-native">
          <h3>Native</h3>
          <h4>{nativeLang}</h4>
        </div>
        <div className="userCard-content-languages-learning">
          <h3>learning</h3>
          <h4>{learningLang}</h4>
        </div>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    nativeLang: PropTypes.string.isRequired,
    learningLang: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
