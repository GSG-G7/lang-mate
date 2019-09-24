import React from 'react';
import propTypes from 'prop-types';
import { profilePath, settingsPath, logoutPath } from './pathData';
import './index.css';

const UserMenu = ({ username }) => (
  <div className="user-menu">
    <nav className="user-menu__nav">
      <a href={`/profile/${username}`} className="user-menu__nav--link">
        <svg
          className="user-menu__nav--svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            cpRule="evenodd"
            d={profilePath}
            fill="#7E7E7E"
          />
        </svg>
        <span>Profile</span>
      </a>
      <a href="/settings" className="user-menu__nav--link">
        <svg
          className="user-menu__nav--svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            cpRule="evenodd"
            d={settingsPath}
            fill="#8A8A8A"
          />
        </svg>
        Settings
      </a>
      <a href="/logout" className="user-menu__nav--link">
        <svg
          className="user-menu__nav--svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            cpRule="evenodd"
            d={logoutPath}
            fill="#BF2929"
          />
        </svg>
        Logout
      </a>
    </nav>
  </div>
);
UserMenu.propTypes = { username: propTypes.string.isRequired };

export default UserMenu;
