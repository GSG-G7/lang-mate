import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { profilePath, settingsPath, logoutPath } from './pathData';
import './index.css';

const renderSvg = (width, height, viewBox, path, fill) => (
  <svg
    className="user-menu__nav--svg"
    width={width}
    height={height}
    viewBox={viewBox}
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
        {renderSvg('24', '24', '0 0 24 24', profilePath, '#8A8A8A')}
        <span>Profile</span>
      </Link>
      <Link to="/settings" className="user-menu__nav--link">
        {renderSvg('24', '24', '0 0 24 24', settingsPath, '#8A8A8A')}
        Settings
      </Link>
      <Link to="/logout" className="user-menu__nav--link">
        {renderSvg('24', '24', '0 0 24 24', logoutPath, '#BF2929')}
        Logout
      </Link>
    </nav>
  </div>
);

UserMenu.propTypes = { username: propTypes.string.isRequired };

export default UserMenu;
