import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({
  userName,
  imageSrc,
  userBio,
  nativeLanguage,
  learningLanguage,
}) => (
  <div className="userCard">
    <img scr={imageSrc} alt="userImage" className="userCard-image" />
    <div className="userCard-content">
      <h2>{userName}</h2>
      <p>{userBio}</p>
      <div className="userCard-content-languages">
        <div className="userCard-content-languages-native">
          <h3>Native</h3>
          <h4>{nativeLanguage}</h4>
        </div>
        <div className="userCard-content-languages-learning">
          <h3>learning</h3>
          <h1>{learningLanguage}</h1>
        </div>
      </div>
    </div>
  </div>
);
UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  userBio: PropTypes.string.isRequired,
  nativeLanguage: PropTypes.string.isRequired,
  learningLanguage: PropTypes.string.isRequired,
};

export default UserCard;
