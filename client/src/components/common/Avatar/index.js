import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Avatar = ({ src, altText, className }) => {
  return (
    <div className="avatar">
      <img src={src} alt={altText} className={`avatar__image ${className}`} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Avatar;
