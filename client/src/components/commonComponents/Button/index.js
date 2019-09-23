import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);
Button.PropTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
