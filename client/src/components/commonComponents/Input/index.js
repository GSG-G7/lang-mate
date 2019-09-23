import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      aria-label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

// Checking for the value of the props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
