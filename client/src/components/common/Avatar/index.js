import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Avatar = ({ width, height, src, altText, className }) => {
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt={altText}
      className={`avatar ${className}`}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Avatar;
