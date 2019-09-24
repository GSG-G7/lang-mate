import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({
  type,
  name,
  className,
  label,
  placeholder,
  value,
  onChange,
  errMsg,
}) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        className={`custom-input ${className}`}
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="err-msg">{errMsg}</span>
    </div>
  );
};

// Checking for the value of the props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errMsg: PropTypes.func.isRequired,
};

export default Input;