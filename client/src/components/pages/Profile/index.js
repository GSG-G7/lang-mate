import React from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import BackButton from '../../common/BackButton';
import Button from '../../common/Button';
import upperCase from '../../../helpers/capitalizeFirstLetter';
import './index.css';

const Profile = ({
  userInfo: {
    username,
    id,
    email,
    bio,
    avatar_path: avatarPath,
    nativeLang,
    learningLang,
    interests,
  },
}) => (
  <>
    <BackButton back={() => {}} />
    <div className="profile">
      <Avatar
        width="200"
        height="200"
        src={avatarPath}
        className="profile__avatar"
        altText="user profile pic"
      />
      <h1 className="profile__username">{upperCase(username)}</h1>
      <Link to={`/channel/${id}`}>
        <Button className="profile__chat-btn" text="Chat" />
      </Link>
      <div className="profile__lang--native">
        <h4 className="profile__lang__header">Native Language</h4>
        <div className="profile__lang__info">
          <h4>{upperCase(nativeLang.name)}</h4>
        </div>
      </div>

      <div className="profile__lang--learning">
        <h4 className="profile__lang__header">Learning Language</h4>
        <div className="profile__lang__info">
          <h4>{upperCase(learningLang.name)}</h4>
        </div>
      </div>

      <div className="profile__bio">
        <h4 className="profile__bio__header">Bio</h4>
        <p className="profile__bio__p">{bio}</p>
      </div>
      <div className="profile__interests">
        <h4 className="profile__interests__header">Interests</h4>
        <div className="profile__interests__list">
          {interests.map(({ id: key, name }) => (
            <div key={key}>{upperCase(name)}</div>
          ))}
        </div>
      </div>
    </div>
  </>
);
Profile.defaultProps = {
  userInfo: {
    id: 1,
    username: 'amoodaa',
    email: 'amoodaa@gmail.com',
    isactive: true,
    bio: 'HI I LOVE PPl',
    avatar_path:
      'https://d2ln1xbi067hum.cloudfront.net/assets/default_user-951af10295a22e5f7fa2fa6165613c14.png',
    interests: [
      {
        id: 1,
        name: 'music',
      },
      {
        id: 2,
        name: 'sports',
      },
    ],
    learningLang: {
      id: 6,
      name: 'japanese',
    },
    nativeLang: {
      id: 1,
      name: 'arabic',
    },
  },
};
Profile.propTypes = {
  userInfo: propTypes.shape({
    username: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    email: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    avatar_path: propTypes.string.isRequired,
    nativeLang: propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired,
    learningLang: propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired,
    interests: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
      })
    ),
  }),
};
export default Profile;
