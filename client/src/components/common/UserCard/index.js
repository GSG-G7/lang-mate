import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const UserCard = ({
  userInfo: { avatar, username, nativeLang, learningLang },
}) => (
  <div className="user-card">
    <img
      src={avatar || 'https://img.icons8.com/clouds/2x/user.png'}
      alt="userImage"
      className="user-card__image"
    />
    <div className="user-card__content">
      <h2>{username}</h2>
      <div className="user-card__content__languages">
        <div className="user-card__content__languages-native">
          <h4>Native</h4>
          <h2>{nativeLang}</h2>
        </div>
        <div className="user-card__content__languages-learning">
          <h4>learning</h4>
          <h2>{learningLang}</h2>
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
