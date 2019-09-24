import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { profilePath, settingsPath, logoutPath } from './pathData';
import './index.css';

const renderSvg = (path, fill) => (
  <svg
    className="user-menu__nav--svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" cpRule="evenodd" d={path} fill={fill} />
  </svg>
);

const UserMenu = ({ username }) => (
  <div className="user-menu">
    <nav className="user-menu__nav">
      <Link to={`/profile/${username}`} className="user-menu__nav--link">
        {renderSvg(profilePath, '#8A8A8A')}
        <span>Profile</span>
      </Link>
      <Link to="/settings" className="user-menu__nav--link">
        {renderSvg(settingsPath, '#8A8A8A')}
        Settings
      </Link>
      <Link to="/logout" className="user-menu__nav--link">
        {renderSvg(logoutPath, '#BF2929')}
        Logout
      </Link>
    </nav>
  </div>
);

UserMenu.propTypes = { username: propTypes.string.isRequired };

export default UserMenu;
