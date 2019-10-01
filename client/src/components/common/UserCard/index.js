import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const UserCard = ({
  userInfo: { avatar_path: avatar, username, nativeLang, learningLang },
}) => (
  <div className="user-card">
    <img
      src={
        avatar ||
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
      }
      alt="userImage"
      className="user-card__image"
    />

    <div className="user-card__content">
      <h2 className="user-card__username">{username}</h2>
      <div className="user-card__languages">
        <div className="user-card__content__native">
          <span className="user-card__content__span">Native</span>
          <h3 className="user-card__content__language">{nativeLang.name}</h3>
        </div>
        <div className="user-card__content__learning">
          <span className="user-card__content__span">learning</span>
          <h3 className="user-card__content__language">{learningLang.name}</h3>
        </div>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar_path: PropTypes.string,
    nativeLang: PropTypes.objectOf.isRequired,
    learningLang: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default UserCard;
