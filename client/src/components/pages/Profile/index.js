import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import BackButton from '../../common/BackButton';
import Button from '../../common/Button';
import upperCase from '../../../helpers/capitalizeFirstLetter';
import './index.css';
import api from '../../../services/api';

class Profile extends Component {
  state = { userInfo: null };

  componentDidMount() {
    const {
      location: {
        state: { userInfo },
      },
    } = this.props;

    if (userInfo) {
      this.setState({ userInfo });
    } else {
      const {
        match: {
          params: { username },
        },
        history: { push },
      } = this.props;
      api.getUserInfo(username).then(res => {
        if (res) {
          this.setState({ userInfo: res[0] });
        }
        if (res.message) {
          push('/  ');
        }
      });
    }
  }

  render() {
    const { userInfo } = this.state;
    return (
      <>
        {userInfo ? (
          <>
            <BackButton back={() => {}} />
            <div className="profile">
              <Avatar
                width="180"
                height="180"
                src={userInfo.avatar_path || 'https://i.imgur.com/fLrnzVg.jpg'}
                className="profile__avatar"
                altText="user profile pic"
              />
              <h1 className="profile__username">
                {upperCase(userInfo.username)}
              </h1>
              <Link to={`/channel/${userInfo.id}`}>
                <Button className="profile__chat-btn" text="Chat" />
              </Link>
              <div className="profile__lang--native">
                <h4 className="profile__lang__header">Native Language</h4>
                <div className="profile__lang__info">
                  <h4>{upperCase(userInfo.nativeLang.name)}</h4>
                </div>
              </div>

              <div className="profile__lang--learning">
                <h4 className="profile__lang__header">Learning Language</h4>
                <div className="profile__lang__info">
                  <h4>{upperCase(userInfo.learningLang.name)}</h4>
                </div>
              </div>

              <div className="profile__bio">
                <h4 className="profile__bio__header">Bio</h4>
                <p className="profile__bio__p">{userInfo.bio}</p>
              </div>
              <div className="profile__interests">
                <h4 className="profile__interests__header">Interests</h4>
                <div className="profile__interests__list">
                  {userInfo.interests.map(({ id: key, name }) => (
                    <div key={key}>{upperCase(name)}</div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          'loading ..!!'
        )}
      </>
    );
  }
}

Profile.propTypes = {
  location: propTypes.shape({
    state: propTypes.shape({
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
    }).isRequired,
  }).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      username: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
export default Profile;
