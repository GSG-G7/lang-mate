import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const Button = ({ text, className, onClick }) => (
  <button className={className} onClick={onClick} type="button">
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
